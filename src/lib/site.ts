/** Canonical site identity for SEO, metadata, and structured data. */
export const SITE = {
  name: "Lehekoda",
  url: "https://lehekoda.ee",
  domain: "lehekoda.ee",
  lang: "et",
  locale: "et_EE",
  tagline: "Veebilehed Eesti ettevõtetele",
  title: "Koduleht 7 päevaga, 399 € | Lehekoda",
  description:
    "Professionaalne ühe-lehe koduleht väikeettevõttele. Müügitekstid, SEO, Google Maps ja mobiilidisain. Fikseeritud hind 399 €, tarne 7 tööpäeva.",
  email: "henri@blimeyofficial.com",
  price: 399,
  priceCurrency: "EUR",
  deliveryDays: 7,
  themeColor: "#2563EB",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "/" : normalized}`;
}
