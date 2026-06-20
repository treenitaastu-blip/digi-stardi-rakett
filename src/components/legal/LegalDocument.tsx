import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function LegalDocument({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-16 pt-32 md:pt-36">
      <p className="text-sm text-muted-foreground">
        <Link to="/" className="font-medium text-brand transition-colors hover:text-brand/80">
          ← Avalehele
        </Link>
      </p>
      <h1 className="mt-6 text-balance text-[2rem] font-extrabold tracking-tight leading-[1.12] text-foreground md:text-[2.35rem]">
        {title}
      </h1>
      <article className="blog-prose mt-8">{children}</article>
    </main>
  );
}
