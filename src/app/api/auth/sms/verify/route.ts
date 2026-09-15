import { NextRequest, NextResponse } from "next/server";
import { isE164 } from "@/lib/phone";
import { checkSmsCode, twilioConfigured } from "@/lib/twilio";
import { upsertPhoneUser } from "@/lib/users";
import { createUserSessionToken, USER_COOKIE } from "@/lib/user-auth";
import { sessionCookieOptions } from "@/lib/cookie-options";

export async function POST(request: NextRequest) {
  if (!twilioConfigured()) {
    return NextResponse.json({ error: "SMS login is not configured." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const phone = String(body.phone || "").trim();
    const code = String(body.code || "").replace(/\D/g, "");
    const staySignedIn = body.staySignedIn !== false;

    if (!isE164(phone) || code.length < 4) {
      return NextResponse.json({ error: "Enter the phone number and SMS code." }, { status: 400 });
    }

    const checked = await checkSmsCode(phone, code);
    if (!checked.ok) {
      return NextResponse.json({ error: checked.error }, { status: 401 });
    }

    const user = await upsertPhoneUser(phone);
    const token = await createUserSessionToken(user.id, { staySignedIn });
    const res = NextResponse.json({ user });
    res.cookies.set(USER_COOKIE, token, sessionCookieOptions(request, { staySignedIn }));
    return res;
  } catch (error) {
    const message = error instanceof Error ? error.message : "SMS sign-in failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
