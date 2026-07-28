import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, getStripeWebhookSecret } from "@/lib/stripe";
import { getPurchaseById, markPurchasePaid, updatePurchase } from "@/lib/purchases";
import {
  activateMembership,
  addTokensForPurchase,
  clearStripeSubscription,
  setStripeCustomerId,
} from "@/lib/users";
import { getTokenPackage } from "@/lib/token-packages";

export const runtime = "nodejs";

function idOf(value: string | { id: string } | null | undefined): string | undefined {
  return typeof value === "string" ? value : value?.id;
}

function invoiceSubscriptionId(invoice: Stripe.Invoice): string | undefined {
  const direct = (invoice as Stripe.Invoice & { subscription?: string | { id: string } | null })
    .subscription;
  if (direct) return idOf(direct);
  const parent = (
    invoice as Stripe.Invoice & {
      parent?: { subscription_details?: { subscription?: string | { id: string } | null } | null } | null;
    }
  ).parent;
  return idOf(parent?.subscription_details?.subscription ?? null);
}

async function fulfillCheckout(session: Stripe.Checkout.Session, eventId: string) {
  const purchaseId = session.metadata?.purchaseId;
  const userId = session.metadata?.userId;
  const packageId = session.metadata?.packageId;
  if (!purchaseId || !userId) throw new Error("Checkout metadata is incomplete.");
  if (session.client_reference_id && session.client_reference_id !== userId) {
    throw new Error("Checkout customer reference does not match the order.");
  }

  const purchase = await getPurchaseById(purchaseId);
  if (!purchase || purchase.userId !== userId) throw new Error("Purchase record not found.");

  const customerId = idOf(session.customer);
  const paymentIntentId = idOf(session.payment_intent);
  const subscriptionId = idOf(session.subscription);

  if (purchase.status !== "paid") {
    if (
      session.amount_total !== purchase.amountCents ||
      session.currency?.toLowerCase() !== purchase.currency.toLowerCase()
    ) {
      throw new Error("Checkout amount does not match the order.");
    }
    const credit = await addTokensForPurchase(
      userId,
      purchase.id,
      purchase.tokens,
      customerId
    );
    if (!credit.user) throw new Error("Purchase account no longer exists.");
    await markPurchasePaid({
      purchaseId,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId: paymentIntentId,
      stripeCustomerId: customerId,
      stripeEventId: eventId,
    });
  }

  if (customerId) await setStripeCustomerId(userId, customerId);
  const pkg = packageId ? getTokenPackage(packageId) : getTokenPackage(purchase.packageId);
  await activateMembership({
    userId,
    packageId: pkg?.id || purchase.packageId,
    packageName: pkg?.name || purchase.packageName,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
  });
}

async function fulfillInvoice(invoice: Stripe.Invoice) {
  let userId = invoice.metadata?.userId;
  let packageId = invoice.metadata?.packageId;
  let tokensRaw = invoice.metadata?.tokens;
  const subscriptionId = invoiceSubscriptionId(invoice);
  const customerId = idOf(invoice.customer);

  if ((!userId || !packageId) && subscriptionId) {
    const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
    userId = userId || subscription.metadata?.userId;
    packageId = packageId || subscription.metadata?.packageId;
    tokensRaw = tokensRaw || subscription.metadata?.tokens;
  }

  if (!userId || !packageId || !tokensRaw) return;
  if (invoice.billing_reason === "subscription_create") return;

  const pkg = getTokenPackage(packageId);
  const tokens = Number(tokensRaw) || pkg?.tokens || 0;
  const creditKey = `invoice:${invoice.id}`;
  await addTokensForPurchase(userId, creditKey, tokens, customerId || undefined);
  await activateMembership({
    userId,
    packageId,
    packageName: pkg?.name || packageId,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
  });
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  try {
    const payload = await request.text();
    const stripe = getStripe();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      getStripeWebhookSecret()
    );

    if (
      event.type === "checkout.session.completed" ||
      event.type === "checkout.session.async_payment_succeeded"
    ) {
      const session = event.data.object;
      if (session.payment_status === "paid" || session.status === "complete") {
        await fulfillCheckout(session, event.id);
      }
    } else if (event.type === "checkout.session.expired") {
      const session = event.data.object;
      const purchaseId = session.metadata?.purchaseId;
      if (purchaseId) await updatePurchase(purchaseId, { status: "expired" });
    } else if (event.type === "checkout.session.async_payment_failed") {
      const session = event.data.object;
      const purchaseId = session.metadata?.purchaseId;
      if (purchaseId) await updatePurchase(purchaseId, { status: "failed" });
    } else if (event.type === "invoice.paid") {
      await fulfillInvoice(event.data.object);
    } else if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object;
      const userId = subscription.metadata?.userId;
      if (userId) await clearStripeSubscription(userId);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook processing failed.";
    console.error("Stripe webhook error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
