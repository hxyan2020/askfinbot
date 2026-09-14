"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let active = true;
    async function refreshAuth() {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        if (active) setLoggedIn(Boolean(data.user));
      } catch {
        if (active) setLoggedIn(false);
      }
    }
    void refreshAuth();
    window.addEventListener("askfinbot:auth", refreshAuth);
    return () => {
      active = false;
      window.removeEventListener("askfinbot:auth", refreshAuth);
    };
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Ask Bot" },
    { href: "/study", label: "Study Path" },
    { href: "/mindmap", label: "Mindmap" },
    { href: "/flashcards", label: "Flashcards" },
    { href: "/profile", label: loggedIn ? "My Profile" : "Log In" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            priority
          />
          <div className="min-w-0">
            <p className="font-display truncate text-xl font-semibold tracking-tight text-navy sm:text-2xl">
              {SITE_NAME}
            </p>
            <p className="hidden text-xs text-muted min-[380px]:block">Study smarter for finance exams</p>
          </div>
        </Link>
        <nav className="hidden items-center justify-end gap-3 text-sm md:flex lg:gap-5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-navy shadow-sm transition active:scale-95 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-line bg-white/95 px-4 pb-4 pt-2 shadow-lg backdrop-blur md:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-11 items-center rounded-lg px-3 text-sm transition ${
                    active
                      ? "bg-navy font-semibold text-white"
                      : "bg-slate-50 font-medium text-navy active:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
