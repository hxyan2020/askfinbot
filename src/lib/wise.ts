import type { TokenPackage } from "@/lib/token-packages";

/** Reusable Wise Business payment links (one per plan). Funds land in the Wise Business account. */
export function getWisePaymentLink(packageId: TokenPackage["id"]): string | null {
  const map: Record<TokenPackage["id"], string | undefined> = {
    starter: process.env.WISE_PAYMENT_LINK_STARTER,
    plus: process.env.WISE_PAYMENT_LINK_PLUS,
    pro: process.env.WISE_PAYMENT_LINK_PRO,
  };
  const value = map[packageId]?.trim();
  return value || null;
}

export function isWiseCheckoutReady(): boolean {
  return Boolean(
    getWisePaymentLink("starter") &&
      getWisePaymentLink("plus") &&
      getWisePaymentLink("pro")
  );
}

export function getWiseBusinessProfileUrl(): string | null {
  return process.env.WISE_BUSINESS_PROFILE_URL?.trim() || "https://wise.com/login";
}

export function getPreferredCheckoutProvider(): "wise" | "stripe" | "none" {
  if (isWiseCheckoutReady()) return "wise";
  if (process.env.PAYMENTS_ENABLED === "true" && process.env.STRIPE_SECRET_KEY?.trim()) {
    return "stripe";
  }
  return "none";
}
