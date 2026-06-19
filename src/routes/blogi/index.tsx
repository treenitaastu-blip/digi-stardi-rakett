import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/blog/SiteLayout";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog";
import { blogIndexJsonLd, blogIndexLinks, blogIndexMeta } from "@/lib/seo";

export const Route = createFileRoute("/blogi/")({
  head: () => ({
    meta: blogIndexMeta(),
    links: blogIndexLinks(),
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <SiteLayout>
      <JsonLd data={blogIndexJsonLd()} />
      <main className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:pt-36">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
            Blogi
          </span>
          <h1 className="mt-3 text-balance text-[2rem] font-extrabold tracking-tight leading-[1.12] text-foreground md:text-[2.5rem]">
            Nõuanded kodulehe tegemise kohta
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">
            Lihtsad juhendid ja selgitused väikeettevõttele — kodulehe hind, sisu ja Google’i
            nähtavus.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          <Link to="/" className="font-medium text-brand transition-colors hover:text-brand/80">
            ← Tagasi avalehele
          </Link>
        </p>
      </main>
    </SiteLayout>
  );
}
