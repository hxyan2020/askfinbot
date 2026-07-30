import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("flashcards");

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
