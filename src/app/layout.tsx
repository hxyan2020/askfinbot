import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  faqJsonLd,
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: typeof home.title === "string" ? `${home.title} | ${SITE_NAME}` : SITE_NAME,
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
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <JsonLd
          data={[
            organizationJsonLd(),
            websiteJsonLd(),
            softwareApplicationJsonLd(),
            faqJsonLd(),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
