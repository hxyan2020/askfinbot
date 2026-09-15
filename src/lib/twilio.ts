const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || "";
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || "";
const SERVICE_SID = process.env.TWILIO_VERIFY_SERVICE_SID || "";

export function twilioConfigured(): boolean {
  return Boolean(ACCOUNT_SID && AUTH_TOKEN && SERVICE_SID);
}

function authHeader(): string {
  return `Basic ${Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString("base64")}`;
}

type TwilioBody = {
  code?: number;
  message?: string;
  status?: string | number;
};

async function twilioForm(path: string, fields: Record<string, string>) {
  const res = await fetch(`https://verify.twilio.com/v2/${path}`, {
    method: "POST",
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(fields),
    cache: "no-store",
  });
  const data = (await res.json()) as TwilioBody;
  return { ok: res.ok, status: res.status, data };
}

export function twilioUserMessage(code?: number, fallback?: string): string {
  switch (code) {
    case 21608:
    case 21211:
      return "This Twilio trial account can only text numbers you have verified in the Twilio console.";
    case 21408:
    case 21612:
      return "SMS to this country is not enabled on the Twilio account yet. Enable it under Messaging geo permissions.";
    case 60200:
      return "That phone number does not look valid. Include the country code and try again.";
    case 60203:
    case 60212:
      return "Too many codes sent to this number. Wait a few minutes and try again.";
    case 60202:
      return "Too many incorrect codes. Request a new SMS and try again.";
    case 20404:
      return "That code has expired. Request a new SMS.";
    default:
      return fallback || "Could not send or verify the SMS code. Try again.";
  }
}

export async function sendSmsCode(e164: string): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!twilioConfigured()) {
    return { ok: false, error: "SMS login is not configured." };
  }
  const { ok, data } = await twilioForm(`Services/${SERVICE_SID}/Verifications`, {
    To: e164,
    Channel: "sms",
  });
  if (ok) return { ok: true };
  return { ok: false, error: twilioUserMessage(data.code, data.message) };
}

export async function checkSmsCode(
  e164: string,
  code: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!twilioConfigured()) {
    return { ok: false, error: "SMS login is not configured." };
  }
  const { ok, data } = await twilioForm(`Services/${SERVICE_SID}/VerificationCheck`, {
    To: e164,
    Code: code,
  });
  if (ok && String(data.status) === "approved") return { ok: true };
  if (data.status && String(data.status) !== "approved") {
    return { ok: false, error: "That code is incorrect or expired." };
  }
  return { ok: false, error: twilioUserMessage(data.code, data.message) };
}
