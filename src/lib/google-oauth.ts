import { createHmac, timingSafeEqual } from "crypto";
import { SITE_URL } from "@/lib/constants";

export type GoogleOAuthState = {
  nonce: string;
  next: string;
  staySignedIn: boolean;
  exp: number;
};

function getClientId() {
  return process.env.GOOGLE_CLIENT_ID?.trim() || "";
}

function getClientSecret() {
  return process.env.GOOGLE_CLIENT_SECRET?.trim() || "";
}

/** Public site origin — never use request.url (behind nginx that is localhost:4010). */
export function getAppUrl(): string {
  const configured = (process.env.NEXT_PUBLIC_APP_URL || SITE_URL).replace(/\/$/, "");
  // Guard against accidental localhost bake-ins on the production host.
  if (
    process.env.NODE_ENV === "production" &&
    /localhost|127\.0\.0\.1/i.test(configured) &&
    !process.env.ALLOW_LOCALHOST_APP_URL
  ) {
    return SITE_URL.replace(/\/$/, "");
  }
  return configured;
}

export function absoluteAppUrl(path = "/"): string {
  const base = getAppUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isGoogleAuthConfigured(): boolean {
  return Boolean(getClientId() && getClientSecret());
}

export function getGoogleRedirectUri(): string {
  return (
    process.env.GOOGLE_REDIRECT_URI?.trim() ||
    `${getAppUrl()}/api/auth/google/callback`
  );
}

function stateSecret(): string {
  return (
    process.env.USER_SESSION_SECRET?.trim() ||
    process.env.GOOGLE_CLIENT_SECRET?.trim() ||
    "askfinbot-google-oauth"
  );
}

function sign(payload: string): string {
  return createHmac("sha256", stateSecret()).update(payload).digest("base64url");
}

export function createGoogleOAuthState(input: {
  next?: string | null;
  staySignedIn?: boolean;
}): string {
  const state: GoogleOAuthState = {
    nonce: crypto.randomUUID(),
    next: safeNextPath(input.next),
    staySignedIn: input.staySignedIn !== false,
    exp: Date.now() + 1000 * 60 * 15,
  };
  const body = Buffer.from(JSON.stringify(state), "utf8").toString("base64url");
  return `${body}.${sign(body)}`;
}

export function parseGoogleOAuthState(raw: string | null): GoogleOAuthState | null {
  if (!raw) return null;
  const [body, sig] = raw.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  try {
    const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as GoogleOAuthState;
    if (!parsed?.nonce || !Number.isFinite(parsed.exp) || Date.now() > parsed.exp) return null;
    return {
      nonce: parsed.nonce,
      next: safeNextPath(parsed.next),
      staySignedIn: parsed.staySignedIn !== false,
      exp: parsed.exp,
    };
  } catch {
    return null;
  }
}

export function safeNextPath(next?: string | null): string {
  if (!next || typeof next !== "string") return "/profile";
  if (!next.startsWith("/") || next.startsWith("//")) return "/profile";
  return next;
}

export function buildGoogleAuthorizationUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: getClientId(),
    redirect_uri: getGoogleRedirectUri(),
    response_type: "code",
    scope: "openid email profile",
    access_type: "online",
    include_granted_scopes: "true",
    prompt: "select_account",
    state,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export type GoogleProfile = {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  picture?: string;
};

export async function exchangeGoogleCode(code: string): Promise<GoogleProfile> {
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: getClientId(),
      client_secret: getClientSecret(),
      redirect_uri: getGoogleRedirectUri(),
      grant_type: "authorization_code",
    }),
  });
  const tokenJson = (await tokenRes.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!tokenRes.ok || !tokenJson.access_token) {
    throw new Error(tokenJson.error_description || tokenJson.error || "Google token exchange failed.");
  }

  const profileRes = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { Authorization: `Bearer ${tokenJson.access_token}` },
  });
  const profile = (await profileRes.json()) as GoogleProfile & { error?: string };
  if (!profileRes.ok || !profile.sub) {
    throw new Error(profile.error || "Unable to load Google profile.");
  }
  if (!profile.email || profile.email_verified !== true) {
    throw new Error("Google account must have a verified email address.");
  }
  return profile;
}
