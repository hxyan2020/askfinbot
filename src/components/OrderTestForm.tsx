"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ORDER_TEST_PRODUCT } from "@/lib/shop";
import { formatPrice } from "@/lib/token-packages";
import { TELEGRAM_CONTACT, TELEGRAM_URL } from "@/lib/constants";

export function OrderTestForm({
  loggedIn,
  needsEmail,
}: {
  loggedIn: boolean;
  needsEmail: boolean;
}) {
  const [quantity, setQuantity] = useState(1);
  const [preference, setPreference] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function placeOrder(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: ORDER_TEST_PRODUCT.id,
          quantity,
          preference,
          contactEmail,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not start checkout.");
      if (data.url) window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setBusy(false);
    }
  }

  return (
    <section className="surface-card mb-10 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Test order</p>
      <h2 className="font-display mt-2 text-2xl font-semibold text-navy">{ORDER_TEST_PRODUCT.name}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{ORDER_TEST_PRODUCT.description}</p>
      <p className="mt-3 text-lg font-semibold text-navy">
        {formatPrice(ORDER_TEST_PRODUCT.priceCents)} each
      </p>
      <ul className="mt-4 space-y-1 text-sm text-muted">
        <li>Pay with Stripe: cards, Link, and wallets such as Apple Pay or Google Pay when your device supports them.</li>
        <li>This is a one-time order. It does not start a monthly membership.</li>
        <li>You do not enter a shipping address. The shipping number is added after the order is prepared and then shown in Purchase history.</li>
        <li>
          Customer service:{" "}
          <a href={TELEGRAM_URL} className="font-semibold text-navy underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Telegram {TELEGRAM_CONTACT}
          </a>
        </li>
      </ul>

      {!loggedIn ? (
        <Link href="/profile?next=/cart" className="admin-btn mt-6 inline-block">
          Log in to place this order
        </Link>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={placeOrder}>
          <label className="admin-label">
            Quantity
            <input
              className="admin-input max-w-[8rem]"
              type="number"
              min={1}
              max={ORDER_TEST_PRODUCT.maxQuantity}
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />
          </label>
          <label className="admin-label">
            Preference / specifications
            <textarea
              className="admin-input min-h-28"
              value={preference}
              onChange={(event) => setPreference(event.target.value)}
              required
              minLength={2}
              maxLength={2000}
              placeholder="What should we follow when preparing this order?"
            />
          </label>
          {needsEmail && (
            <label className="admin-label">
              Email for the confirmation
              <input
                className="admin-input"
                type="email"
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                required
                placeholder="you@example.com"
              />
            </label>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="admin-btn" disabled={busy}>
            {busy ? "Opening secure checkout…" : `Place order · ${formatPrice(ORDER_TEST_PRODUCT.priceCents * quantity)}`}
          </button>
        </form>
      )}
    </section>
  );
}
