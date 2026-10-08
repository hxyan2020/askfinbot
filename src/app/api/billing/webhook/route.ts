import { NextRequest, NextResponse } from "next/server";
import { getStripe, getStripeWebhookSecret } from "@/lib/stripe";
import { updatePurchase } from "@/lib/purchases";
import { clearStripeSubscription } from "@/lib/users";
import { fulfillCheckout, fulfillInvoice } from "@/lib/fulfill-order";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  try {
    const payload = await request.text();
    const stripe = getStripe();
    const event = stripe.webhooks.constructEvent(payload, signature, getStripeWebhookSecret());

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
