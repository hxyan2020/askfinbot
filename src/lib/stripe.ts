import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripeConfigurationErrors(): string[] {
  const errors: string[] = [];
  if (process.env.PAYMENTS_ENABLED !== "true") errors.push("payments-disabled");
  if (!process.env.STRIPE_SECRET_KEY?.trim()) errors.push("missing-secret-key");
  if (!process.env.STRIPE_WEBHOOK_SECRET?.trim()) errors.push("missing-webhook-secret");

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL;
  if (!appUrl?.trim()) {
    errors.push("missing-app-url");
  } else if (process.env.NODE_ENV === "production" && !appUrl.startsWith("https://")) {
    errors.push("production-app-url-not-https");
  }
  return errors;
}

export function isStripeCheckoutReady(): boolean {
  return getStripeConfigurationErrors().length === 0;
}

export function requireStripeCheckoutReady(): void {
  if (!isStripeCheckoutReady()) {
    throw new Error("Secure checkout is not configured.");
  }
}

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Stripe payments are not configured yet.");
  }
  if (!stripe) stripe = new Stripe(secretKey, { apiVersion: "2026-06-24.dahlia" });
  return stripe;
}

export function getStripeWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) throw new Error("STRIPE_WEBHOOK_SECRET is not configured.");
  return secret;
}

export function getAppUrl(requestUrl?: string): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL;
  if (configured) return configured.replace(/\/$/, "");
  if (requestUrl) return new URL(requestUrl).origin;
  return "http://localhost:4000";
}
