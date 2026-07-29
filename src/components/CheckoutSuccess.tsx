"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";

type OrderStatus = {
  id: string;
  status: "pending" | "paid" | "expired" | "failed" | "refunded";
  packageName: string;
  tokens: number;
  amountCents: number;
  currency: string;
  promoTier?: "percent_20" | "percent_100";
};

const subscribeToLocation = () => () => {};

export function CheckoutSuccess() {
  const search = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.search,
    () => null
  );
  const orderId = search === null ? null : new URLSearchParams(search).get("order_id");
  const isUnlimitedPromo =
    search !== null && new URLSearchParams(search).get("promo") === "unlimited";
  const missingOrderId = search !== null && !orderId;
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [tokenBalance, setTokenBalance] = useState<number | null>(null);
  const [unlimitedTokens, setUnlimitedTokens] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) return;
    const currentOrderId = orderId;

    let active = true;
    let attempts = 0;
    async function check() {
      try {
        const response = await fetch(
          `/api/billing/status?orderId=${encodeURIComponent(currentOrderId)}`,
          { cache: "no-store" }
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not load order.");
        if (!active) return;
        setOrder(data.order);
        setTokenBalance(
          typeof data.tokenBalance === "number" ? data.tokenBalance : null
        );
        setUnlimitedTokens(Boolean(data.unlimitedTokens));
        if (data.order?.status === "paid") return;
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Could not confirm order.");
      }
      attempts += 1;
      if (attempts < 20) {
        window.setTimeout(check, 1500);
      }
    }
    check();
    return () => {
      active = false;
    };
  }, [orderId]);

  if (missingOrderId) {
    return (
      <div className="surface-card mx-auto max-w-xl p-8 text-center">
        <h1 className="font-display text-3xl font-semibold text-navy">Missing order</h1>
        <p className="mt-3 text-sm text-muted">No order id was provided.</p>
        <Link href="/cart" className="admin-btn mt-6 inline-block">
          Back to plans
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="surface-card mx-auto max-w-xl p-8 text-center">
        <h1 className="font-display text-3xl font-semibold text-navy">Order status</h1>
        <p className="mt-3 text-sm text-red-600">{error}</p>
        <Link href="/profile?tab=billing" className="admin-btn mt-6 inline-block">
          View purchase history
        </Link>
      </div>
    );
  }

  const paid = order?.status === "paid";
  const unlimited =
    unlimitedTokens || isUnlimitedPromo || order?.promoTier === "percent_100";

  return (
    <div className="surface-card mx-auto max-w-xl p-8 text-center">
      <span
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${
          paid ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
        }`}
      >
        {paid ? "✓" : "…"}
      </span>
      <h1 className="font-display mt-5 text-3xl font-semibold text-navy">
        {paid
          ? unlimited
            ? "Unlimited access activated"
            : "Payment successful"
          : "Confirming your payment"}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {paid
          ? unlimited
            ? "Your promo unlocked unlimited AskFinBots answers for the next month. It renews automatically forever unless you cancel in My Profile."
            : `${order.tokens} tokens have been added to your AskFinBots account. Your plan renews monthly unless cancelled in My Profile; Ask a human mentor stays unlocked for the active membership month.`
          : "Payment confirmation is in progress. Your tokens will appear automatically—please keep this page open for a moment. If you paid with Wise, include your order reference and allow a short confirmation window."}
      </p>
      {paid && (unlimited || tokenBalance !== null) && (
        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-muted">
            {unlimited ? "Access" : "New token balance"}
          </p>
          <p className="font-display mt-1 text-4xl font-semibold text-navy">
            {unlimited ? "Unlimited" : tokenBalance}
          </p>
        </div>
      )}
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="admin-btn">
          Ask Bot
        </Link>
        <Link href="/profile?tab=billing" className="btn-secondary">
          Purchase history
        </Link>
      </div>
    </div>
  );
}
