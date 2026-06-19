export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  readingMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kodulehe-tegemine-ise-voi-tellida-spetsialistilt",
    title: "Kodulehe tegemine ise või tellida spetsialistilt?",
    excerpt:
      "Kodulehe saab teha ka ise, aga alati ei ole see kõige kiirem ega odavam tee. Siin on lihtne ülevaade, mida enne otsustamist arvestada.",
    metaTitle: "Kodulehe tegemine ise või tellida spetsialistilt? | Lehekoda",
    metaDescription:
      "Kas teha koduleht ise või tellida spetsialistilt? Vaata, millal ise tegemine sobib ja millal on mõistlikum tellida valmis koduleht.",
    image: "/blog/kodulehe-tegemine-ise-voi-tellida-spetsialistilt.webp",
    imageAlt: "Inimene teeb sülearvutis kodulehte",
    publishedAt: "2026-06-20",
    readingMinutes: 6,
  },
  {
    slug: "palju-maksab-kodulehe-tegemine-eestis",
    title: "Palju maksab kodulehe tegemine Eestis?",
    excerpt:
      "Kodulehe hind võib olla 300 eurost mitme tuhande euroni. Siin on lihtne ülevaade, millega väikeettevõte peaks arvestama.",
    metaTitle: "Palju maksab kodulehe tegemine Eestis? | Lehekoda",
    metaDescription:
      "Vaata, millest kodulehe hind sõltub ja palju peaks väikeettevõte Eestis arvestama. Lehekoda teeb kodulehe 399€ eest, tekstide ja Google’i seadistusega.",
    image: "/blog/palju-maksab-kodulehe-tegemine-eestis.webp",
    imageAlt: "Väikeettevõtja töötab arvutis kodulehe kallal",
    publishedAt: "2026-06-19",
    readingMinutes: 5,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostPath(slug: string): string {
  return `/blogi/${slug}`;
}
