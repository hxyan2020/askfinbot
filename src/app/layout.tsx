import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — AI Financial Exam Tutor`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "AskFinBots helps you prepare for top financial qualification exams — CFA, FRM, CPA, ACCA, and more. AI-powered study chat with 50 free tokens.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${SITE_NAME} — AI Financial Exam Tutor`,
    description:
      "Master financial qualification exams with AI-powered tutoring. CFA, FRM, CPA, ACCA, CAIA, CFP, and more.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
