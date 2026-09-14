import Link from "next/link";
import { SITE_NAME, SITE_URL, TELEGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-6 text-center text-sm text-muted sm:flex-row sm:py-8 sm:text-left">
        <p className="max-w-sm text-xs leading-relaxed sm:text-sm">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Study support only — not official exam material.
        </p>
        <div className="grid w-full max-w-sm grid-cols-2 items-center gap-x-6 gap-y-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-6">
          <Link href="/" className="footer-link">
            Ask Bot
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/study" className="footer-link">
            Study Path
          </Link>
          <Link href="/mindmap" className="footer-link">
            Mindmap
          </Link>
          <Link href="/flashcards" className="footer-link">
            Flashcards
          </Link>
          <Link href="/cart" className="footer-link">
            Token plans
          </Link>
          <Link href="/terms" className="footer-link">
            Terms of Use
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link href="/contact" className="footer-link">
            Contact Us
          </Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
            Telegram Support
          </a>
          <span className="col-span-2 text-slate-400 sm:col-auto">{SITE_URL.replace("https://", "")}</span>
        </div>
      </div>
    </footer>
  );
}
