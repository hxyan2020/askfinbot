import { NextRequest, NextResponse } from "next/server";
import {
  buildGoogleAuthorizationUrl,
  createGoogleOAuthState,
  isGoogleAuthConfigured,
  safeNextPath,
} from "@/lib/google-oauth";

export async function GET(request: NextRequest) {
  if (!isGoogleAuthConfigured()) {
    const url = new URL("/profile", request.url);
    url.searchParams.set("authError", "Google sign-in is not configured yet.");
    return NextResponse.redirect(url);
  }

  const next = safeNextPath(request.nextUrl.searchParams.get("next"));
  const staySignedIn = request.nextUrl.searchParams.get("staySignedIn") !== "0";
  const state = createGoogleOAuthState({ next, staySignedIn });
  return NextResponse.redirect(buildGoogleAuthorizationUrl(state));
}
