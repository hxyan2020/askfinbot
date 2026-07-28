import { NextRequest, NextResponse } from "next/server";
import { createPasswordResetToken, resetPasswordWithToken } from "@/lib/users";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = String(body.action || "request");

    if (action === "request") {
      try {
        const token = await createPasswordResetToken(String(body.email || ""));
        // Self-hosted: return code once so the user can complete reset without email infra.
        return NextResponse.json({
          ok: true,
          resetCode: token,
          message:
            "Reset code created. Use it below to set a new password. For help, contact Telegram support.",
        });
      } catch {
        return NextResponse.json({
          ok: true,
          message: "If that email exists, follow the reset steps. For help, contact Telegram support.",
        });
      }
    }

    await resetPasswordWithToken(
      String(body.email || ""),
      String(body.token || ""),
      String(body.newPassword || "")
    );
    return NextResponse.json({ ok: true, message: "Password updated. You can log in now." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Reset failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
