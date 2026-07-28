import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import {
  addMentorMessage,
  closeMentorConversation,
  getMentorConversationById,
  startMentorConversation,
} from "@/lib/mentor-conversations";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { id } = await params;
  const conversation = await getMentorConversationById(id);
  if (!conversation) {
    return NextResponse.json({ error: "Mentor conversation not found." }, { status: 404 });
  }
  return NextResponse.json({ conversation });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const { id } = await params;
  let action: "start" | "close" | undefined;
  try {
    const body = (await request.json()) as { action?: unknown };
    if (body.action === "start" || body.action === "close") action = body.action;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!action) return NextResponse.json({ error: "Invalid action." }, { status: 400 });
  const conversation =
    action === "start"
      ? await startMentorConversation(id)
      : await closeMentorConversation(id);
  if (!conversation) {
    return NextResponse.json({ error: "Mentor conversation not found." }, { status: 404 });
  }
  return NextResponse.json({ conversation });
}

export async function POST(request: NextRequest, { params }: Params) {
  if (!(await isAdminAuthenticated())) return unauthorized();
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
    const conversation = await addMentorMessage({ id, role: "mentor", content: message });
    if (!conversation) {
      return NextResponse.json({ error: "Mentor conversation not found." }, { status: 404 });
    }
    return NextResponse.json({ conversation });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send reply." },
      { status: 400 }
    );
  }
}
