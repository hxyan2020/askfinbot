"use client";

import { useEffect, useState } from "react";
import { usePwaInstall } from "@/contexts/PwaInstallContext";

export function AddToHomeScreenButton({ onFinished }: { onFinished?: () => void }) {
  const { isDesktop, install } = usePwaInstall();
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "added" | "already" | "unavailable" | "shortcut-saved" | "shortcut-downloaded"
  >("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 6000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const label = isDesktop ? "Add to Desktop" : "Add to Home Screen";

  async function handleClick() {
    if (busy) return;
    setBusy(true);
    setStatus("idle");

    const outcome = await install();
    setBusy(false);

    if (outcome === "accepted") {
      setStatus("added");
      onFinished?.();
      return;
    }
    if (outcome === "already") {
      setStatus("already");
      return;
    }
    if (outcome === "shortcut-saved") {
      setStatus("shortcut-saved");
      onFinished?.();
      return;
    }
    if (outcome === "shortcut-downloaded") {
      setStatus("shortcut-downloaded");
      onFinished?.();
      return;
    }
    if (outcome === "unavailable") {
      setStatus("unavailable");
    }
  }

  const statusText =
    status === "added"
      ? "Added. Open AskFinBots from your Home Screen anytime."
      : status === "already"
        ? "AskFinBots is already on this device."
        : status === "shortcut-saved"
          ? "Desktop shortcut saved."
          : status === "shortcut-downloaded"
            ? "Shortcut file downloaded — move it to your desktop."
            : status === "unavailable"
              ? "Install is not available in this browser yet. Try Chrome or Edge."
              : null;

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
          {isDesktop ? (
            <>
              <rect x="2" y="4" width="20" height="12" rx="1.5" />
              <path d="M8 20h8M12 16v4" />
            </>
          ) : (
            <>
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <path d="M12 18h.01" />
            </>
          )}
        </svg>
        {busy ? "Opening install…" : label}
      </button>
      {statusText && (
        <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-center text-xs leading-relaxed text-muted">
          {statusText}
        </p>
      )}
    </div>
  );
}
