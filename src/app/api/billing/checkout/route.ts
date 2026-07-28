import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { findUserById } from "@/lib/users";
import { getTokenPackage } from "@/lib/token-packages";
import { createPendingPurchase, updatePurchase } from "@/lib/purchases";
import { getAppUrl, getStripe, isStripeCheckoutReady } from "@/lib/stripe";
import { getPreferredCheckoutProvider, getWisePaymentLink } from "@/lib/wise";

export async function POST(request: NextRequest) {
  const userId = await getSessionUserIdFromCookies();
  if (!userId) {
    return NextResponse.json({ error: "Please log in before placing an order." }, { status: 401 });
  }

  try {
    const user = await findUserById(userId);
    if (!user) {
      return NextResponse.json({ error: "Account not found." }, { status: 404 });
    }

    const body = await request.json();
    const tokenPackage = getTokenPackage(String(body.packageId || ""));
    if (!tokenPackage) {
      return NextResponse.json({ error: "Invalid token package." }, { status: 400 });
    }

    const provider = getPreferredCheckoutProvider();
    if (provider === "none") {
      return NextResponse.json(
        { error: "Secure checkout is not enabled yet." },
        { status: 503 }
      );
    }

    const purchase = await createPendingPurchase({
      userId,
      packageId: tokenPackage.id,
      packageName: tokenPackage.name,
      tokens: tokenPackage.tokens,
      amountCents: tokenPackage.priceCents,
      currency: tokenPackage.currency,
    });

    if (provider === "wise") {
      const wiseLink = getWisePaymentLink(tokenPackage.id);
      if (!wiseLink) {
        await updatePurchase(purchase.id, { status: "failed" });
        return NextResponse.json({ error: "Wise payment link is missing for this plan." }, { status: 503 });
      }
      const separator = wiseLink.includes("?") ? "&" : "?";
      const url = `${wiseLink}${separator}reference=${encodeURIComponent(purchase.id.slice(0, 8).toUpperCase())}`;
      return NextResponse.json({
        url,
        orderId: purchase.id,
        provider: "wise",
        note: "Complete payment in Wise. Your membership renews monthly unless cancelled in My Profile.",
      });
    }

    if (!isStripeCheckoutReady()) {
      await updatePurchase(purchase.id, { status: "failed" });
      return NextResponse.json({ error: "Secure checkout is not enabled yet." }, { status: 503 });
    }

    try {
      const stripe = getStripe();
      const appUrl = getAppUrl(request.url);
      const customerOptions: Pick<
        Stripe.Checkout.SessionCreateParams,
        "customer" | "customer_email" | "customer_creation"
      > = user.stripeCustomerId
        ? { customer: user.stripeCustomerId }
        : { customer_email: user.email, customer_creation: "always" };

      const session = await stripe.checkout.sessions.create(
        {
          ...customerOptions,
          mode: "subscription",
          client_reference_id: userId,
          line_items: [
            {
              quantity: 1,
              price_data: {
                currency: tokenPackage.currency,
                unit_amount: tokenPackage.priceCents,
                recurring: { interval: "month" },
                product_data: {
                  name: `${tokenPackage.name} plan · ${tokenPackage.tokens} tokens / month`,
                  description: `${tokenPackage.tagline} Auto-renews monthly unless cancelled.`,
                },
              },
            },
          ],
          subscription_data: {
            metadata: {
              purchaseId: purchase.id,
              userId,
              packageId: tokenPackage.id,
              tokens: String(tokenPackage.tokens),
            },
          },
          metadata: {
            purchaseId: purchase.id,
            userId,
            packageId: tokenPackage.id,
            tokens: String(tokenPackage.tokens),
          },
          success_url: `${appUrl}/cart/success?order_id=${purchase.id}&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${appUrl}/cart?canceled=1`,
          allow_promotion_codes: true,
          billing_address_collection: "auto",
        },
        {
          idempotencyKey: `askfinbot-checkout-${purchase.id}`,
        }
      );

      await updatePurchase(purchase.id, {
        stripeCheckoutSessionId: session.id,
        stripeCustomerId:
          typeof session.customer === "string" ? session.customer : session.customer?.id,
      });

      if (!session.url) throw new Error("Stripe did not return a checkout URL.");
      return NextResponse.json({ url: session.url, orderId: purchase.id, provider: "stripe" });
    } catch (error) {
      await updatePurchase(purchase.id, { status: "failed" });
      throw error;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
