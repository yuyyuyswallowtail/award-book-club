import type { MetadataRoute } from "next";
import { books } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/books", "/gifting", "/merch", "/faq"].map((p) => ({ url: base + p }));
  return [...pages, ...books.map((b) => ({ url: `${base}/books/${b.slug}` }))];
}
