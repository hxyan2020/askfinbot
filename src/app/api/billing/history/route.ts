import { NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getPurchasesForUser } from "@/lib/purchases";
import { findUserById, toPublic } from "@/lib/users";
import { isStripeCheckoutReady } from "@/lib/stripe";
import {
  getPreferredCheckoutProvider,
  getWiseBusinessProfileUrl,
  isWiseCheckoutReady,
} from "@/lib/wise";

export async function GET() {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const [purchases, record] = await Promise.all([
    getPurchasesForUser(userId),
    findUserById(userId),
  ]);
  const user = record ? toPublic(record) : null;
  const provider = getPreferredCheckoutProvider();
  return NextResponse.json({
    purchases,
    tokens: user?.tokens ?? 0,
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
    wiseCheckoutReady: isWiseCheckoutReady(),
    wiseProfileUrl: getWiseBusinessProfileUrl(),
    stripeCheckoutReady: isStripeCheckoutReady(),
  });
}
