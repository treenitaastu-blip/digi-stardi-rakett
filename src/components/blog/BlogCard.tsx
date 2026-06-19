import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-soft-lg">
      <Link to="/blogi/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-secondary">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.publishedAt}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          {new Date(post.publishedAt).toLocaleDateString("et-EE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <h2 className="mt-3 text-xl font-bold leading-snug text-foreground">
          <Link
            to="/blogi/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-brand"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <Button variant="hero" size="default" className="mt-6 w-fit rounded-xl" asChild>
          <Link to="/blogi/$slug" params={{ slug: post.slug }}>
            Loe edasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
