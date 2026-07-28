import { createHmac } from "crypto";

export const USER_COOKIE = "askfinbot_user_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24; // 1 day when not staying signed in
const PERSISTENT_TTL_MS = 1000 * 60 * 60 * 24 * 365 * 10; // ~10 years

function getSecret() {
  const secret = process.env.USER_SESSION_SECRET?.trim();
  if (!secret) throw new Error("USER_SESSION_SECRET is not configured.");
  return secret;
}

function timingSafeEqualString(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i += 1) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

async function hmacHex(payload: string): Promise<string> {
  // Prefer Web Crypto when available (Edge), else Node crypto
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(getSecret()),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
    return Array.from(new Uint8Array(signature))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export async function createUserSessionToken(
  userId: string,
  options?: { staySignedIn?: boolean }
): Promise<string> {
  const staySignedIn = options?.staySignedIn !== false;
  const exp = Date.now() + (staySignedIn ? PERSISTENT_TTL_MS : SESSION_TTL_MS);
  const payload = `${userId}.${exp}`;
  const sig = await hmacHex(payload);
  return `${payload}.${sig}`;
}

export async function validateUserSessionToken(token: string | undefined): Promise<string | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [userId, expStr, sig] = parts;
  const payload = `${userId}.${expStr}`;
  const expected = await hmacHex(payload);
  if (!timingSafeEqualString(expected, sig)) return null;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return null;
  return userId;
}

export async function getSessionUserIdFromCookies(): Promise<string | null> {
  const { cookies } = await import("next/headers");
  const jar = await cookies();
  return validateUserSessionToken(jar.get(USER_COOKIE)?.value);
}
