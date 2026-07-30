"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FINANCIAL_EXAMS } from "@/lib/exams";
import { ExamLogo } from "@/components/ExamLogo";
import { TOKEN_PACKAGES, formatPrice } from "@/lib/token-packages";
import {
  EXAM_STORAGE_KEY,
  FREE_TOKENS,
} from "@/lib/constants";

type PublicUser = {
  id: string;
  email: string;
  name: string;
  examId: string | null;
  tokens: number;
  unlimitedTokens?: boolean;
  membership?: {
    status: "none" | "active" | "canceling";
    packageId: string | null;
    packageName: string | null;
    renewsAt: string | null;
    cancelAtPeriodEnd: boolean;
    stripeSubscriptionId: string | null;
  };
};

type Tab = "account" | "exam" | "tokens" | "billing" | "security";

type Purchase = {
  id: string;
  packageName: string;
  tokens: number;
  amountCents: number;
  currency: string;
  status: "pending" | "paid" | "expired" | "failed" | "refunded";
  createdAt: string;
  paidAt?: string;
};

const PASSWORD_HINT =
  "At least 8 characters, including an uppercase letter, a lowercase letter, and a number.";

function getInitialTab(): Tab {
  if (typeof window === "undefined") return "account";
  const tab = new URLSearchParams(window.location.search).get("tab");
  if (tab === "billing" || tab === "tokens" || tab === "exam" || tab === "security" || tab === "account") {
    return tab;
  }
  return "account";
}

function formatPlanDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function fetchCurrentUser(): Promise<PublicUser | null> {
  const response = await fetch("/api/auth/me");
  const data = await response.json();
  return data.user || null;
}

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>(getInitialTab);
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [billingLoaded, setBillingLoaded] = useState(false);
  const [hasStripeCustomer, setHasStripeCustomer] = useState(false);
  const [checkoutEnabled, setCheckoutEnabled] = useState(false);
  const [checkoutProvider, setCheckoutProvider] = useState<"stripe" | "none">("none");
  const [membership, setMembership] = useState<PublicUser["membership"]>({
    status: "none",
    packageId: null,
    packageName: null,
    renewsAt: null,
    cancelAtPeriodEnd: false,
    stripeSubscriptionId: null,
  });

  // auth forms
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [nameSaved, setNameSaved] = useState(false);
  const [staySignedIn, setStaySignedIn] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  async function refreshUser() {
    const nextUser = await fetchCurrentUser();
    setUser(nextUser);
    if (nextUser?.membership) setMembership(nextUser.membership);
    if (nextUser?.examId) {
      localStorage.setItem(EXAM_STORAGE_KEY, nextUser.examId);
    }
  }

  useEffect(() => {
    let active = true;
    void fetchCurrentUser()
      .then((nextUser) => {
        if (!active) return;
        setUser(nextUser);
        if (nextUser?.membership) setMembership(nextUser.membership);
        if (nextUser?.examId) {
          localStorage.setItem(EXAM_STORAGE_KEY, nextUser.examId);
        }
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const userId = user?.id;

  useEffect(() => {
    if ((tab !== "billing" && tab !== "tokens") || !userId) return;
    fetch("/api/billing/history", { cache: "no-store" })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not load billing history.");
        setPurchases(data.purchases || []);
        setHasStripeCustomer(Boolean(data.hasStripeCustomer));
        setCheckoutEnabled(Boolean(data.checkoutEnabled));
        setCheckoutProvider(data.checkoutProvider === "stripe" ? "stripe" : "none");
        if (data.membership) setMembership(data.membership);
        setUser((current) =>
          current
            ? {
                ...current,
                tokens: data.tokens,
                unlimitedTokens: Boolean(data.unlimitedTokens),
                membership: data.membership || current.membership,
              }
            : current
        );
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load billing."))
      .finally(() => setBillingLoaded(true));
  }, [tab, userId]);

  function selectTab(nextTab: Tab) {
    if ((nextTab === "billing" || nextTab === "tokens") && tab !== nextTab) {
      setBillingLoaded(false);
    }
    setTab(nextTab);
  }

  async function managePaymentMethods() {
    clearAlerts();
    setBusy(true);
    try {
      const res = await fetch("/api/billing/portal", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not open payment settings.");
      window.location.assign(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not open payment settings.");
      setBusy(false);
    }
  }

  async function cancelPlan() {
    clearAlerts();
    if (
      !window.confirm(
        "Cancel auto-renewal? Your membership will continue until the end of the current billing cycle."
      )
    ) {
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/billing/cancel", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not cancel your plan.");
      if (data.membership) setMembership(data.membership);
      setMessage(data.message || "Your plan will not renew after this cycle.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not cancel your plan.");
    } finally {
      setBusy(false);
    }
  }

  function clearAlerts() {
    setMessage(null);
    setError(null);
  }

  async function onAuthSubmit(e: FormEvent) {
    e.preventDefault();
    clearAlerts();
    setBusy(true);
    try {
      if (mode === "reset") {
        if (!resetCode) {
          const res = await fetch("/api/auth/reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "request", email }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Could not start reset.");
          setMessage(
            data.resetCode
              ? `${data.message} Your reset code: ${data.resetCode}`
              : data.message
          );
          if (data.resetCode) setResetCode(data.resetCode);
        } else {
          const res = await fetch("/api/auth/reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "confirm",
              email,
              token: resetCode,
              newPassword,
            }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || "Reset failed.");
          setMessage(data.message || "Password updated. Please log in.");
          setMode("login");
          setPassword("");
          setNewPassword("");
          setResetCode("");
        }
        return;
      }

      if (mode === "register" && !acceptedTerms) {
        setError("Please agree to the Terms of Use to create an account.");
        setBusy(false);
        return;
      }

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          action: mode === "register" ? "register" : "login",
          email,
          password,
          name,
          staySignedIn,
          acceptedTerms: mode === "register" ? acceptedTerms : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Authentication failed.");
      // Confirm the session cookie actually stuck (important on HTTP hosts).
      await refreshUser();
      setMessage(mode === "register" ? "Welcome! Your account is ready." : "Logged in successfully.");
      setPassword("");
      if (data.user?.examId) localStorage.setItem(EXAM_STORAGE_KEY, data.user.examId);
      const next = new URLSearchParams(window.location.search).get("next");
      if (next?.startsWith("/") && !next.startsWith("//")) router.push(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    clearAlerts();
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setMessage("Logged out.");
  }

  async function saveName(e: FormEvent) {
    e.preventDefault();
    clearAlerts();
    setBusy(true);
    try {
      const res = await fetch("/api/auth/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not update profile.");
      setUser(data.user);
      setMessage("Profile updated.");
      setNameSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusy(false);
    }
  }

  async function changeExam(examId: string) {
    clearAlerts();
    setBusy(true);
    try {
      localStorage.setItem(EXAM_STORAGE_KEY, examId);
      if (user) {
        const res = await fetch("/api/auth/me", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ examId }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not update exam.");
        setUser(data.user);
      }
      setMessage("Qualification track updated. Returning to chat…");
      setTimeout(() => router.push("/"), 800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusy(false);
    }
  }

  async function changePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    clearAlerts();
    setBusy(true);
    try {
      const res = await fetch("/api/auth/me", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "changePassword",
          currentPassword,
          newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not change password.");
      setMessage("Password changed.");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setBusy(false);
    }
  }

  const currentExamId = user?.examId || null;

  if (loading) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl flex-1 px-4 py-16 text-center text-muted">Loading profile…</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-semibold text-navy">My Profile</h1>
          <p className="mt-2 text-sm text-muted">
            Manage your account, qualification track, tokens, and password.
          </p>
        </div>

        {message && (
          <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
            {message}
          </p>
        )}
        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        {!user ? (
          <>
            <section className="surface-card mb-6 p-6">
              <h2 className="mb-2 text-base font-semibold text-navy">Login required</h2>
              <p className="text-sm leading-relaxed text-muted">
                AskFinBots Q&amp;A and Study Path require an account. New accounts receive{" "}
                {FREE_TOKENS} free tokens once.
              </p>
            </section>

          <section className="surface-card p-6">
            <div className="mb-4 flex gap-2">
              {(["login", "register", "reset"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`rounded-full px-3 py-1.5 text-sm ${
                    mode === m ? "bg-navy text-white" : "border border-line text-muted"
                  }`}
                  onClick={() => {
                    setMode(m);
                    clearAlerts();
                  }}
                >
                  {m === "login" ? "Log in" : m === "register" ? "Create account" : "Password reset"}
                </button>
              ))}
            </div>

            <form onSubmit={onAuthSubmit} className="space-y-3">
              {mode === "register" && (
                <label className="admin-label">
                  Name
                  <input className="admin-input" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
              )}
              <label className="admin-label">
                Email
                <input
                  className="admin-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              {mode !== "reset" && (
                <label className="admin-label">
                  Password
                  <input
                    className="admin-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                    title={PASSWORD_HINT}
                  />
                  {mode === "register" && <span className="mt-1 block text-xs font-normal text-muted">{PASSWORD_HINT}</span>}
                </label>
              )}
              {mode === "reset" && (
                <>
                  <label className="admin-label">
                    Reset code
                    <input
                      className="admin-input"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      placeholder="Request a code first"
                    />
                  </label>
                  <label className="admin-label">
                    New password
                    <input
                      className="admin-input"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      minLength={8}
                      pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                      title={PASSWORD_HINT}
                    />
                    <span className="mt-1 block text-xs font-normal text-muted">{PASSWORD_HINT}</span>
                  </label>
                  <p className="text-xs text-muted">
                    Need help?{" "}
                    <Link href="/contact" className="underline">
                      Contact customer support
                    </Link>
                  </p>
                </>
              )}
              {mode !== "reset" && (
                <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-navy"
                    checked={staySignedIn}
                    onChange={(e) => setStaySignedIn(e.target.checked)}
                  />
                  <span>Stay signed in forever on this device</span>
                </label>
              )}
              {mode === "register" && (
                <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-navy"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="font-semibold text-navy underline underline-offset-2" target="_blank">
                      Terms of Use
                    </Link>
                  </span>
                </label>
              )}
              <button type="submit" className="admin-btn" disabled={busy}>
                {busy
                  ? "Please wait…"
                  : mode === "login"
                    ? "Log in"
                    : mode === "register"
                      ? "Create account"
                      : resetCode
                        ? "Set new password"
                        : "Get reset code"}
              </button>
            </form>
          </section>
          </>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              {(
                [
                  ["account", "Account"],
                  ["exam", "Qualification track"],
                  ["tokens", "Token plans"],
                  ["billing", "Orders & payment"],
                  ["security", "Password"],
                ] as const
              )
                .map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectTab(id)}
                  className={`rounded-full px-3 py-1.5 text-sm ${
                    tab === id ? "bg-navy text-white" : "border border-line text-muted"
                  }`}
                >
                  {label}
                </button>
                ))}
              <button type="button" onClick={logout} className="rounded-full border border-line px-3 py-1.5 text-sm text-red-600">
                Log out
              </button>
            </div>

            {tab === "account" && (
              <section className="surface-card space-y-4 p-6">
                <p className="text-sm text-muted">Signed in as {user.email}</p>
                <form onSubmit={saveName} className="space-y-3">
                  <label className="admin-label">
                    Display name
                    <input
                      className="admin-input"
                      value={name || user.name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameSaved(false);
                      }}
                    />
                  </label>
                  <button type="submit" className="admin-btn" disabled={busy || nameSaved}>
                    {nameSaved ? "Profile saved" : busy ? "Saving…" : "Save profile"}
                  </button>
                </form>
              </section>
            )}

            {tab === "exam" && (
              <section className="surface-card p-6">
                <h2 className="mb-2 text-base font-semibold text-navy">Qualification track</h2>
                <p className="mb-4 text-sm text-muted">
                  Current:{" "}
                  <strong>
                    {FINANCIAL_EXAMS.find((e) => e.id === currentExamId)?.name || "Not selected"}
                  </strong>
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {FINANCIAL_EXAMS.map((exam) => (
                    <button
                      key={exam.id}
                      type="button"
                      disabled={busy}
                      onClick={() => changeExam(exam.id)}
                      className={`exam-chip ${currentExamId === exam.id ? "exam-chip-selected" : ""}`}
                    >
                      <ExamLogo src={exam.logo} alt={`${exam.name} logo`} size={36} />
                      <span className="mt-2 block font-semibold text-navy">{exam.name}</span>
                      <span className="mt-0.5 block text-[10px] text-muted line-clamp-2">{exam.fullName}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {tab === "tokens" && (
              <section className="surface-card space-y-6 p-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted">Current token balance</p>
                    <p className="font-display text-3xl font-semibold text-navy">
                      {user.unlimitedTokens ? "Unlimited" : user.tokens}
                    </p>
                  </div>
                  <Link href="/cart" className="admin-btn">
                    Compare plans and order
                  </Link>
                </div>

                {(() => {
                  const planStatus = membership?.status || "none";
                  const hasPlan = planStatus === "active" || planStatus === "canceling";
                  const renewsLabel = formatPlanDate(membership?.renewsAt);
                  const activePackage = TOKEN_PACKAGES.find(
                    (item) => item.id === membership?.packageId
                  );
                  return (
                    <div
                      className={`rounded-xl border p-4 ${
                        hasPlan
                          ? "border-navy/20 bg-slate-50"
                          : "border-dashed border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            Your plan
                          </p>
                          {hasPlan ? (
                            <>
                              <p className="mt-1 text-lg font-semibold text-navy">
                                {membership?.packageName || activePackage?.name || "Membership"}
                              </p>
                              <p className="mt-1 text-sm text-slate-600">
                                Status:{" "}
                                <strong className="text-navy">
                                  {planStatus === "canceling"
                                    ? "Active · auto-renew off"
                                    : "Active"}
                                </strong>
                              </p>
                              {activePackage && (
                                <p className="mt-1 text-sm text-slate-600">
                                  Includes {activePackage.tokens} tokens each billing cycle
                                </p>
                              )}
                              <p className="mt-1 text-sm text-slate-600">
                                {planStatus === "canceling" ? (
                                  <>
                                    Access expires on{" "}
                                    <strong className="text-navy">
                                      {renewsLabel || "the end of this cycle"}
                                    </strong>
                                    . It will not renew.
                                  </>
                                ) : (
                                  <>
                                    Renews / expires on{" "}
                                    <strong className="text-navy">
                                      {renewsLabel || "the next billing date"}
                                    </strong>
                                    , then renews automatically unless cancelled.
                                  </>
                                )}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="mt-1 text-lg font-semibold text-navy">No active plan</p>
                              <p className="mt-1 max-w-xl text-sm text-slate-600">
                                You are not on a monthly Starter, Plus, or Pro membership. Your
                                remaining balance ({user.unlimitedTokens ? "unlimited" : user.tokens}{" "}
                                tokens) still works until spent. Free trial tokens are granted once at
                                registration. Order a plan to top up and enable automatic monthly
                                renewal.
                              </p>
                            </>
                          )}
                        </div>
                        {hasPlan && planStatus === "active" && (
                          <button
                            type="button"
                            className="btn-secondary"
                            disabled={busy}
                            onClick={() => void cancelPlan()}
                          >
                            Cancel plan
                          </button>
                        )}
                        {!hasPlan && (
                          <Link href="/cart" className="btn-secondary">
                            Choose a plan
                          </Link>
                        )}
                      </div>
                      {planStatus === "canceling" && (
                        <p className="mt-3 text-xs text-amber-800">
                          Auto-renewal is off. You keep full access until{" "}
                          {renewsLabel || "the current cycle ends"}.
                        </p>
                      )}
                    </div>
                  );
                })()}

                <div className="grid gap-3 md:grid-cols-3">
                  {TOKEN_PACKAGES.map((tokenPlan) => {
                    const isCurrent =
                      (membership?.status === "active" || membership?.status === "canceling") &&
                      membership?.packageId === tokenPlan.id;
                    return (
                      <article
                        key={tokenPlan.id}
                        className={`rounded-xl border p-4 ${
                          isCurrent
                            ? "border-navy bg-navy/[0.04] ring-1 ring-navy/20"
                            : tokenPlan.featured
                              ? "border-gold bg-amber-50/40"
                              : "border-line"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold text-navy">{tokenPlan.name}</p>
                              {isCurrent && (
                                <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                  Current plan
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-muted">
                              {tokenPlan.tokens} tokens / month
                            </p>
                          </div>
                          <p className="font-semibold text-navy">
                            {formatPrice(tokenPlan.priceCents, tokenPlan.currency)}
                          </p>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-slate-600">
                          {tokenPlan.idealFor}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-slate-700">
                          {isCurrent && membership?.renewsAt ? (
                            <>
                              Your cycle{" "}
                              {membership.status === "canceling" ? "expires" : "renews"} on{" "}
                              <strong>{formatPlanDate(membership.renewsAt)}</strong>
                              {membership.status === "canceling"
                                ? " (auto-renew off)."
                                : " unless cancelled."}
                            </>
                          ) : (
                            <>
                              Expires in <strong>1 month</strong> and renews automatically unless
                              cancelled. Cancel anytime in My Profile — membership continues until
                              the cycle ends.
                            </>
                          )}
                        </p>
                      </article>
                    );
                  })}
                </div>
                <p className="text-xs text-muted">
                  Tokens are stored on your account and spent when you ask the bot. Free trial tokens
                  are granted once at registration. Payments are processed securely with Stripe and
                  tokens/membership renew monthly unless you cancel.
                </p>
              </section>
            )}

            {tab === "billing" && (
              <section className="surface-card space-y-6 p-6">
                {!checkoutEnabled && billingLoaded && (
                  <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    Checkout is being activated. Your plans, balance, and order history remain available
                    here. Configure Stripe keys on the server to start receiving payments.
                  </p>
                )}

                {(membership?.status === "active" || membership?.status === "canceling") ? (
                  <div className="rounded-xl border border-navy/15 bg-slate-50 p-4">
                    <h2 className="text-base font-semibold text-navy">Membership</h2>
                    <p className="mt-1 text-sm text-muted">
                      {membership.packageName} ·{" "}
                      {membership.status === "canceling"
                        ? `Continues until ${
                            formatPlanDate(membership.renewsAt) || "cycle end"
                          } (auto-renew off)`
                        : `Auto-renews on ${
                            formatPlanDate(membership.renewsAt) || "next cycle"
                          }`}
                    </p>
                    {membership.status === "active" && (
                      <button
                        type="button"
                        className="btn-secondary mt-3"
                        disabled={busy}
                        onClick={() => void cancelPlan()}
                      >
                        Cancel plan
                      </button>
                    )}
                    <p className="mt-2 text-xs text-muted">
                      Cancelling stops auto-renewal. Your membership continues until the current cycle
                      ends.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-white p-4">
                    <h2 className="text-base font-semibold text-navy">No active plan</h2>
                    <p className="mt-1 text-sm text-muted">
                      You do not have a monthly membership. Your current token balance remains usable
                      until spent.{" "}
                      <Link href="/cart" className="font-semibold text-navy underline underline-offset-2">
                        Compare plans and order
                      </Link>
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold text-navy">Payment methods</h2>
                    <p className="mt-1 max-w-xl text-sm text-muted">
                      Manage cards and other saved payment methods in the Stripe customer portal.
                      AskFinBots never receives your full card number.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-secondary"
                    disabled={busy || !checkoutEnabled || !hasStripeCustomer}
                    onClick={() => void managePaymentMethods()}
                  >
                    Manage payment methods
                  </button>
                </div>
                {!hasStripeCustomer && billingLoaded && (
                  <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-muted">
                    Payment-method management becomes available after your first successful purchase.
                  </p>
                )}

                <div className="border-t border-line pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-navy">Purchase history</h2>
                    <Link href="/cart" className="text-sm font-semibold text-navy underline underline-offset-4">
                      Compare plans and order
                    </Link>
                  </div>
                  {!billingLoaded ? (
                    <p className="mt-4 text-sm text-muted">Loading purchases…</p>
                  ) : purchases.length === 0 ? (
                    <p className="mt-4 rounded-lg border border-dashed border-line p-4 text-sm text-muted">
                      No purchases yet. All future orders will be retained here.
                    </p>
                  ) : (
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full min-w-[620px] text-left text-sm">
                        <thead>
                          <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                            <th className="pb-2 font-semibold">Date</th>
                            <th className="pb-2 font-semibold">Package</th>
                            <th className="pb-2 font-semibold">Tokens</th>
                            <th className="pb-2 font-semibold">Amount</th>
                            <th className="pb-2 font-semibold">Status</th>
                            <th className="pb-2 font-semibold">Order</th>
                          </tr>
                        </thead>
                        <tbody>
                          {purchases.map((purchase) => (
                            <tr key={purchase.id} className="border-b border-line/70">
                              <td className="py-3 text-muted">
                                {new Date(purchase.paidAt || purchase.createdAt).toLocaleDateString()}
                              </td>
                              <td className="py-3 font-medium text-navy">{purchase.packageName}</td>
                              <td className="py-3">{purchase.tokens}</td>
                              <td className="py-3">
                                {formatPrice(purchase.amountCents, purchase.currency)}
                              </td>
                              <td className="py-3">
                                <span
                                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                    purchase.status === "paid"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : purchase.status === "pending"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-slate-100 text-slate-600"
                                  }`}
                                >
                                  {purchase.status}
                                </span>
                              </td>
                              <td className="py-3 font-mono text-xs text-muted">
                                {purchase.id.slice(0, 8).toUpperCase()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </section>
            )}

            {tab === "security" && (
              <section className="surface-card p-6">
                <h2 className="mb-4 text-base font-semibold text-navy">Change password</h2>
                <form onSubmit={changePasswordSubmit} className="space-y-3">
                  <label className="admin-label">
                    Current password
                    <input
                      className="admin-input"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </label>
                  <label className="admin-label">
                    New password
                    <input
                      className="admin-input"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={8}
                      pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                      title={PASSWORD_HINT}
                    />
                    <span className="mt-1 block text-xs font-normal text-muted">{PASSWORD_HINT}</span>
                  </label>
                  <button type="submit" className="admin-btn" disabled={busy}>
                    Update password
                  </button>
                </form>
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
