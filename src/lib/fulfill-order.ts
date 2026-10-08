import type Stripe from "stripe";
import { getAppUrl, getStripe } from "@/lib/stripe";
import {
  getPurchaseById,
  markPurchasePaid,
  updatePurchase,
  type PurchaseRecord,
} from "@/lib/purchases";
import {
  activateMembership,
  addTokensForPurchase,
  findUserById,
  isPlaceholderEmail,
  setStripeCustomerId,
} from "@/lib/users";
import { getTokenPackage } from "@/lib/token-packages";
import { isOrderTestProduct } from "@/lib/shop";
import {
  buildOrderConfirmation,
  buildShippingEmail,
  sendHtmlEmail,
  smtpConfigured,
  type OrderEmailInput,
} from "@/lib/order-email";

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

function emailInput(purchase: PurchaseRecord, to: string): OrderEmailInput {
  return {
    to,
    orderNumber: purchase.orderNumber || purchase.id.slice(0, 8).toUpperCase(),
    productName: purchase.packageName,
    quantity: purchase.quantity || 1,
    amountCents: purchase.amountCents,
    currency: purchase.currency,
    preference: purchase.preference || "",
    shippingNumber: purchase.shippingNumber,
    purchasesUrl: `${getAppUrl()}/profile?tab=billing`,
  };
}

async function recipientFor(purchase: PurchaseRecord): Promise<string | null> {
  if (purchase.customerEmail && !isPlaceholderEmail(purchase.customerEmail)) {
    return purchase.customerEmail;
  }
  const user = await findUserById(purchase.userId);
  if (user?.email && !isPlaceholderEmail(user.email)) return user.email;
  return null;
}

export async function sendPurchaseConfirmation(purchase: PurchaseRecord): Promise<void> {
  if (purchase.confirmationEmailAt) return;
  const to = await recipientFor(purchase);
  if (!to) {
    await updatePurchase(purchase.id, { emailError: "No deliverable email on this order." });
    return;
  }
  if (!smtpConfigured()) {
    await updatePurchase(purchase.id, { emailError: "Email delivery is not configured." });
    return;
  }
  try {
    const message = buildOrderConfirmation(emailInput(purchase, to));
    await sendHtmlEmail({ to, ...message });
    await updatePurchase(purchase.id, {
      confirmationEmailAt: new Date().toISOString(),
      emailError: "",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email failed.";
    await updatePurchase(purchase.id, { emailError: message });
  }
}

export async function sendShippingConfirmation(purchase: PurchaseRecord): Promise<void> {
  const shippingNumber = purchase.shippingNumber?.trim();
  if (!shippingNumber) return;
  const to = await recipientFor(purchase);
  if (!to || !smtpConfigured()) {
    await updatePurchase(purchase.id, {
      emailError: !to ? "No deliverable email on this order." : "Email delivery is not configured.",
    });
    return;
  }
  try {
    const message = buildShippingEmail({ ...emailInput(purchase, to), shippingNumber });
    await sendHtmlEmail({ to, ...message });
    await updatePurchase(purchase.id, {
      shippingEmailAt: new Date().toISOString(),
      emailError: "",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Shipping email failed.";
    await updatePurchase(purchase.id, { emailError: message });
  }
}

export async function fulfillCheckout(session: Stripe.Checkout.Session, eventId: string) {
  const purchaseId = session.metadata?.purchaseId;
  const userId = session.metadata?.userId;
  if (!purchaseId || !userId) throw new Error("Checkout metadata is incomplete.");
  if (session.client_reference_id && session.client_reference_id !== userId) {
    throw new Error("Checkout customer reference does not match the order.");
  }

  const purchase = await getPurchaseById(purchaseId);
  if (!purchase || purchase.userId !== userId) throw new Error("Purchase record not found.");

  const customerId = idOf(session.customer);
  const paymentIntentId = idOf(session.payment_intent);
  const subscriptionId = idOf(session.subscription);
  const shopOrder = isOrderTestProduct(purchase.packageId) || purchase.kind === "product";

  if (purchase.status !== "paid") {
    const expected = Number(session.metadata?.expectedAmountCents) || purchase.amountCents;
    const paidTotal = session.amount_total ?? 0;
    if (shopOrder) {
      if (
        paidTotal !== expected ||
        session.currency?.toLowerCase() !== purchase.currency.toLowerCase()
      ) {
        throw new Error("Checkout amount does not match the order.");
      }
    } else if (
      paidTotal > expected ||
      session.currency?.toLowerCase() !== purchase.currency.toLowerCase()
    ) {
      throw new Error("Checkout amount does not match the order.");
    }
    if (!shopOrder) {
      const credit = await addTokensForPurchase(userId, purchase.id, purchase.tokens, customerId);
      if (!credit.user) throw new Error("Purchase account no longer exists.");
    }
    await markPurchasePaid({
      purchaseId,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId: paymentIntentId,
      stripeCustomerId: customerId,
      stripeEventId: eventId,
    });
  }

  if (customerId) await setStripeCustomerId(userId, customerId);

  if (shopOrder) {
    const paid = await getPurchaseById(purchaseId);
    if (paid) await sendPurchaseConfirmation(paid);
    return;
  }

  const packageId = session.metadata?.packageId;
  const pkg = packageId ? getTokenPackage(packageId) : getTokenPackage(purchase.packageId);
  await activateMembership({
    userId,
    packageId: pkg?.id || purchase.packageId,
    packageName: pkg?.name || purchase.packageName,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
  });
}

export async function fulfillInvoice(invoice: Stripe.Invoice) {
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
  if (isOrderTestProduct(packageId)) return;
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

export async function syncPurchaseFromStripe(purchaseId: string): Promise<PurchaseRecord | null> {
  const purchase = await getPurchaseById(purchaseId);
  if (!purchase) return null;
  if (purchase.status === "paid") {
    if ((purchase.kind === "product" || isOrderTestProduct(purchase.packageId)) && !purchase.confirmationEmailAt) {
      await sendPurchaseConfirmation(purchase);
    }
    return getPurchaseById(purchaseId);
  }
  if (!purchase.stripeCheckoutSessionId) return purchase;
  const session = await getStripe().checkout.sessions.retrieve(purchase.stripeCheckoutSessionId);
  if (session.payment_status === "paid" || session.status === "complete") {
    await fulfillCheckout(session, `sync:${session.id}`);
  }
  return getPurchaseById(purchaseId);
}
