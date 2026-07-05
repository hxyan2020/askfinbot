import { NextRequest, NextResponse } from "next/server";
import { getExamById } from "@/lib/exams";
import { generateReply } from "@/lib/llm";
import { containsProfanity, getProfanityRejection } from "@/lib/moderation";
import type { LLMProvider } from "@/lib/constants";

interface ChatRequestBody {
  examId: string;
  message: string;
  provider?: LLMProvider;
  history?: { role: "user" | "assistant"; content: string }[];
}

export async function POST(request: NextRequest) {
  try {
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
      });
    }

    const reply = await generateReply({
      provider,
      examName: exam.name,
      examFullName: exam.fullName,
      topics: exam.topics,
      messages: history.slice(-10),
      userMessage: message.trim(),
    });

    return NextResponse.json({ reply, moderated: false });
  } catch (error) {
    console.error("Chat API error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
