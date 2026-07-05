"use client";

import { TELEGRAM_CONTACT, TELEGRAM_URL } from "@/lib/constants";

interface TopUpModalProps {
  open: boolean;
  onClose: () => void;
}

export function TopUpModal({ open, onClose }: TopUpModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content glow-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="topup-title"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gold/50 transition hover:text-gold"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-4 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-2xl text-gold glow-logo">
            ✦
          </div>
          <h2 id="topup-title" className="font-display text-xl font-semibold text-gold glow-text-sm">
            Top Up Your Tokens
          </h2>
          <p className="mt-2 text-sm text-gold/60">
            You&apos;ve used all your free tokens. Purchase more to continue learning with AskFinBot.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-gold/15 bg-navy-dark/50 p-4">
          <div>
            <h3 className="text-sm font-medium text-gold">Token Packages</h3>
            <ul className="mt-2 space-y-2 text-sm text-gold/70">
              <li className="flex justify-between">
                <span>50 tokens</span>
                <span className="text-gold">Contact for pricing</span>
              </li>
              <li className="flex justify-between">
                <span>150 tokens</span>
                <span className="text-gold">Contact for pricing</span>
              </li>
              <li className="flex justify-between">
                <span>500 tokens</span>
                <span className="text-gold">Contact for pricing</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gold/10 pt-4">
            <p className="text-sm text-gold/60">
              Contact our customer service team via Telegram to purchase tokens. We&apos;ll activate your
              account promptly after payment confirmation.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-4 flex w-full items-center justify-center gap-2"
            >
              <span>Contact on Telegram</span>
              <span className="text-sm opacity-80">{TELEGRAM_CONTACT}</span>
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gold/40">
          Each question uses 1 token. Tokens do not expire.
        </p>
      </div>
    </div>
  );
}
