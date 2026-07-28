export interface TokenPackage {
  id: "starter" | "plus" | "pro";
  name: string;
  tokens: number;
  priceCents: number;
  currency: "usd";
  tagline: string;
  idealFor: string;
  studyCapacity: string;
  benefits: string[];
  featured?: boolean;
}

export const TOKEN_PACKAGES: TokenPackage[] = [
  {
    id: "starter",
    name: "Starter",
    tokens: 50,
    priceCents: 499,
    currency: "usd",
    tagline: "For quick revision and occasional questions",
    idealFor: "Candidates who want targeted help with difficult topics or final-review questions.",
    studyCapacity: "Up to 50 successful answers—roughly 1–2 focused questions a day for one month.",
    benefits: [
      "50 successful chatbot answers each month",
      "Expires in 1 month and renews automatically unless cancelled",
      "Cancel anytime in My Profile — access continues until the cycle ends",
      "1 month of Ask a human mentor access from each renewal",
      "Use with any supported qualification",
      "Formula rendering, interactive charts, and topic references",
      "Save useful explanations directly to flashcards",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    tokens: 150,
    priceCents: 1199,
    currency: "usd",
    tagline: "For consistent study throughout your preparation",
    idealFor: "Candidates following a weekly study schedule across several syllabus modules.",
    studyCapacity: "Up to 150 successful answers—enough for regular study and revision over a full term.",
    benefits: [
      "150 successful chatbot answers each month",
      "Expires in 1 month and renews automatically unless cancelled",
      "Cancel anytime in My Profile — access continues until the cycle ends",
      "About 20% lower cost per token",
      "1 month of Ask a human mentor access from each renewal",
      "Includes flashcards, formulas, charts, and topic references",
    ],
    featured: true,
  },
  {
    id: "pro",
    name: "Pro",
    tokens: 500,
    priceCents: 2999,
    currency: "usd",
    tagline: "For intensive preparation and multiple sittings",
    idealFor: "Candidates using AskFinBots as a daily tutor or preparing across multiple exam levels.",
    studyCapacity: "Up to 500 successful answers for intensive learning, practice, and final revision.",
    benefits: [
      "500 successful chatbot answers each month",
      "Expires in 1 month and renews automatically unless cancelled",
      "Cancel anytime in My Profile — access continues until the cycle ends",
      "About 40% lower cost per token",
      "1 month of Ask a human mentor access from each renewal",
      "Includes flashcards, formulas, charts, and topic references",
    ],
  },
];

export function getTokenPackage(id: string): TokenPackage | undefined {
  return TOKEN_PACKAGES.find((item) => item.id === id);
}

export function formatPrice(cents: number, currency = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}
