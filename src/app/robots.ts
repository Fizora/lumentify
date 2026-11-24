import type { MetadataRoute } from "next";
import { siteContent } from "@/const/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteContent.siteUrl}/sitemap.xml`,
  };
}
