import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL, TELEGRAM_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <section className="mb-10">
          <p className="text-sm font-medium text-gold">Legal</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-navy">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: September 13, 2026 · {SITE_URL}
          </p>
        </section>

        <article className="surface-card space-y-8 p-6 text-sm leading-relaxed text-slate-700 sm:p-8">
          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">1. Who we are</h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) operates an AI study platform for financial
              qualification exams at {SITE_URL}. This Privacy Policy explains what information we
              collect, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">2. Information we collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Account details:</strong> name, email address, password hash (if you use
                email/password), preferred exam track, and token/membership status.
              </li>
              <li>
                <strong>Google sign-in:</strong> if you choose Continue with Google, we receive your
                Google account ID, verified email, and display name from Google. We do not receive
                your Google password.
              </li>
              <li>
                <strong>Phone / SMS sign-in:</strong> if you choose Continue with SMS, we store your
                mobile number in E.164 format and send a one-time code through Twilio Verify. We do
                not receive SMS message contents beyond delivery status.
              </li>
              <li>
                <strong>Study content:</strong> questions you ask, AI replies, study portfolio items,
                flashcards, and mentor conversation threads you start.
              </li>
              <li>
                <strong>Payments:</strong> if you buy a plan, Stripe processes card details. We store
                related order/membership identifiers and status, not full card numbers.
              </li>
              <li>
                <strong>Technical data:</strong> basic logs such as IP address, browser type, and
                request timing needed to operate and secure the Service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">3. How we use information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and authenticate your account (email/password, Google, or SMS).</li>
              <li>Provide tutoring, Study Path, mind maps, flashcards, and mentor escalation.</li>
              <li>Manage free tokens, paid plans, and customer support.</li>
              <li>Improve reliability, prevent abuse, and meet legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">4. AI and subprocessors</h2>
            <p>
              Chat messages are sent to third-party AI providers (currently Google Gemini and/or
              DeepSeek) to generate study answers. Payment processing is handled by Stripe. SMS
              one-time codes are sent by Twilio. Do not submit sensitive personal data you would not
              want processed by these providers.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">5. Cookies and sessions</h2>
            <p>
              We use an HTTP-only session cookie to keep you signed in. You can log out at any time
              from My Profile. We do not use advertising trackers for Google OAuth beyond what Google
              requires to complete sign-in.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">6. Data retention</h2>
            <p>
              We keep account and study records while your account is active and for a reasonable
              period afterward for support, billing disputes, and security. You may request deletion
              of your account by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">7. Your choices</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Update your name and exam track in My Profile.</li>
              <li>Set or change a password even if you originally signed in with Google.</li>
              <li>
                Contact us to correct data or request account deletion via the{" "}
                <Link href="/contact" className="font-medium text-navy underline underline-offset-2">
                  Contact page
                </Link>{" "}
                or{" "}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy underline underline-offset-2"
                >
                  Telegram support
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">8. Children</h2>
            <p>
              The Service is intended for learners preparing for professional finance exams and is
              not directed at children under 13 (or the minimum age required in your jurisdiction).
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">9. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
              at the top will change when we do. Continued use of the Service after an update means
              you accept the revised policy.
            </p>
          </div>

          <div>
            <h2 className="font-display mb-2 text-lg font-semibold text-navy">10. Contact</h2>
            <p>
              Privacy questions: use our{" "}
              <Link href="/contact" className="font-medium text-navy underline underline-offset-2">
                Contact page
              </Link>
              . Related documents:{" "}
              <Link href="/terms" className="font-medium text-navy underline underline-offset-2">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
