"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/token-packages";

type AdminOrder = {
  id: string;
  orderNumber: string;
  userEmail: string;
  userName: string;
  packageName: string;
  kind: string;
  quantity: number;
  preference: string;
  tokens: number;
  amountCents: number;
  currency: string;
  status: string;
  shippingNumber: string;
  createdAt: string;
  paidAt: string;
  emailError: string;
};

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/admin/orders", { cache: "no-store" });
    if (res.status === 401) {
      router.push("/admin");
      return;
    }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Could not load orders.");
    const next = (data.orders || []) as AdminOrder[];
    setOrders(next);
    setDrafts(Object.fromEntries(next.map((order) => [order.id, order.shippingNumber])));
  }

  useEffect(() => {
    load().catch((err) => setError(err instanceof Error ? err.message : "Could not load orders."));
  }, [router]);

  async function saveShipping(event: FormEvent, order: AdminOrder) {
    event.preventDefault();
    setBusyId(order.id);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: order.id, shippingNumber: drafts[order.id] || "" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save shipping number.");
      setMessage(
        data.order?.emailError
          ? `Shipping number saved for ${order.orderNumber}. Email: ${data.order.emailError}`
          : `Shipping number saved for ${order.orderNumber}. Confirmation email sent.`
      );
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save shipping number.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="admin-shell admin-shell-wide">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Orders</h1>
          <p className="text-sm text-slate-500">
            Preferences are entered by the buyer. Shipping numbers are entered here and shown on their account.
          </p>
        </div>
        <Link href="/admin/dashboard" className="admin-btn-secondary">
          Back
        </Link>
      </header>
      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {message && <p className="mb-4 text-sm text-emerald-700">{message}</p>}
      <div className="space-y-4">
        {orders.length === 0 && <p className="text-sm text-slate-500">No orders yet.</p>}
        {orders.map((order) => (
          <article key={order.id} className="admin-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {order.orderNumber} · {order.packageName}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {order.userName ? `${order.userName} · ` : ""}
                  {order.userEmail || "No email"} · {order.status} ·{" "}
                  {formatPrice(order.amountCents, order.currency)} · qty {order.quantity}
                  {order.kind === "membership" ? ` · ${order.tokens} tokens` : ""}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Placed {new Date(order.createdAt).toLocaleString()}
                  {order.paidAt ? ` · Paid ${new Date(order.paidAt).toLocaleString()}` : ""}
                </p>
              </div>
            </div>
            <p className="mt-3 whitespace-pre-wrap text-sm text-slate-800">
              <span className="font-semibold">Preference: </span>
              {order.preference || "—"}
            </p>
            {order.emailError && <p className="mt-2 text-xs text-amber-700">{order.emailError}</p>}
            {order.status === "paid" && (
              <form className="mt-3 flex flex-wrap gap-2" onSubmit={(event) => void saveShipping(event, order)}>
                <input
                  className="admin-input max-w-xs"
                  value={drafts[order.id] || ""}
                  onChange={(event) =>
                    setDrafts((current) => ({ ...current, [order.id]: event.target.value }))
                  }
                  placeholder="Shipping number"
                  aria-label={`Shipping number for ${order.orderNumber}`}
                />
                <button type="submit" className="admin-btn" disabled={busyId === order.id}>
                  {busyId === order.id ? "Saving…" : "Save shipping number"}
                </button>
              </form>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
