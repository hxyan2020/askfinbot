import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { INDEXABLE_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return INDEXABLE_PATHS.map((item) => ({
    url: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
