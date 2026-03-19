import { companyData } from "@/data/companyData";
import { getBaseUrl } from "@/lib/env";

const baseUrl = getBaseUrl();
const siteName = `${companyData.companyName} Advocacia`;
const firstUnit = companyData.units[0];

function buildOrganizationJsonLd() {
  const sameAs: string[] = [];
  if (companyData.social.instagram?.url) sameAs.push(companyData.social.instagram.url);
  if (companyData.social.youtube?.url) sameAs.push(companyData.social.youtube.url);
  if (companyData.social.facebook?.url) sameAs.push(companyData.social.facebook.url);
  if (companyData.social.podcast?.url) sameAs.push(companyData.social.podcast.url);

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": baseUrl ? `${baseUrl.replace(/\/$/, "")}#organization` : undefined,
    name: siteName,
    url: baseUrl || undefined,
    logo: baseUrl ? `${baseUrl.replace(/\/$/, "")}/enterprise-logo.png` : undefined,
    ...(sameAs.length > 0 && { sameAs }),
  };

  const localBusiness: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": baseUrl ? `${baseUrl}#localbusiness` : undefined,
    name: siteName,
    url: baseUrl || undefined,
    telephone: companyData.phone,
    email: companyData.email,
    openingHours: companyData.businessHours,
    ...(firstUnit && {
      address: {
        "@type": "PostalAddress",
        streetAddress: firstUnit.address,
        addressLocality: firstUnit.name,
      },
    }),
  };

  return [organization, localBusiness];
}

export default function JsonLdOrganization() {
  const jsonLd = buildOrganizationJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
