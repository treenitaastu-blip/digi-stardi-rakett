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

const OG_IMAGE = absoluteUrl("/logo-lehekoda.webp");
const OG_IMAGE_WIDTH = "300";
const OG_IMAGE_HEIGHT = "100";

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
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
    { name: "twitter:card", content: "summary_large_image" },
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
  return [{ title: SITE.title }, ...homeSocialMeta()];
}

export function homePageLinks(): LinkTag[] {
  return [
    { rel: "canonical", href: absoluteUrl("/") },
    { rel: "alternate", href: absoluteUrl("/"), hrefLang: "et" },
    { rel: "alternate", href: absoluteUrl("/"), hrefLang: "x-default" },
    { rel: "manifest", href: "/manifest.webmanifest" },
    { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLMs" },
  ];
}

function pageSocialMeta({
  title,
  description,
  url,
  image = OG_IMAGE,
  imageWidth = OG_IMAGE_WIDTH,
  imageHeight = OG_IMAGE_HEIGHT,
  imageAlt,
  type = "website",
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  type?: "website" | "article";
}): MetaTag[] {
  return [
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: imageWidth },
    { property: "og:image:height", content: imageHeight },
    { property: "og:image:alt", content: imageAlt ?? title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt ?? title },
  ];
}

export function blogIndexMeta(): MetaTag[] {
  const title = "Blogi | Lehekoda";
  const description =
    "Nõuanded ja juhendid väikeettevõttele kodulehe tegemise, hinnastamise ja Google’i nähtavuse kohta.";
  return [
    { title },
    { name: "description", content: description },
    ...pageSocialMeta({
      title,
      description,
      url: absoluteUrl("/blogi"),
    }),
  ];
}

export function blogIndexLinks(): LinkTag[] {
  return [
    { rel: "canonical", href: absoluteUrl("/blogi") },
    { rel: "alternate", href: absoluteUrl("/blogi"), hrefLang: "et" },
  ];
}

export function blogPostMeta(post: {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
}): MetaTag[] {
  const url = absoluteUrl(`/blogi/${post.slug}`);
  return [
    { title: post.metaTitle },
    { name: "description", content: post.metaDescription },
    ...pageSocialMeta({
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      image: absoluteUrl(post.image),
      imageWidth: "1200",
      imageHeight: "750",
      imageAlt: post.imageAlt,
      type: "article",
    }),
    { property: "article:published_time", content: post.publishedAt },
  ];
}

export function blogPostLinks(slug: string): LinkTag[] {
  const url = absoluteUrl(`/blogi/${slug}`);
  return [
    { rel: "canonical", href: url },
    { rel: "alternate", href: url, hrefLang: "et" },
  ];
}

export function blogIndexJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} blogi`,
    description:
      "Nõuanded ja juhendid väikeettevõttele kodulehe tegemise ja hinnastamise kohta.",
    url: absoluteUrl("/blogi"),
    inLanguage: SITE.lang,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: absoluteUrl("/logo-lehekoda.webp"),
    },
  };
}

export function blogPostJsonLd(post: {
  title: string;
  metaDescription: string;
  slug: string;
  image: string;
  publishedAt: string;
}): Record<string, unknown> {
  const url = absoluteUrl(`/blogi/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: SITE.lang,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-lehekoda.webp"),
      },
    },
  };
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
        logo: absoluteUrl("/logo-lehekoda.webp"),
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
        image: absoluteUrl("/logo-lehekoda.webp"),
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
