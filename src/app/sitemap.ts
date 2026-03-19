import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/env";

const baseUrl = getBaseUrl() || "https://www.exemplo.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/cookies", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/politica-de-privacidade", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/termos-de-uso", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl.replace(/\/$/, "")}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
