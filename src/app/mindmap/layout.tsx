import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("mindmap");

export default function MindmapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
