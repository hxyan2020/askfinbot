"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TOKEN_PACKAGES, formatPrice } from "@/lib/token-packages";

const subscribeToLocation = () => () => {};

type AppliedPromo = {
  code: string;
  tier: "percent_20" | "percent_100";
  discountPercent: 20 | 100;
  message: string;
  label: string;
  skipPayment: boolean;
};

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
  const [promoInput, setPromoInput] = useState("");
  const [promoBusy, setPromoBusy] = useState(false);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromo | null>(null);
  const search = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.search,
    () => null
  );
  const canceled =
    search !== null && new URLSearchParams(search).get("canceled") === "1";

  const canCheckout = checkoutEnabled || appliedPromo?.skipPayment === true;

  const discountedPrices = useMemo(() => {
    if (!appliedPromo || appliedPromo.tier !== "percent_20") return null;
    return Object.fromEntries(
      TOKEN_PACKAGES.map((item) => [
        item.id,
        Math.round(item.priceCents * 0.8),
      ])
    ) as Record<string, number>;
  }, [appliedPromo]);

  async function applyPromo() {
    setPromoBusy(true);
    setPromoError(null);
    try {
      const response = await fetch("/api/billing/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoCode: promoInput }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Invalid promo code.");
      setAppliedPromo({
        code: data.code,
        tier: data.tier,
        discountPercent: data.discountPercent,
        message: data.message,
        label: data.label,
        skipPayment: Boolean(data.skipPayment),
      });
    } catch (err) {
      setAppliedPromo(null);
      setPromoError(err instanceof Error ? err.message : "Could not apply promo.");
    } finally {
      setPromoBusy(false);
    }
  }

  function clearPromo() {
    setAppliedPromo(null);
    setPromoError(null);
    setPromoInput("");
  }

  async function checkout(packageId: string) {
    setBusyPackage(packageId);
    setError(null);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId,
          promoCode: appliedPromo?.code || undefined,
        }),
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
      {!checkoutEnabled && !appliedPromo?.skipPayment && (
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          The plans are available to review now. Secure Stripe checkout is not enabled on this
          environment yet. A 100% promo code can still be redeemed without payment.
        </p>
      )}

      {loggedIn && (
        <section className="mb-6 rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-[220px] flex-1">
              <h2 className="text-sm font-semibold text-navy">Have a promo code?</h2>
              <p className="mt-1 text-xs text-muted">
                Enter a code for 20% off at checkout, or 100% off for unlimited tokens (no payment).
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                  placeholder="PROMO CODE"
                  disabled={Boolean(appliedPromo)}
                  className="min-w-[180px] flex-1 rounded-lg border border-line px-3 py-2 text-sm uppercase tracking-wide text-navy outline-none focus:border-gold"
                  aria-label="Promo code"
                />
                {appliedPromo ? (
                  <button type="button" className="admin-btn-secondary" onClick={clearPromo}>
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="admin-btn"
                    disabled={promoBusy || !promoInput.trim()}
                    onClick={applyPromo}
                  >
                    {promoBusy ? "Checking…" : "Apply"}
                  </button>
                )}
              </div>
              {promoError && <p className="mt-2 text-sm text-red-600">{promoError}</p>}
              {appliedPromo && (
                <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                  <strong>{appliedPromo.code}</strong> · {appliedPromo.message}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        {TOKEN_PACKAGES.map((item) => {
          const saleCents = discountedPrices?.[item.id];
          const showUnlimited = appliedPromo?.tier === "percent_100";
          return (
            <article
              key={item.id}
              id={item.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                item.featured ? "border-gold ring-2 ring-gold/15" : "border-line"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                  Most popular
                </span>
              )}
              <p className="text-sm font-semibold text-gold">{item.name}</p>
              <h2 className="font-display mt-2 text-4xl font-semibold text-navy">
                {showUnlimited ? "∞" : item.tokens}
                <span className="ml-2 text-base font-normal text-muted">
                  {showUnlimited ? "unlimited" : "tokens"}
                </span>
              </h2>
              <p className="mt-3 text-2xl font-bold text-navy">
                {showUnlimited ? (
                  <>
                    <span className="mr-2 text-lg font-medium text-muted line-through">
                      {formatPrice(item.priceCents, item.currency)}
                    </span>
                    Free
                  </>
                ) : saleCents !== undefined ? (
                  <>
                    <span className="mr-2 text-lg font-medium text-muted line-through">
                      {formatPrice(item.priceCents, item.currency)}
                    </span>
                    {formatPrice(saleCents, item.currency)}
                  </>
                ) : (
                  formatPrice(item.priceCents, item.currency)
                )}
              </p>
              <p className="mt-1 text-xs text-muted">
                {showUnlimited
                  ? "Promo: unlimited answers for 1 month, renews forever unless cancelled"
                  : saleCents !== undefined
                    ? `20% promo · ${(saleCents / item.tokens).toFixed(1)}¢ per token · monthly`
                    : `${(item.priceCents / item.tokens).toFixed(1)}¢ per token · monthly`}
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
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {showUnlimited
                      ? "Unlimited successful answers for the active promo month."
                      : item.studyCapacity}
                  </p>
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
                  disabled={Boolean(busyPackage) || !canCheckout}
                  onClick={() => checkout(item.id)}
                >
                  {busyPackage === item.id
                    ? showUnlimited
                      ? "Activating promo…"
                      : "Opening secure checkout…"
                    : showUnlimited
                      ? "Activate unlimited with promo"
                      : saleCents !== undefined
                        ? `Place order · ${formatPrice(saleCents, item.currency)}`
                        : canCheckout
                          ? `Place order · ${formatPrice(item.priceCents, item.currency)}`
                          : "Stripe checkout being activated"}
                </button>
              ) : (
                <Link href="/profile?next=/cart" className="admin-btn mt-6 block w-full text-center">
                  Log in to purchase
                </Link>
              )}
            </article>
          );
        })}
      </div>

      <section className="surface-card mt-8 grid gap-6 p-6 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-navy">What one token provides</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            One token is charged only when AskFinBots successfully returns an answer. Failed provider
            calls are automatically refunded. Unlimited promo plans skip the token charge.
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
            Checkout uses Stripe subscriptions. Cards and other payment methods enabled in your
            Stripe Dashboard appear automatically. 20% promo codes apply as Stripe coupons on
            renewals; 100% codes activate instantly with no payment page.
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
