"use client";

import { FREE_TOKENS } from "@/lib/constants";

interface TokenBadgeProps {
  tokens: number;
  unlimited?: boolean;
  onTopUp: () => void;
}

export function TokenBadge({ tokens, unlimited, onTopUp }: TokenBadgeProps) {
  if (unlimited) {
    return (
      <div className="token-badge">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs text-muted">Access</p>
            <p className="text-base font-semibold text-navy">Unlimited</p>
          </div>
        </div>
      </div>
    );
  }

  const isLow = tokens <= 2;
  const isEmpty = tokens <= 0;

  return (
    <div className={`token-badge ${isLow ? "token-badge-low" : ""} ${isEmpty ? "token-badge-empty" : ""}`}>
      <div className="flex items-center gap-2">
        <div>
          <p className="text-xs text-muted">Tokens left</p>
          <p className="text-base font-semibold text-navy">
            {tokens} <span className="text-sm font-normal text-muted">/ {FREE_TOKENS} free</span>
          </p>
        </div>
      </div>
      {isEmpty && (
        <button type="button" onClick={onTopUp} className="btn-secondary mt-2 w-full">
          Top up
        </button>
      )}
    </div>
  );
}
