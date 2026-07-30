import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TokenCart } from "@/components/TokenCart";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { findUserById } from "@/lib/users";
import { getPreferredCheckoutProvider } from "@/lib/payments";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("cart");

export default async function CartPage() {
  const userId = await getSessionUserIdFromCookies();
  const user = userId ? await findUserById(userId) : null;
  const paymentsEnabled = getPreferredCheckoutProvider() !== "none";

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <section className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Token shop
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Choose the study capacity you need
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Monthly token plans for AskFinBots AI tutoring across CFA, FRM, ACCA, CPA and other
            finance exams. Plans renew automatically unless cancelled in My Profile. Payments are
            processed securely with Stripe.
          </p>
        </section>
        <TokenCart
          loggedIn={Boolean(user)}
          email={user?.email}
          checkoutEnabled={paymentsEnabled}
        />
      </main>
      <Footer />
    </>
  );
}
