import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL, TELEGRAM_CONTACT, TELEGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME} for support, token purchases, and inquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <article className="glow-card p-6 sm:p-10">
          <h1 className="font-display mb-2 text-3xl font-semibold text-gold glow-text">
            Contact Us
          </h1>
          <p className="mb-8 text-sm text-gold/50">
            We&apos;re here to help you succeed in your financial qualification journey.
          </p>

          <div className="space-y-8">
            <section className="rounded-lg border border-gold/15 bg-navy-dark/40 p-6">
              <h2 className="font-display mb-3 text-lg font-semibold text-gold">
                Customer Service
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gold/70">
                For token purchases, account support, technical issues, billing inquiries, or general
                questions about {SITE_NAME}, please reach out to our team via Telegram. We aim to
                respond within 24 hours on business days.
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-3"
              >
                <span>Telegram</span>
                <span className="text-sm opacity-80">{TELEGRAM_CONTACT}</span>
              </a>
            </section>

            <section className="space-y-4 text-sm leading-relaxed text-gold/75">
              <div>
                <h2 className="font-display mb-2 text-lg font-semibold text-gold">Token Top-Up</h2>
                <p>
                  Need more tokens to continue studying? Message us on Telegram with your preferred token
                  package (50, 150, or 500 tokens). We&apos;ll provide pricing and payment instructions.
                  Your tokens will be activated once payment is confirmed.
                </p>
              </div>

              <div>
                <h2 className="font-display mb-2 text-lg font-semibold text-gold">Technical Support</h2>
                <p>
                  Experiencing issues with the chatbot, exam selection, or token display? Contact us on
                  Telegram with a description of the problem, your browser type, and the exam you were
                  using. Screenshots are helpful.
                </p>
              </div>

              <div>
                <h2 className="font-display mb-2 text-lg font-semibold text-gold">Feedback &amp; Suggestions</h2>
                <p>
                  We welcome feedback on exam coverage, response quality, and feature requests. Your input
                  helps us improve {SITE_NAME} for all financial exam candidates worldwide.
                </p>
              </div>

              <div>
                <h2 className="font-display mb-2 text-lg font-semibold text-gold">Business Inquiries</h2>
                <p>
                  For partnership opportunities, institutional licensing, or media inquiries, please contact
                  us via Telegram with &quot;Business Inquiry&quot; in your message.
                </p>
              </div>
            </section>

            <section className="rounded-lg border border-gold/10 bg-gold/5 p-5">
              <h2 className="font-display mb-2 text-base font-semibold text-gold">Website</h2>
              <p className="text-sm text-gold/70">
                <a href={SITE_URL} className="text-gold underline hover:text-gold-light">
                  {SITE_URL}
                </a>
              </p>
              <p className="mt-3 text-xs text-gold/45">
                {SITE_NAME} — AI-powered tutoring for financial qualification exams.
              </p>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-gold/15 pt-6">
            <Link href="/" className="btn-glow-sm inline-block">
              Back to {SITE_NAME}
            </Link>
            <Link href="/terms" className="nav-link inline-block py-2">
              Terms of Use
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
