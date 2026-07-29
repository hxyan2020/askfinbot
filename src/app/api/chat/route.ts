import { NextRequest, NextResponse } from "next/server";
import { getExamById } from "@/lib/exams";
import { generateReply } from "@/lib/llm";
import { containsProfanity, getProfanityRejection } from "@/lib/moderation";
import { retrieveContext } from "@/lib/rag/retrieve";
import type { LLMProvider } from "@/lib/constants";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import {
  consumeToken,
  ensurePromoUnlimitedRenewal,
  refundToken,
} from "@/lib/users";
import { ensureRelevantTopicsFooter } from "@/lib/response-topics";

interface ChatRequestBody {
  examId: string;
  message: string;
  provider?: LLMProvider;
  history?: { role: "user" | "assistant"; content: string }[];
}

export async function POST(request: NextRequest) {
  let consumedUserId: string | null = null;

  try {
    const userId = await getSessionUserIdFromCookies();
    if (!userId) {
      return NextResponse.json({ error: "Please log in to use AskFinBots." }, { status: 401 });
    }

    const account = await ensurePromoUnlimitedRenewal(userId);
    if (!account) {
      return NextResponse.json({ error: "Please log in to use AskFinBots." }, { status: 401 });
    }
    if (!account.unlimitedTokens && account.tokens <= 0) {
      return NextResponse.json(
        { error: "No tokens remaining. Please top up to continue.", tokens: 0 },
        { status: 402 }
      );
    }

    const body: ChatRequestBody = await request.json();
    const { examId, message, history = [] } = body;
    const provider: LLMProvider = body.provider === "deepseek" ? "deepseek" : "gemini";

    if (!examId || !message?.trim()) {
      return NextResponse.json(
        { error: "Exam and message are required." },
        { status: 400 }
      );
    }

    const exam = getExamById(examId);
    if (!exam) {
      return NextResponse.json({ error: "Invalid exam selected." }, { status: 400 });
    }

    if (containsProfanity(message)) {
      return NextResponse.json({
        reply: getProfanityRejection(provider),
        moderated: true,
        tokens: account.tokens,
      });
    }

    // Reserve token before calling the model; refund if the model fails.
    const updated = await consumeToken(userId);
    if (!updated) {
      return NextResponse.json(
        { error: "No tokens remaining. Please top up to continue.", tokens: 0 },
        { status: 402 }
      );
    }
    consumedUserId = userId;

    const ragContext = await retrieveContext(examId, message.trim(), 4);
    const qualificationTopics = Array.from(
      new Set([...exam.topics, ...exam.levels.flatMap((level) => level.topics)])
    );

    const { reply, providerUsed, fellBack } = await generateReply({
      provider,
      examName: exam.name,
      examFullName: exam.fullName,
      topics: qualificationTopics,
      messages: history.slice(-10),
      userMessage: message.trim(),
      ragContext,
    });
    const contextualizedReply = ensureRelevantTopicsFooter(
      reply,
      exam.name,
      qualificationTopics,
      message.trim()
    );

    consumedUserId = null; // success — keep the spent token

    return NextResponse.json({
      reply: contextualizedReply,
      moderated: false,
      usedRag: Boolean(ragContext),
      tokens: updated.tokens,
      providerUsed,
      fellBack,
    });
  } catch (error) {
    if (consumedUserId) {
      try {
        await refundToken(consumedUserId);
      } catch (refundError) {
        console.error("Token refund failed:", refundError);
      }
    }
    console.error("Chat API error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
