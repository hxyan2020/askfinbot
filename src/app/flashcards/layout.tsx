import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Flashcards | ${SITE_NAME}`,
  description: "Saved study flashcards organized by exam and subject area.",
};

export default function FlashcardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
