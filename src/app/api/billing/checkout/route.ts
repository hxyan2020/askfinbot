import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import {
  findUserById,
  grantPromoUnlimited,
  addTokensForPurchase,
} from "@/lib/users";
import { getTokenPackage } from "@/lib/token-packages";
import {
  createPendingPurchase,
  markPurchasePaid,
  updatePurchase,
} from "@/lib/purchases";
import {
  getAppUrl,
  getStripe,
  isStripeCheckoutReady,
  ensureStripePercentOffCoupon,
} from "@/lib/stripe";
import { getPreferredCheckoutProvider, getWisePaymentLink } from "@/lib/wise";
import {
  applyDiscountCents,
  recordPromoRedemption,
  validatePromoCode,
} from "@/lib/promos";

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

    const rawPromo = typeof body.promoCode === "string" ? body.promoCode : "";
    let promo:
      | Awaited<ReturnType<typeof validatePromoCode>>
      | null = null;
    if (rawPromo.trim()) {
      promo = await validatePromoCode(rawPromo, userId);
      if (!promo.ok) {
        return NextResponse.json({ error: promo.error }, { status: 400 });
      }
    }

    // 100% promo: grant unlimited immediately — no payment page.
    if (promo?.ok && promo.tier === "percent_100") {
      const purchase = await createPendingPurchase({
        userId,
        packageId: "promo-unlimited",
        packageName: "Unlimited (promo)",
        tokens: 0,
        amountCents: 0,
        listAmountCents: tokenPackage.priceCents,
        currency: tokenPackage.currency,
        promoCodeId: promo.promo.id,
        promoCode: promo.promo.code,
        promoTier: "percent_100",
      });

      const granted = await grantPromoUnlimited({
        userId,
        promoCodeId: promo.promo.id,
        packageName: `Unlimited · ${promo.promo.code}`,
      });
      if (!granted) {
        await updatePurchase(purchase.id, { status: "failed" });
        return NextResponse.json({ error: "Could not activate unlimited promo." }, { status: 500 });
      }

      await addTokensForPurchase(userId, purchase.id, 0);
      await markPurchasePaid({
        purchaseId: purchase.id,
        stripeEventId: `promo100:${purchase.id}`,
      });
      await recordPromoRedemption(promo.promo.id, userId);

      const appUrl = getAppUrl(request.url);
      return NextResponse.json({
        granted: true,
        provider: "promo",
        orderId: purchase.id,
        url: `${appUrl}/cart/success?order_id=${purchase.id}&promo=unlimited`,
        message:
          "Promo applied: unlimited tokens for the next month. Access renews automatically forever unless you cancel in My Profile.",
      });
    }

    const provider = getPreferredCheckoutProvider();
    const hasTwentyOff = promo?.ok && promo.tier === "percent_20";

    // 20% off needs Stripe coupons; Wise fixed links cannot discount.
    if (hasTwentyOff && !isStripeCheckoutReady()) {
      return NextResponse.json(
        {
          error:
            "This 20% promo requires Stripe checkout. Configure Stripe keys, or use a 100% promo code.",
        },
        { status: 503 }
      );
    }

    if (provider === "none" && !hasTwentyOff) {
      return NextResponse.json(
        { error: "Secure checkout is not enabled yet." },
        { status: 503 }
      );
    }

    const listAmountCents = tokenPackage.priceCents;
    const amountCents = hasTwentyOff
      ? applyDiscountCents(listAmountCents, "percent_20")
      : listAmountCents;

    const purchase = await createPendingPurchase({
      userId,
      packageId: tokenPackage.id,
      packageName: tokenPackage.name,
      tokens: tokenPackage.tokens,
      amountCents,
      listAmountCents: hasTwentyOff ? listAmountCents : undefined,
      currency: tokenPackage.currency,
      promoCodeId: promo?.ok ? promo.promo.id : undefined,
      promoCode: promo?.ok ? promo.promo.code : undefined,
      promoTier: promo?.ok ? promo.tier : undefined,
    });

    // Prefer Stripe when a 20% promo is applied.
    if (!hasTwentyOff && provider === "wise") {
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

      const discounts: Stripe.Checkout.SessionCreateParams.Discount[] | undefined =
        hasTwentyOff
          ? [{ coupon: await ensureStripePercentOffCoupon(20) }]
          : undefined;

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
          ...(discounts ? { discounts } : { allow_promotion_codes: true }),
          subscription_data: {
            metadata: {
              purchaseId: purchase.id,
              userId,
              packageId: tokenPackage.id,
              tokens: String(tokenPackage.tokens),
              promoCode: promo?.ok ? promo.promo.code : "",
              promoTier: promo?.ok ? promo.tier : "",
            },
          },
          metadata: {
            purchaseId: purchase.id,
            userId,
            packageId: tokenPackage.id,
            tokens: String(tokenPackage.tokens),
            promoCode: promo?.ok ? promo.promo.code : "",
            promoTier: promo?.ok ? promo.tier : "",
            expectedAmountCents: String(amountCents),
          },
          success_url: `${appUrl}/cart/success?order_id=${purchase.id}&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${appUrl}/cart?canceled=1`,
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

      if (promo?.ok) {
        await recordPromoRedemption(promo.promo.id, userId);
      }

      if (!session.url) throw new Error("Stripe did not return a checkout URL.");
      return NextResponse.json({
        url: session.url,
        orderId: purchase.id,
        provider: "stripe",
        discounted: hasTwentyOff,
        amountCents,
      });
    } catch (error) {
      await updatePurchase(purchase.id, { status: "failed" });
      throw error;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
