import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("study");

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
