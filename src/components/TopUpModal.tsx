"use client";

import Link from "next/link";

interface TopUpModalProps {
  open: boolean;
  onClose: () => void;
}

export function TopUpModal({ open, onClose }: TopUpModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content surface-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="topup-title"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-muted transition hover:text-navy"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-4 text-center">
          <h2 id="topup-title" className="font-display text-xl font-semibold text-navy">
            Top up tokens
          </h2>
          <p className="mt-2 text-sm text-muted">
            You&apos;ve used your free tokens. Choose a package to continue studying.
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-line bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            Compare 50, 150, and 500-token plans, see exactly what each includes, and place your
            order securely through Stripe.
          </p>
          <Link
            href="/cart"
            className="btn-primary mt-2 flex w-full items-center justify-center gap-2"
          >
            View token plans
          </Link>
        </div>
      </div>
    </div>
  );
}
