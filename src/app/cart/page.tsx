import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TokenCart } from "@/components/TokenCart";
import { SITE_NAME } from "@/lib/constants";
import { getSessionUserIdFromCookies } from "@/lib/user-auth";
import { findUserById } from "@/lib/users";
import { getPreferredCheckoutProvider } from "@/lib/wise";

export const metadata: Metadata = {
  title: `Buy Tokens | ${SITE_NAME}`,
  description: "Compare AskFinBots monthly plans and pay securely via Wise or card checkout.",
};

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
            Monthly plans expire after 1 month and renew automatically unless cancelled in My
            Profile. After cancellation, membership continues until the current cycle ends. Payments
            are received via Wise when configured.
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
