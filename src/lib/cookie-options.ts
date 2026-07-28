import type { NextRequest } from "next/server";

/** Session cookies must not use Secure on plain HTTP (e.g. http://IP:4010). */
export function shouldUseSecureCookies(request?: NextRequest): boolean {
  if (process.env.COOKIE_SECURE === "true") return true;
  if (process.env.COOKIE_SECURE === "false") return false;

  const proto =
    request?.headers.get("x-forwarded-proto") ||
    request?.nextUrl?.protocol?.replace(":", "") ||
    "";
  if (proto === "https") return true;

  // Default off so production HTTP deployments keep sessions working.
  return false;
}

export function sessionCookieOptions(
  request?: NextRequest,
  options?: { staySignedIn?: boolean }
) {
  const staySignedIn = options?.staySignedIn !== false;
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: shouldUseSecureCookies(request),
    path: "/",
    // Browsers treat very long maxAge as persistent; omit maxAge for a browser-session cookie.
    ...(staySignedIn ? { maxAge: 60 * 60 * 24 * 365 * 10 } : {}),
  };
}

export function clearSessionCookieOptions(request?: NextRequest) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: shouldUseSecureCookies(request),
    path: "/",
    maxAge: 0,
  };
}
