import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { findUserById } from "@/lib/users";
import { getExamById } from "@/lib/exams";
import { hasPaidPurchase } from "@/lib/purchases";
import {
  createMentorConversation,
  getMentorConversationsForUser,
  setTelegramAlertStatus,
  toPublicMentorConversation,
} from "@/lib/mentor-conversations";
import { sendMentorRequestAlert } from "@/lib/telegram-alerts";

export async function GET() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return NextResponse.json({ error: "Login required." }, { status: 401 });
  const premium = await hasPaidPurchase(userId);
  const conversations = premium ? await getMentorConversationsForUser(userId) : [];
  return NextResponse.json({ premium, conversations });
}

export async function POST(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return NextResponse.json({ error: "Login required." }, { status: 401 });
  if (!(await hasPaidPurchase(userId))) {
    return NextResponse.json(
      {
        error:
          "Ask a Mentor is a premium feature. Complete a token top-up to unlock it for 1 month.",
        requiresPremium: true,
      },
      { status: 402 }
    );
  }

  const user = await findUserById(userId);
  if (!user) return NextResponse.json({ error: "User not found." }, { status: 404 });

  let body: {
    examId?: unknown;
    transcript?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  const exam = typeof body.examId === "string" ? getExamById(body.examId) : undefined;
  if (!exam) return NextResponse.json({ error: "Select a valid qualification." }, { status: 400 });
  if (!Array.isArray(body.transcript)) {
    return NextResponse.json({ error: "Conversation transcript is required." }, { status: 400 });
  }
  const transcript = body.transcript
    .slice(-50)
    .filter(
      (item): item is { role: "user" | "assistant"; content: string } =>
        Boolean(
          item &&
            typeof item === "object" &&
            ("role" in item) &&
            (item.role === "user" || item.role === "assistant") &&
            ("content" in item) &&
            typeof item.content === "string"
        )
    )
    .map((item) => ({ role: item.role, content: item.content }));

  try {
    const { conversation, created } = await createMentorConversation({
      userId,
      userName: user.name,
      userEmail: user.email,
      examId: exam.id,
      examName: exam.name,
      transcript,
    });
    if (created) {
      const alertStatus = await sendMentorRequestAlert(conversation);
      await setTelegramAlertStatus(conversation.id, alertStatus);
    }
    return NextResponse.json(
      { conversation: toPublicMentorConversation(conversation), created },
      { status: created ? 201 : 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to request a mentor." },
      { status: 400 }
    );
  }
}
