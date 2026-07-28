import { NextRequest, NextResponse } from "next/server";
import { USER_COOKIE } from "@/lib/user-auth";
import { clearSessionCookieOptions } from "@/lib/cookie-options";

export async function POST(request: NextRequest) {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(USER_COOKIE, "", clearSessionCookieOptions(request));
  return res;
}
