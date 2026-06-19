import { faqs } from "./faq";
import { SITE, absoluteUrl } from "./site";

type MetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  charSet?: string;
  httpEquiv?: string;
};

type LinkTag = {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  hrefLang?: string;
};

const OG_IMAGE = absoluteUrl("/favicon.png");

function verificationMeta(): MetaTag[] {
  const tags: MetaTag[] = [];
  const google = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
  if (google) tags.push({ name: "google-site-verification", content: google });
  return tags;
}

/** Shared Open Graph + Twitter tags for the homepage. */
export function homeSocialMeta(): MetaTag[] {
  return [
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:type", content: "website" },
    { property: "og:url", content: absoluteUrl("/") },
    { property: "og:title", content: SITE.title },
    { property: "og:description", content: SITE.description },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: SITE.title },
    { name: "twitter:description", content: SITE.description },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
  ];
}

/** Crawler and browser hints applied site-wide. */
export function globalSeoMeta(): MetaTag[] {
  return [
    { name: "description", content: SITE.description },
    { name: "author", content: SITE.name },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow" },
    { name: "theme-color", content: SITE.themeColor },
    { name: "application-name", content: SITE.name },
    { name: "format-detection", content: "telephone=no" },
    ...verificationMeta(),
  ];
}

export function homePageMeta(): MetaTag[] {
  return [
    { title: SITE.title },
    { name: "description", content: SITE.description },
    ...homeSocialMeta(),
  ];
}

export function homePageLinks(): LinkTag[] {
  return [
    { rel: "canonical", href: absoluteUrl("/") },
    { rel: "alternate", href: absoluteUrl("/"), hrefLang: "et" },
    { rel: "alternate", href: absoluteUrl("/"), hrefLang: "x-default" },
    { rel: "manifest", href: "/manifest.webmanifest" },
  ];
}

/** JSON-LD @graph for the homepage (Organization, WebSite, WebPage, Service, FAQ). */
export function homeJsonLdGraph(): Record<string, unknown> {
  const orgId = `${SITE.url}/#organization`;
  const websiteId = `${SITE.url}/#website`;
  const webpageId = `${SITE.url}/#webpage`;
  const serviceId = `${SITE.url}/#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl("/favicon.png"),
        email: SITE.email,
        areaServed: { "@type": "Country", name: "Estonia" },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.lang,
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: absoluteUrl("/"),
        name: SITE.title,
        description: SITE.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        inLanguage: SITE.lang,
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: `${SITE.name} — koduleht väikeettevõttele`,
        description: SITE.description,
        url: SITE.url,
        image: absoluteUrl("/favicon.png"),
        priceRange: "€399",
        areaServed: { "@type": "Country", name: "Estonia" },
        provider: { "@id": orgId },
        offers: {
          "@type": "Offer",
          name: "Digitaalne stardipakett",
          price: SITE.price,
          priceCurrency: SITE.priceCurrency,
          url: absoluteUrl("/#hind"),
          availability: "https://schema.org/InStock",
          description:
            "Ühe-lehe koduleht koos müügitekstide, SEO, Google Mapsi ja mobiilidisainiga. Tarne 7 tööpäevaga.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
