import { NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorized } from "@/lib/admin-auth";
import { getAllMentorConversations } from "@/lib/mentor-conversations";

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauthorized();
  const conversations = await getAllMentorConversations();
  const pendingCount = conversations.filter((item) => item.status === "pending").length;
  return NextResponse.json({ conversations, pendingCount });
}
