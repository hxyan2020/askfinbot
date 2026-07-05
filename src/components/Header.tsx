"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="glow-header border-b border-gold/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="glow-logo flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-navy-light text-lg font-bold text-gold">
            AF
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold tracking-wide text-gold glow-text sm:text-2xl">
              {SITE_NAME}
            </h1>
            <p className="text-xs text-gold/60">Financial Qualification Exam Tutor</p>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          <Link href="/terms" className="nav-link">
            Terms of Use
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
