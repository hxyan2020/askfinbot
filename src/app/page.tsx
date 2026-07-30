import type { Metadata } from "next";
import { AskFinBotApp } from "@/components/AskFinBotApp";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("home");

export default function Home() {
  return <AskFinBotApp />;
}
