import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — AI Financial Exam Tutor`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AskFinBot helps you prepare for top financial qualification exams — CFA, FRM, CPA, ACCA, and more. AI-powered study chat with 7 free tokens.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — AI Financial Exam Tutor`,
    description:
      "Master financial qualification exams with AI-powered tutoring. CFA, FRM, CPA, ACCA, CAIA, CFP, and more.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
