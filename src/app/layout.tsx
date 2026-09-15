import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import { PwaInstallProvider } from "@/contexts/PwaInstallContext";
import {
  buildPageMetadata,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const home = buildPageMetadata("home");
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: typeof home.title === "object" && home.title && "absolute" in home.title
      ? String(home.title.absolute)
      : `${SITE_NAME} — AI Tutor for CFA, FRM & ACCA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: home.description,
  keywords: home.keywords,
  applicationName: SITE_NAME,
  category: "education",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: home.alternates,
  openGraph: home.openGraph,
  twitter: home.twitter,
  robots: home.robots,
  verification: googleVerification ? { google: googleVerification } : undefined,
  icons: {
    icon: [
      { url: "/logo-hd.png", type: "image/png", sizes: "1024x1588" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/logo-hd.png",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), softwareApplicationJsonLd()]} />
        <PwaInstallProvider>{children}</PwaInstallProvider>
      </body>
    </html>
  );
}
