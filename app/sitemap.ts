import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { routes } from "@/data/routes-vehicles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aarushitravels.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/faq", "/contact"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const routePages = routes.map((r) => ({
    url: `${SITE_URL}/routes/${r.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...destinationPages, ...routePages];
}
