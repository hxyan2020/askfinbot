const ADMIN_COOKIE = "askfinbot_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export { ADMIN_COOKIE };

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not configured.");
  return secret;
}

export function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) {
    throw new Error("ADMIN_USERNAME and ADMIN_PASSWORD must be configured.");
  }
  return {
    username,
    password,
  };
}

function timingSafeEqualString(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i += 1) {
    out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return out === 0;
}

export function verifyAdminLogin(username: string, password: string): boolean {
  const creds = getAdminCredentials();
  return (
    timingSafeEqualString(username, creds.username) &&
    timingSafeEqualString(password, creds.password)
  );
}

async function hmacHex(payload: string): Promise<string> {
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

export async function createAdminSessionToken(username: string): Promise<string> {
  const exp = Date.now() + SESSION_TTL_MS;
  const payload = `${username}.${exp}`;
  const sig = await hmacHex(payload);
  return `${payload}.${sig}`;
}

export async function validateAdminSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [username, expStr, sig] = parts;
  const payload = `${username}.${expStr}`;
  const expected = await hmacHex(payload);
  if (!timingSafeEqualString(expected, sig)) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;
  return username === getAdminCredentials().username;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const { cookies } = await import("next/headers");
  const jar = await cookies();
  return validateAdminSessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function unauthorized() {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}
