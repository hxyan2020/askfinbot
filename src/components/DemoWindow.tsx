"use client";

import type { ReactNode } from "react";

/** Faux screen-recording frame shared by the landing-page demo clips. */
export function DemoWindow({
  title,
  footer,
  children,
}: {
  title: string;
  footer: string;
  children: ReactNode;
}) {
  return (
    <div className="surface-card overflow-hidden text-left">
      <div className="flex items-center justify-between border-b border-line bg-slate-50 px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        </div>
        <p className="text-[11px] font-medium text-muted">{title}</p>
        <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-red-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
          Auto-replay
        </span>
      </div>
      {children}
      <p className="border-t border-line bg-slate-50 px-4 py-2 text-center text-[11px] text-muted">
        {footer}
      </p>
    </div>
  );
}
