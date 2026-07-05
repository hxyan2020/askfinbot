import Link from "next/link";
import { SITE_NAME, SITE_URL, TELEGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-navy-dark/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-gold/50 sm:flex-row sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/terms" className="footer-link">
            Terms of Use
          </Link>
          <Link href="/contact" className="footer-link">
            Contact Us
          </Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
            Telegram Support
          </a>
          <span className="text-gold/30">{SITE_URL.replace("https://", "")}</span>
        </div>
      </div>
    </footer>
  );
}
