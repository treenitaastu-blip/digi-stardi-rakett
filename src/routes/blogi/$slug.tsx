import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/blog/SiteLayout";
import { blogPostContentBySlug } from "@/components/blog/posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPost } from "@/lib/blog";
import { blogPostJsonLd, blogPostLinks, blogPostMeta } from "@/lib/seo";

export const Route = createFileRoute("/blogi/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) return {};
    return {
      meta: blogPostMeta(post),
      links: blogPostLinks(post.slug),
    };
  },
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const Content = blogPostContentBySlug[post.slug];

  if (!Content) throw notFound();

  return (
    <SiteLayout>
      <JsonLd data={blogPostJsonLd(post)} />
      <main className="mx-auto max-w-3xl px-5 pb-16 pt-32 md:pt-36">
        <p className="text-sm text-muted-foreground">
          <Link to="/blogi" className="font-medium text-brand transition-colors hover:text-brand/80">
            ← Blogi
          </Link>
        </p>

        <header className="mt-6">
          <time
            dateTime={post.publishedAt}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            {new Date(post.publishedAt).toLocaleDateString("et-EE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" · "}
            {post.readingMinutes} min lugemist
          </time>
          <h1 className="mt-3 text-balance text-[2rem] font-extrabold tracking-tight leading-[1.12] text-foreground md:text-[2.5rem]">
            {post.title}
          </h1>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={750}
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <div className="mt-10">
          <Content />
        </div>
      </main>
    </SiteLayout>
  );
}
