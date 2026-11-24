import type { MetadataRoute } from "next";
import { siteContent } from "@/const/data";

const publicPages = [
  "",
  "/about",
  "/pricing",
  "/showcase",
  "/faq",
  "/support",
  "/services/web-development",
  "/services/web-maintenance",
  "/services/seo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((path) => ({
    url: new URL(path, siteContent.siteUrl).toString(),
  }));
}
