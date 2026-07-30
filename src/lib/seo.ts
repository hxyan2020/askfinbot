import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export type PublicSeoPage =
  | "home"
  | "study"
  | "mindmap"
  | "flashcards"
  | "about"
  | "contact"
  | "terms"
  | "cart"
  | "cartSuccess"
  | "profile";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  /** Soft noindex for account/checkout utility pages */
  noIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Central SEO copy for public routes.
 * Keyword strategy (directional, 2025–26 exam-prep market):
 * - High intent / competitive: "CFA Level 1 study", "FRM Part 1 prep", "ACCA tutor", "CPA exam prep"
 * - Long-tail opportunity: "CFA Level 1 ethics vignette explained", "FRM Basel III summary",
 *   "ACCA FR study plan", "finance exam mind map", "CFA flashcards LOS"
 * - Product differentiators to pair with exams: AI tutor, Study Path, syllabus mind map, flashcards
 * - AEO: lead descriptions with a clear answer of what the page does for which exams
 */
export const PAGE_SEO: Record<PublicSeoPage, PageSeo> = {
  home: {
    title: "AskFinBots — AI Tutor for CFA, FRM & ACCA",
    description:
      "Ask exam-focused questions for CFA, FRM, ACCA, CPA and more. Get syllabus-aligned answers, formulas, and study guidance — start with free tokens.",
    path: "/",
    keywords: [
      "CFA Level 1 tutor",
      "FRM Part 1 study",
      "ACCA exam AI tutor",
      "CPA exam prep AI",
      "finance qualification tutor",
      "CFA study chatbot",
      "AskFinBots",
    ],
    ogTitle: "AskFinBots — AI tutor for CFA, FRM, ACCA & more",
    ogDescription:
      "Syllabus-aware AI tutoring for major finance exams. Ask questions, follow Study Path, and revise with mind maps and flashcards.",
  },
  study: {
    title: "Study Path — Finance Exam Roadmap & Plan",
    description:
      "Build a syllabus roadmap and weekly study plan for CFA, FRM, ACCA, CPA and other finance exams. Track modules and hours until exam day.",
    path: "/study",
    keywords: [
      "CFA study plan",
      "FRM study schedule",
      "ACCA study roadmap",
      "CPA exam study plan",
      "finance exam syllabus plan",
      "Study Path AskFinBots",
    ],
  },
  mindmap: {
    title: "Finance Exam Mind Maps — CFA, FRM, ACCA",
    description:
      "Interactive syllabus mind maps for CFA, FRM, ACCA, CPA and more. See topic areas at a glance, then drill into Study Path lessons.",
    path: "/mindmap",
    keywords: [
      "CFA Level 1 mind map",
      "FRM syllabus map",
      "ACCA topic mind map",
      "finance exam mind map",
      "CFA curriculum overview",
    ],
  },
  flashcards: {
    title: "Finance Exam Flashcards by Subject",
    description:
      "Save formulas and explanations from AskFinBots into exam-specific flashcards. Organized by subject for CFA, FRM, ACCA, CPA and more.",
    path: "/flashcards",
    keywords: [
      "CFA flashcards",
      "FRM flashcards",
      "ACCA revision cards",
      "CPA study flashcards",
      "finance exam flashcards",
    ],
  },
  about: {
    title: "About — Specialist AI for Finance Exams",
    description:
      "AskFinBots is built for CFA, FRM, ACCA, CPA and related quals — not generic chat. Exam-focused tutoring with Study Path, mind maps, and mentor support.",
    path: "/about",
    keywords: [
      "AskFinBots about",
      "AI finance exam tutor",
      "CFA AI study tool",
      "specialist finance chatbot",
    ],
  },
  contact: {
    title: "Contact AskFinBots Support",
    description:
      "Contact AskFinBots for account help, technical support, feedback, or partnerships. Reach us by email or Telegram.",
    path: "/contact",
    keywords: ["AskFinBots contact", "finance tutor support", "AskFinBots Telegram"],
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms of Use for AskFinBots AI tutoring for finance qualification exams. Educational use only — not official exam materials.",
    path: "/terms",
    keywords: ["AskFinBots terms", "terms of use"],
  },
  cart: {
    title: "Token Plans for Finance Exam Tutoring",
    description:
      "Compare AskFinBots Starter, Plus and Pro monthly token plans for CFA, FRM, ACCA and other finance exam AI tutoring. Secure Stripe checkout.",
    path: "/cart",
    keywords: [
      "AskFinBots pricing",
      "CFA AI tutor price",
      "finance exam tutoring subscription",
      "AskFinBots tokens",
    ],
  },
  cartSuccess: {
    title: "Payment Status",
    description: "Confirm your AskFinBots token plan payment and membership status.",
    path: "/cart/success",
    keywords: [],
    noIndex: true,
  },
  profile: {
    title: "My Profile",
    description:
      "Manage your AskFinBots account, qualification track, token plan, and password.",
    path: "/profile",
    keywords: [],
    noIndex: true,
  },
};

