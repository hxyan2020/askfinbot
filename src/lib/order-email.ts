import nodemailer from "nodemailer";
import { SITE_NAME, SITE_URL, TELEGRAM_CONTACT, TELEGRAM_URL } from "@/lib/constants";

export type OrderEmailInput = {
  to: string;
  orderNumber: string;
  productName: string;
  quantity: number;
  amountCents: number;
  currency: string;
  preference: string;
  shippingNumber?: string;
  purchasesUrl: string;
};

function money(cents: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function brandedHtml(title: string, rowsHtml: string): string {
  const logo = `${SITE_URL}/logo-hd.png`;
  return `<!doctype html>
<html>
<body style="margin:0;background:#f4f6f8;color:#10233f;font-family:Georgia,Arial,sans-serif">
  <div style="max-width:640px;margin:0 auto;padding:24px 16px">
    <div style="background:#10233f;padding:20px 24px;border-radius:16px 16px 0 0">
      <a href="${SITE_URL}" style="text-decoration:none;color:#ffffff">
        <img src="${logo}" alt="${escapeHtml(SITE_NAME)}" width="72" style="display:block;width:72px;height:auto;background:#ffffff;border-radius:8px;padding:6px">
        <p style="margin:12px 0 0;font-size:22px;letter-spacing:0.02em">${escapeHtml(SITE_NAME)}</p>
      </a>
    </div>
    <div style="background:#ffffff;padding:24px;border-radius:0 0 16px 16px">
      <h1 style="margin:0 0 16px;font-size:24px;color:#10233f">${escapeHtml(title)}</h1>
      <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5">
        ${rowsHtml}
      </table>
      <p style="margin:20px 0 0;font-size:14px;line-height:1.6">
        Customer service:
        <a href="${TELEGRAM_URL}" style="color:#10233f">${escapeHtml(TELEGRAM_CONTACT)} on Telegram</a>
      </p>
      <p style="margin:8px 0 0;font-size:14px">
        <a href="${SITE_URL}" style="color:#10233f">${SITE_URL.replace(/^https?:\/\//, "")}</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#5c6b80;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:6px 0;font-weight:600;white-space:pre-wrap">${escapeHtml(value)}</td>
  </tr>`;
}

export function buildOrderConfirmation(input: OrderEmailInput): { subject: string; text: string; html: string } {
  const shipping = input.shippingNumber?.trim()
    ? input.shippingNumber.trim()
    : "Not assigned yet. We will email it when the order is prepared.";
  const paid = money(input.amountCents, input.currency);
  const subject = `Order ${input.orderNumber} confirmed — ${SITE_NAME}`;
  const text = [
    `Thank you for your order from ${SITE_NAME}.`,
    "",
    `Order number: ${input.orderNumber}`,
    `Product: ${input.productName}`,
    `Quantity: ${input.quantity}`,
    `Paid: ${paid}`,
    `Preference: ${input.preference}`,
    `Shipping number: ${shipping}`,
    "",
    `Purchases: ${input.purchasesUrl}`,
    `Customer service: ${TELEGRAM_CONTACT}`,
    TELEGRAM_URL,
    SITE_URL,
  ].join("\n");
  const html = brandedHtml(
    "Order confirmed",
    [
      row("Order number", input.orderNumber),
      row("Product", input.productName),
      row("Quantity", String(input.quantity)),
      row("Paid", paid),
      row("Preference", input.preference),
      row("Shipping number", shipping),
      row("Purchases", input.purchasesUrl),
    ].join("")
  );
  return { subject, text, html };
}

export function buildShippingEmail(input: OrderEmailInput & { shippingNumber: string }): {
  subject: string;
  text: string;
  html: string;
} {
  const paid = money(input.amountCents, input.currency);
  const subject = `Shipping number for order ${input.orderNumber} — ${SITE_NAME}`;
  const text = [
    `Your ${SITE_NAME} order now has a shipping number.`,
    "",
    `Order number: ${input.orderNumber}`,
    `Product: ${input.productName}`,
    `Quantity: ${input.quantity}`,
    `Paid: ${paid}`,
    `Preference: ${input.preference}`,
    `Shipping number: ${input.shippingNumber}`,
    "",
    `Purchases: ${input.purchasesUrl}`,
    `Customer service: ${TELEGRAM_CONTACT}`,
    TELEGRAM_URL,
    SITE_URL,
  ].join("\n");
  const html = brandedHtml(
    "Shipping number added",
    [
      row("Order number", input.orderNumber),
      row("Product", input.productName),
      row("Quantity", String(input.quantity)),
      row("Paid", paid),
      row("Preference", input.preference),
      row("Shipping number", input.shippingNumber),
      row("Purchases", input.purchasesUrl),
    ].join("")
  );
  return { subject, text, html };
}

export function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST?.trim() && process.env.SMTP_FROM?.trim());
}

export async function sendHtmlEmail(input: {
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<void> {
  const host = process.env.SMTP_HOST?.trim();
  const fromRaw = process.env.SMTP_FROM?.trim();
  if (!host || !fromRaw) throw new Error("Email delivery is not configured.");
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD;
  const address = fromRaw.match(/<([^>]+)>/)?.[1] || fromRaw;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });
  await transporter.sendMail({
    from: `"${SITE_NAME}" <${address}>`,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
  });
}
