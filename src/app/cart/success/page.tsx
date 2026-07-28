import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutSuccess } from "@/components/CheckoutSuccess";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Payment Status | ${SITE_NAME}`,
};

export default function CartSuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-14 sm:px-6 sm:py-20">
        <CheckoutSuccess />
      </main>
      <Footer />
    </>
  );
}
