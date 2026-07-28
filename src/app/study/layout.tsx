import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Study Path | ${SITE_NAME}`,
  description: "Syllabus roadmap, personalized study strategy, and progress portfolio for finance qualifications.",
};

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
