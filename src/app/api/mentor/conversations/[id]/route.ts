import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import {
  addMentorMessage,
  getMentorConversationForUser,
  toPublicMentorConversation,
} from "@/lib/mentor-conversations";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: Params) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return NextResponse.json({ error: "Login required." }, { status: 401 });
  const { id } = await params;
  const conversation = await getMentorConversationForUser(id, userId);
  if (!conversation) {
    return NextResponse.json({ error: "Mentor conversation not found." }, { status: 404 });
  }
  return NextResponse.json({ conversation: toPublicMentorConversation(conversation) });
}

export async function POST(request: NextRequest, { params }: Params) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return NextResponse.json({ error: "Login required." }, { status: 401 });
  const { id } = await params;
  let message = "";
  try {
    const body = (await request.json()) as { message?: unknown };
    message = typeof body.message === "string" ? body.message : "";
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!message.trim() || message.length > 8_000) {
    return NextResponse.json({ error: "Message must be 1–8,000 characters." }, { status: 400 });
  }
  try {
    const conversation = await addMentorMessage({
      id,
      role: "user",
      content: message,
      userId,
    });
    if (!conversation) {
      return NextResponse.json({ error: "Mentor conversation not found." }, { status: 404 });
    }
    return NextResponse.json({ conversation: toPublicMentorConversation(conversation) });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send message." },
      { status: 400 }
    );
  }
}
