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
  | "privacy"
  | "cart"
  | "cartSuccess"
  | "profile";

type PageSeo = {
  /** Browser / SERP title (without brand suffix when absoluteTitle is set) */
  title: string;
  description: string;
  path: string;
  keywords: string[];
  /** Soft noindex for account/checkout utility pages */
  noIndex?: boolean;
  /** Use absolute title (no "| AskFinBots" template suffix) */
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Central SEO copy for public routes.
 * Audience: candidates preparing for CFA, FRM, ACCA, CPA, CAIA, CFP, SIE, CIMA, CMT, CFA ESG.
 * Mix head terms (exam + tutor/prep) with long-tail (study plan, mind map, flashcards, syllabus).
 */
export const PAGE_SEO: Record<PublicSeoPage, PageSeo> = {
  home: {
    title: "AI Tutor for CFA, FRM, ACCA & CPA Exams",
    absoluteTitle: true,
    description:
      "AskFinBots is an AI tutor for CFA Level 1–3, FRM Part 1–2, ACCA, CPA and more. Get syllabus-aligned answers, Study Path plans, mind maps and flashcards — start free.",
    path: "/",
    keywords: [
      "CFA Level 1 AI tutor",
      "CFA exam prep chatbot",
      "FRM Part 1 study help",
      "ACCA AI tutor",
      "CPA exam prep AI",
      "finance exam AI tutor",
      "CFA study plan online",
      "AskFinBots",
    ],
    ogTitle: "AskFinBots — AI Tutor for CFA, FRM, ACCA & CPA",
    ogDescription:
      "Syllabus-aware AI tutoring for major finance exams. Ask questions, build a Study Path, and revise with mind maps and flashcards.",
  },
  study: {
    title: "Study Path — CFA, FRM & ACCA Exam Roadmap",
    description:
      "Build a personalized CFA, FRM, ACCA or CPA study plan from the syllabus. Get weekly focus, module hours, and a roadmap you can track until exam day.",
    path: "/study",
    keywords: [
      "CFA Level 1 study plan",
      "FRM study schedule",
      "ACCA study roadmap",
      "CPA exam study plan",
      "finance exam syllabus plan",
      "personalized CFA study path",
      "weekly CFA revision plan",
    ],
  },
  mindmap: {
    title: "CFA, FRM & ACCA Syllabus Mind Maps",
    description:
      "Interactive mind maps of CFA, FRM, ACCA, CPA and other finance exam syllabi. See every topic area at a glance, then jump into Study Path lessons.",
    path: "/mindmap",
    keywords: [
      "CFA Level 1 mind map",
      "FRM Part 1 syllabus map",
      "ACCA topic mind map",
      "finance exam curriculum map",
      "CFA curriculum overview",
      "interactive syllabus mind map",
    ],
  },
  flashcards: {
    title: "CFA, FRM & ACCA Flashcards by Subject",
    description:
      "Turn AskFinBots answers into exam flashcards for CFA, FRM, ACCA and CPA. Save formulas and explanations, sorted by subject for faster revision.",
    path: "/flashcards",
    keywords: [
      "CFA flashcards",
      "FRM formula flashcards",
      "ACCA revision cards",
      "CPA study flashcards",
      "finance exam flashcards",
      "CFA Level 1 flashcards online",
    ],
  },
  about: {
    title: "About AskFinBots — Specialist Finance Exam AI",
    description:
      "Learn why AskFinBots is built for CFA, FRM, ACCA and CPA candidates — not generic chat. Exam-focused tutoring with Study Path, mind maps, flashcards and mentor support.",
    path: "/about",
    keywords: [
      "AskFinBots about",
      "AI finance exam tutor",
      "CFA AI study tool",
      "specialist finance chatbot",
      "best AI for CFA study",
    ],
  },
  contact: {
    title: "Contact AskFinBots Support",
    description:
      "Get help with your AskFinBots account, tokens, Study Path, or partnerships. Contact support by email or Telegram for CFA, FRM and ACCA tutoring questions.",
    path: "/contact",
    keywords: [
      "AskFinBots contact",
      "finance tutor support",
      "AskFinBots Telegram",
      "CFA AI tutor help",
    ],
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms of Use for AskFinBots AI tutoring for CFA, FRM, ACCA, CPA and other finance exams. Educational study support only — not official exam materials.",
    path: "/terms",
    keywords: ["AskFinBots terms of use", "finance exam tutor terms"],
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How AskFinBots collects and uses account, Google sign-in, chat history and payment data when you study for CFA, FRM, ACCA and other finance exams.",
    path: "/privacy",
    keywords: ["AskFinBots privacy policy", "finance tutor data privacy"],
  },
  cart: {
    title: "Token Plans — CFA & FRM AI Tutoring Pricing",
    description:
      "Compare AskFinBots Starter, Plus and Pro monthly token plans for CFA, FRM, ACCA and CPA AI tutoring. Free registration tokens, then upgrade via secure Stripe checkout.",
    path: "/cart",
    keywords: [
      "AskFinBots pricing",
      "CFA AI tutor subscription",
      "FRM tutoring cost",
      "finance exam AI subscription",
      "AskFinBots token plans",
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
  "CAIA study",
  "CFP exam prep",
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata(page: PublicSeoPage): Metadata {
  const seo = PAGE_SEO[page];
  const title = seo.absoluteTitle
    ? { absolute: `${seo.title} | ${SITE_NAME}` }
    : seo.title;
  const description = seo.description;
  const url = absoluteUrl(seo.path);
  const keywords = [...new Set([...seo.keywords, ...DEFAULT_KEYWORDS])];
  const ogTitle = seo.ogTitle || `${seo.title} | ${SITE_NAME}`;
  const ogDescription = seo.ogDescription || description;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 512,
          height: 512,
          alt: `${SITE_NAME} — AI tutor for CFA, FRM, ACCA and CPA`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: ogTitle,
      description: ogDescription,
      images: [absoluteUrl("/logo.png")],
    },
    robots: seo.noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
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
      "AI tutor and study tools for CFA, FRM, ACCA, CPA and other finance qualification exams.",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    inLanguage: "en",
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
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
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
      {
        "@type": "Question",
        name: "Who is AskFinBots for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Candidates preparing for competitive finance certifications who need fast, syllabus-aware explanations plus a weekly study plan, mind map overview, and flashcards for revision.",
        },
      },
    ],
  };
}

export const INDEXABLE_PATHS: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/study", priority: 0.9, changeFrequency: "weekly" },
  { path: "/mindmap", priority: 0.9, changeFrequency: "weekly" },
  { path: "/flashcards", priority: 0.85, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cart", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];
