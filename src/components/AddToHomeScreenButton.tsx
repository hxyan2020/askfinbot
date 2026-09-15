"use client";

import { useState } from "react";
import { usePwaInstall } from "@/contexts/PwaInstallContext";

export function AddToHomeScreenButton({ onFinished }: { onFinished?: () => void }) {
  const { canNativeInstall, isStandalone, isIOS, install } = usePwaInstall();
  const [helpOpen, setHelpOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  if (isStandalone) return null;

  async function handleClick() {
    if (canNativeInstall) {
      setBusy(true);
      await install();
      setBusy(false);
      onFinished?.();
      return;
    }
    setHelpOpen((open) => !open);
  }

  return (
    <div className="col-span-2 mt-1">
      <button
        type="button"
        onClick={() => {
          void handleClick();
        }}
        disabled={busy}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-navy px-3 text-sm font-semibold text-white transition active:bg-navy-soft disabled:opacity-50"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
        Add to Home Screen
      </button>
      {helpOpen && (
        <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-relaxed text-muted">
          {isIOS
            ? "Tap the Share button, then choose Add to Home Screen."
            : "Tap the browser menu, then choose Install app or Add to Home screen."}
        </p>
      )}
    </div>
  );
}
