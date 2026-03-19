function getEnv(key: string): string {
  if (typeof process === "undefined") return "";
  return (process.env[key] ?? "").trim();
}

/** URL base canônica do site (metadata, sitemap, robots). */
export function getBaseUrl(): string {
  return getEnv("NEXT_PUBLIC_SITE_URL") || "";
}

export interface AnalyticsIds {
  gaId?: string;
  gtmId?: string;
  metaPixelId?: string;
}

/** IDs de analytics opcionais, usados apenas após consentimento de cookies. */
export function getAnalyticsIds(): AnalyticsIds {
  return {
    gaId: getEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID") || undefined,
    gtmId: getEnv("NEXT_PUBLIC_GTM_ID") || undefined,
    metaPixelId: getEnv("NEXT_PUBLIC_META_PIXEL_ID") || undefined,
  };
}

