import { NextRequest, NextResponse } from "next/server";
import {
  absoluteAppUrl,
  exchangeGoogleCode,
  isGoogleAuthConfigured,
  parseGoogleOAuthState,
  safeNextPath,
} from "@/lib/google-oauth";
import { sessionCookieOptions } from "@/lib/cookie-options";
import { createUserSessionToken, USER_COOKIE } from "@/lib/user-auth";
import { upsertGoogleUser } from "@/lib/users";

function redirectWithError(request: NextRequest, message: string, nextPath?: string) {
  const profile = new URL(absoluteAppUrl("/profile"));
  profile.searchParams.set("authError", message);
  if (nextPath && nextPath !== "/profile") {
    profile.searchParams.set("next", safeNextPath(nextPath));
  }
  return NextResponse.redirect(profile);
}

export async function GET(request: NextRequest) {
  if (!isGoogleAuthConfigured()) {
    return redirectWithError(request, "Google sign-in is not configured yet.");
  }

  const code = request.nextUrl.searchParams.get("code");
  const stateRaw = request.nextUrl.searchParams.get("state");
  const oauthError = request.nextUrl.searchParams.get("error");
  const state = parseGoogleOAuthState(stateRaw);

  if (oauthError) {
    return redirectWithError(
      request,
      oauthError === "access_denied" ? "Google sign-in was cancelled." : `Google sign-in failed (${oauthError}).`,
      state?.next
    );
  }

  if (!code || !state) {
    return redirectWithError(request, "Google sign-in expired. Please try again.", state?.next);
  }

  try {
    const profile = await exchangeGoogleCode(code);
    const user = await upsertGoogleUser({
      googleId: profile.sub,
      email: profile.email,
      name: profile.name || "",
    });
    const token = await createUserSessionToken(user.id, { staySignedIn: state.staySignedIn });
    const res = NextResponse.redirect(absoluteAppUrl(safeNextPath(state.next)));
    res.cookies.set(
      USER_COOKIE,
      token,
      sessionCookieOptions(request, { staySignedIn: state.staySignedIn })
    );
    return res;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Google sign-in failed.";
    return redirectWithError(request, message, state.next);
  }
}
