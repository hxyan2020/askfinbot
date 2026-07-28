import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  verifyAdminLogin,
} from "@/lib/admin-auth";
import { sessionCookieOptions } from "@/lib/cookie-options";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const username = String(body.username || "");
  const password = String(body.password || "");

  if (!verifyAdminLogin(username, password)) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = await createAdminSessionToken(username);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    ...sessionCookieOptions(request),
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
