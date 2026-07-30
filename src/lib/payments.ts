import { isStripeCheckoutReady } from "@/lib/stripe";

/** Checkout provider — Stripe only. */
export function getPreferredCheckoutProvider(): "stripe" | "none" {
  return isStripeCheckoutReady() ? "stripe" : "none";
}

export function isPaymentsEnabled(): boolean {
  return getPreferredCheckoutProvider() !== "none";
}
