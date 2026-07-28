"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TOKEN_PACKAGES, formatPrice } from "@/lib/token-packages";

const subscribeToLocation = () => () => {};

export function TokenCart({
  loggedIn,
  email,
  checkoutEnabled,
}: {
  loggedIn: boolean;
  email?: string;
  checkoutEnabled: boolean;
}) {
  const [busyPackage, setBusyPackage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const search = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.search,
    () => null
  );
  const canceled =
    search !== null && new URLSearchParams(search).get("canceled") === "1";

  async function checkout(packageId: string) {
    setBusyPackage(packageId);
    setError(null);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not start checkout.");
      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout failed.");
      setBusyPackage(null);
    }
  }

  return (
    <>
      {canceled && (
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Checkout was canceled. No payment was taken.
        </p>
      )}
      {error && (
        <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
      {!checkoutEnabled && (
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          The plans are available to review now. To start receiving payments, configure Wise reusable
          payment links (<code className="text-xs">WISE_PAYMENT_LINK_STARTER</code>,{" "}
          <code className="text-xs">WISE_PAYMENT_LINK_PLUS</code>,{" "}
          <code className="text-xs">WISE_PAYMENT_LINK_PRO</code>) or Stripe checkout keys on the
          server.
        </p>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        {TOKEN_PACKAGES.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
              item.featured
                ? "border-gold ring-2 ring-gold/15"
                : "border-line"
            }`}
          >
            {item.featured && (
              <span className="absolute -top-3 left-5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                Most popular
              </span>
            )}
            <p className="text-sm font-semibold text-gold">{item.name}</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-navy">
              {item.tokens}
              <span className="ml-2 text-base font-normal text-muted">tokens</span>
            </h2>
            <p className="mt-3 text-2xl font-bold text-navy">
              {formatPrice(item.priceCents, item.currency)}
            </p>
            <p className="mt-1 text-xs text-muted">
              {(item.priceCents / item.tokens).toFixed(1)}¢ per token · one-time payment
            </p>
            <p className="mt-5 min-h-10 text-sm leading-relaxed text-slate-600">
              {item.tagline}
            </p>
            <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy">Best for</p>
                <p className="mt-1 leading-relaxed text-slate-600">{item.idealFor}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                  Study capacity
                </p>
                <p className="mt-1 leading-relaxed text-slate-600">{item.studyCapacity}</p>
              </div>
            </div>
            <ul className="mt-5 flex-1 space-y-3 text-sm text-slate-700">
              {item.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="font-bold text-gold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {loggedIn ? (
              <button
                type="button"
                className="admin-btn mt-6 w-full"
                disabled={Boolean(busyPackage) || !checkoutEnabled}
                onClick={() => checkout(item.id)}
              >
                {busyPackage === item.id
                  ? "Opening secure checkout…"
                  : checkoutEnabled
                    ? `Place order · ${formatPrice(item.priceCents, item.currency)}`
                    : "Stripe checkout being activated"}
              </button>
            ) : (
              <Link href="/profile?next=/cart" className="admin-btn mt-6 block w-full text-center">
                Log in to purchase
              </Link>
            )}
          </article>
        ))}
      </div>

      <section className="surface-card mt-8 grid gap-6 p-6 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-navy">What one token provides</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            One token is charged only when AskFinBots successfully returns an answer. Failed provider
            calls are automatically refunded.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Same features, better value</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Every package works across all qualifications, expires in <strong>1 month</strong>, and
            renews automatically unless cancelled in My Profile. Membership continues until the
            current cycle ends after cancellation. Includes 1 month of Ask a human mentor access per
            cycle.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Secure payment</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Checkout uses Wise payment links when configured (funds land in the AskFinBots Wise
            Business account; payers can use bank transfer, Wise balance, and other Wise-supported
            methods), with Stripe subscriptions as fallback when Wise links are not set.
          </p>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 text-sm">
        <span className="text-muted">
          {loggedIn ? `Purchasing as ${email}` : "You must be logged in before placing an order."}
        </span>
        {loggedIn && (
          <Link href="/profile?tab=billing" className="font-semibold text-navy underline underline-offset-4">
            View purchases and payment methods
          </Link>
        )}
      </div>
    </>
  );
}
