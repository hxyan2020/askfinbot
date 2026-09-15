"use client";

import { FormEvent, useMemo, useState } from "react";
import { DIAL_COUNTRIES, defaultCountryIso, toE164 } from "@/lib/phone";

type PhoneUser = {
  id: string;
  examId?: string | null;
};

export function PhoneSignIn({
  staySignedIn,
  busy,
  setBusy,
  onSignedIn,
  onError,
}: {
  staySignedIn: boolean;
  busy: boolean;
  setBusy: (value: boolean) => void;
  onSignedIn: (user?: PhoneUser) => void;
  onError: (message: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [iso, setIso] = useState(defaultCountryIso());
  const [national, setNational] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  const preview = useMemo(() => toE164(iso, national), [iso, national]);

  async function sendCode() {
    setBusy(true);
    setHint(null);
    onError("");
    try {
      const res = await fetch("/api/auth/sms/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ iso, national }),
      });
      const data = (await res.json()) as { error?: string; phone?: string };
      if (!res.ok || !data.phone) {
        onError(data.error || "Could not send SMS.");
        return;
      }
      setPhone(data.phone);
      setHint(`Code sent to ${data.phone}.`);
    } finally {
      setBusy(false);
    }
  }

  async function verify(e: FormEvent) {
    e.preventDefault();
    if (!phone) {
      void sendCode();
      return;
    }
    setBusy(true);
    setHint(null);
    onError("");
    try {
      const res = await fetch("/api/auth/sms/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ phone, code, staySignedIn }),
      });
      const data = (await res.json()) as { error?: string; user?: PhoneUser };
      if (!res.ok) {
        onError(data.error || "That code is incorrect or expired.");
        return;
      }
      onSignedIn(data.user);
    } finally {
      setBusy(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        disabled={busy}
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
      >
        Continue with SMS
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-slate-50/80 p-4">
      <p className="text-sm font-semibold text-navy">Sign in with your phone</p>
      <p className="mt-1 text-xs text-muted">
        Choose your country, then enter your mobile number. Any country code is supported.
      </p>
      {hint && <p className="mt-2 text-sm text-navy">{hint}</p>}
      <form onSubmit={verify} className="mt-3 space-y-3">
        <div className="grid gap-2 sm:grid-cols-[minmax(0,12rem)_1fr]">
          <label className="admin-label">
            Country
            <select
              className="admin-input"
              value={iso}
              disabled={busy || Boolean(phone)}
              onChange={(e) => setIso(e.target.value)}
            >
              {DIAL_COUNTRIES.map((country) => (
                <option key={country.iso} value={country.iso}>
                  {country.name} (+{country.dial})
                </option>
              ))}
            </select>
          </label>
          <label className="admin-label">
            Mobile number
            <input
              className="admin-input"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Or paste +65 8…"
              disabled={busy || Boolean(phone)}
              value={national}
              onChange={(e) => setNational(e.target.value)}
              required
            />
          </label>
        </div>
        <p className="text-xs text-muted">
          We will text: <span className="font-medium text-navy">{preview || "—"}</span>
        </p>
        {phone && (
          <label className="admin-label">
            6-digit code
            <input
              className="admin-input"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={8}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 8))}
              required
            />
          </label>
        )}
        <button type="submit" className="admin-btn w-full" disabled={busy || (!phone && !preview)}>
          {phone ? "Verify and sign in" : "Send SMS code"}
        </button>
        {phone ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              setPhone(null);
              setCode("");
              setHint(null);
            }}
            className="w-full text-center text-sm font-semibold text-navy underline-offset-2 hover:underline"
          >
            Use a different number
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full text-center text-sm text-muted underline-offset-2 hover:underline"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
