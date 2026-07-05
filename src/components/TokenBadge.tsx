"use client";

import { FREE_TOKENS } from "@/lib/constants";

interface TokenBadgeProps {
  tokens: number;
  onTopUp: () => void;
}

export function TokenBadge({ tokens, onTopUp }: TokenBadgeProps) {
  const isLow = tokens <= 2;
  const isEmpty = tokens <= 0;

  return (
    <div className={`token-badge ${isLow ? "token-badge-low" : ""} ${isEmpty ? "token-badge-empty" : ""}`}>
      <div className="flex items-center gap-2">
        <span className="text-lg">✦</span>
        <div>
          <p className="text-xs text-gold/60">Tokens Remaining</p>
          <p className="font-display text-lg font-semibold text-gold">
            {tokens} <span className="text-sm font-normal text-gold/50">/ {FREE_TOKENS} free</span>
          </p>
        </div>
      </div>
      {isEmpty && (
        <button type="button" onClick={onTopUp} className="btn-glow-sm mt-2 w-full">
          Top Up Tokens
        </button>
      )}
    </div>
  );
}
