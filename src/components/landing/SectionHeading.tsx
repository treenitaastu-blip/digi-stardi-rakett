import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-balance text-[1.9rem] font-extrabold tracking-tight leading-[1.12] md:text-[2.35rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}
