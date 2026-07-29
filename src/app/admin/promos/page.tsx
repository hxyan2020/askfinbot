"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PromoRow = {
  id: string;
  code: string;
  tier: "percent_20" | "percent_100";
  label: string;
  active: boolean;
  maxRedemptions: number | null;
  redemptionCount: number;
  remainingRedemptions: number | null;
  note?: string;
  createdAt: string;
  updatedAt: string;
};

const emptyForm = {
  code: "",
  tier: "percent_20" as "percent_20" | "percent_100",
  label: "",
  maxRedemptions: "",
  note: "",
  active: true,
};

export default function AdminPromosPage() {
  const router = useRouter();
  const [promos, setPromos] = useState<PromoRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/promos");
    if (res.status === 401) {
      router.push("/admin");
      return;
    }
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to load promos");
    setPromos(data.promos || []);
  }, [router]);

  useEffect(() => {
    load().catch((err) => setError(err instanceof Error ? err.message : "Failed to load"));
  }, [load]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  async function createPromo(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/promos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: form.code,
          tier: form.tier,
          label: form.label || undefined,
          note: form.note || undefined,
          active: form.active,
          maxRedemptions: form.maxRedemptions.trim() === "" ? null : Number(form.maxRedemptions),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not create promo");
      setForm(emptyForm);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Create failed");
    } finally {
      setBusy(false);
    }
  }

  async function toggleActive(promo: PromoRow) {
    setError(null);
    const res = await fetch(`/api/admin/promos/${promo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !promo.active }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Update failed");
      return;
    }
    await load();
  }

  async function removePromo(promo: PromoRow) {
    if (!window.confirm(`Delete promo code ${promo.code}?`)) return;
    setError(null);
    const res = await fetch(`/api/admin/promos/${promo.id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Delete failed");
      return;
    }
    await load();
  }

  return (
    <div className="admin-shell admin-shell-wide">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="AskFinBots" width={40} height={40} className="h-10 w-10 object-contain" />
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Promo codes</h1>
            <p className="text-sm text-slate-500">
              Manage 20% checkout discounts and 100% unlimited grants
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/dashboard" className="admin-btn-secondary">
            RAG admin
          </Link>
          <Link href="/admin/mentors" className="admin-btn-secondary">
            Mentor inbox
          </Link>
          <button type="button" onClick={logout} className="admin-btn-secondary">
            Log out
          </button>
        </div>
      </header>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <form
        onSubmit={createPromo}
        className="mb-8 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <h2 className="sm:col-span-2 lg:col-span-3 text-lg font-semibold text-slate-900">
          Create promo code
        </h2>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Code</span>
          <input
            required
            value={form.code}
            onChange={(e) => setForm((f) => ({ ...f, code: e.target.value.toUpperCase() }))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 uppercase"
            placeholder="SUMMER20"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Tier</span>
          <select
            value={form.tier}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                tier: e.target.value as "percent_20" | "percent_100",
              }))
            }
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
          >
            <option value="percent_20">20% off (Stripe checkout)</option>
            <option value="percent_100">100% off (unlimited, no payment)</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Label</span>
          <input
            value={form.label}
            onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
            placeholder="Optional display label"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Max redemptions</span>
          <input
            value={form.maxRedemptions}
            onChange={(e) => setForm((f) => ({ ...f, maxRedemptions: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
            placeholder="Blank = unlimited"
            inputMode="numeric"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-slate-700">Internal note</span>
          <input
            value={form.note}
            onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
            placeholder="Campaign / partner notes"
          />
        </label>
        <div className="flex items-end">
          <button type="submit" className="admin-btn w-full" disabled={busy}>
            {busy ? "Saving…" : "Create promo"}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Tier</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Redemptions</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{promo.code}</td>
                <td className="px-4 py-3">
                  {promo.tier === "percent_100" ? "100% unlimited" : "20% off"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      promo.active
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {promo.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {promo.redemptionCount}
                  {promo.maxRedemptions === null ? " / ∞" : ` / ${promo.maxRedemptions}`}
                </td>
                <td className="px-4 py-3 text-slate-500">{promo.note || promo.label}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="admin-btn-secondary"
                      onClick={() => toggleActive(promo)}
                    >
                      {promo.active ? "Disable" : "Enable"}
                    </button>
                    <button
                      type="button"
                      className="admin-btn-secondary"
                      onClick={() => removePromo(promo)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {promos.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                  No promo codes yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
