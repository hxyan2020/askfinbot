import { NextRequest, NextResponse } from "next/server";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { getPurchaseById } from "@/lib/purchases";
import { ensurePromoUnlimitedRenewal } from "@/lib/users";
import { syncPurchaseFromStripe } from "@/lib/fulfill-order";

export async function GET(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in." }, { status: 401 });
  }

  const orderId = new URL(request.url).searchParams.get("orderId") || "";
  let purchase = await getPurchaseById(orderId);
  if (!purchase || purchase.userId !== userId) {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }
  if (purchase.status === "pending" && purchase.stripeCheckoutSessionId) {
    try {
      purchase = (await syncPurchaseFromStripe(purchase.id)) || purchase;
    } catch {
      // Webhook or a later refresh can still confirm payment.
    }
  }
  const user = await ensurePromoUnlimitedRenewal(userId);
  return NextResponse.json({
    order: {
      id: purchase.id,
      orderNumber: purchase.orderNumber || purchase.id.slice(0, 8).toUpperCase(),
      status: purchase.status,
      packageName: purchase.packageName,
      tokens: purchase.tokens,
      quantity: purchase.quantity || 1,
      preference: purchase.preference || "",
      shippingNumber: purchase.shippingNumber || "",
      kind: purchase.kind || "membership",
      amountCents: purchase.amountCents,
      currency: purchase.currency,
      paidAt: purchase.paidAt,
      promoTier: purchase.promoTier,
      emailError: purchase.emailError || "",
    },
    tokenBalance: user?.tokens ?? 0,
    unlimitedTokens: user?.unlimitedTokens ?? false,
  });
}
