import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import {
  changePassword,
  ensurePromoUnlimitedRenewal,
  updateUser,
} from "@/lib/users";
import { getExamById } from "@/lib/exams";

export async function GET() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) return NextResponse.json({ user: null });
  const user = await ensurePromoUnlimitedRenewal(userId);
  if (!user) return NextResponse.json({ user: null });
  return NextResponse.json({ user });
}

export async function PUT(request: NextRequest) {
  try {
    const userId = await getSessionUserIdFromCookies();
    if (!userId) return NextResponse.json({ error: "Please log in." }, { status: 401 });

    const body = await request.json();
    const action = String(body.action || "update");

    if (action === "changePassword") {
      await changePassword(userId, String(body.currentPassword || ""), String(body.newPassword || ""));
      return NextResponse.json({ ok: true });
    }

    // Tokens are only changed by chat consumption or admin top-up — never by client PUT.
    const patch: { name?: string; examId?: string | null } = {};
    if (typeof body.name === "string") patch.name = body.name.trim();
    if (body.examId === null) patch.examId = null;
    if (typeof body.examId === "string") {
      if (!getExamById(body.examId)) {
        return NextResponse.json({ error: "Invalid exam." }, { status: 400 });
      }
      patch.examId = body.examId;
    }

    const user = await updateUser(userId, patch);
    return NextResponse.json({ user });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Update failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
