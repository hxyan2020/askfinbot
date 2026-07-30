import { NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getPurchasesForUser } from "@/lib/purchases";
import { ensurePromoUnlimitedRenewal, findUserById } from "@/lib/users";
import { isStripeCheckoutReady } from "@/lib/stripe";
import { getPreferredCheckoutProvider } from "@/lib/payments";

export async function GET() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const [purchases, user, record] = await Promise.all([
    getPurchasesForUser(userId),
    ensurePromoUnlimitedRenewal(userId),
    findUserById(userId),
  ]);
  const provider = getPreferredCheckoutProvider();
  return NextResponse.json({
    purchases,
    tokens: user?.tokens ?? 0,
    unlimitedTokens: user?.unlimitedTokens ?? false,
    membership: user?.membership || {
      status: "none",
      packageId: null,
      packageName: null,
      renewsAt: null,
      cancelAtPeriodEnd: false,
      stripeSubscriptionId: null,
    },
    hasStripeCustomer: Boolean(record?.stripeCustomerId),
    checkoutEnabled: provider !== "none",
    checkoutProvider: provider,
    stripeCheckoutReady: isStripeCheckoutReady(),
  });
}