const DEFAULT_KEYWORDS = [
  "AskFinBots",
  "AI finance exam tutor",
  "CFA study",
  "FRM prep",
  "ACCA tutor",
  "CPA exam prep",
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata(page: PublicSeoPage): Metadata {
  const seo = PAGE_SEO[page];
  const title = seo.title;
  const description = seo.description;
  const url = absoluteUrl(seo.path);
  const keywords = [...new Set([...seo.keywords, ...DEFAULT_KEYWORDS])];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.ogTitle || `${title} | ${SITE_NAME}`,
      description: seo.ogDescription || description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: seo.ogTitle || `${title} | ${SITE_NAME}`,
      description: seo.ogDescription || description,
      images: [absoluteUrl("/logo.png")],
    },
    robots: seo.noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo.png"),
    description:
      "AI tutoring platform for CFA, FRM, ACCA, CPA, CAIA, CFP, SIE, CIMA, CMT and CFA ESG exam preparation.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: absoluteUrl("/contact"),
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Ask exam-focused questions and follow structured study tools for major financial qualifications.",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "Specialist AI tutor for CFA, FRM, ACCA, CPA and other finance exams with Study Path, mind maps, and flashcards.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free registration tokens; optional monthly token plans",
      url: absoluteUrl("/cart"),
    },
    featureList: [
      "Exam-focused Q&A for major finance qualifications",
      "Personalized Study Path and syllabus roadmap",
      "Interactive syllabus mind maps",
      "Subject-sorted flashcards",
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which finance exams does AskFinBots support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AskFinBots supports major finance qualifications including CFA, FRM, ACCA, CPA, CAIA, CFP, SIE, CIMA, CMT, and CFA ESG. Choose your track on the Ask Bot page or under My Profile.",
        },
      },
      {
        "@type": "Question",
        name: "Is AskFinBots a generic ChatGPT wrapper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. AskFinBots is built for finance exam preparation with syllabus-oriented Study Path, mind maps, flashcards, and tutoring flows tailored to each qualification — not a general-purpose chatbot.",
        },
      },
      {
        "@type": "Question",
        name: "How do free tokens work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "New accounts receive free tokens at registration. One token is used when the tutor successfully returns an answer. You can buy monthly Starter, Plus, or Pro plans for more capacity.",
        },
      },
      {
        "@type": "Question",
        name: "Can AskFinBots replace official curriculum providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AskFinBots is study support only and is not affiliated with CFA Institute, GARP, ACCA, AICPA, or other awarding bodies. Use it alongside official readings and approved prep materials.",
        },
      },
    ],
  };
}

export const INDEXABLE_PATHS: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] =
  [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/study", priority: 0.9, changeFrequency: "weekly" },
    { path: "/mindmap", priority: 0.9, changeFrequency: "weekly" },
    { path: "/flashcards", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/cart", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];
