import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-auth";
import { clearSessionCookieOptions } from "@/lib/cookie-options";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", clearSessionCookieOptions(request));
  return response;
}
