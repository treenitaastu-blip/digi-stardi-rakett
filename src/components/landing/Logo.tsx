import { cn } from "@/lib/utils";

/**
 * Brand mark — an abstract upward "launch" spark, no boxed container.
 * Uses the brand gradient via CSS variables.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("h-5 w-5", className)}
    >
      <defs>
        <linearGradient id="brandMarkGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ stopColor: "var(--brand)" }} />
          <stop offset="55%" style={{ stopColor: "var(--brand-2)" }} />
          <stop offset="100%" style={{ stopColor: "var(--brand-3)" }} />
        </linearGradient>
      </defs>
      <path
        d="M12 1.5c3.4 4 5 8.2 5 12.4 0 1.7-.4 3.3-1.2 4.8-.3.6-1 .9-1.6.6l-1-.5a1 1 0 0 0-.9 0l-1.1.6a1 1 0 0 1-.9 0l-1.1-.6a1 1 0 0 0-.9 0l-1 .5c-.6.3-1.3 0-1.6-.6A10.6 10.6 0 0 1 7 13.9C7 9.7 8.6 5.5 12 1.5Z"
        fill="url(#brandMarkGrad)"
      />
      <circle cx="12" cy="9.5" r="2" fill="var(--background)" />
    </svg>
  );
}

/**
 * Text wordmark in the brand display typeface.
 * `tone="onBrand"` renders light text for use over brand-colored surfaces.
 */
export function Wordmark({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "onBrand";
}) {
  return (
    <span
      className={cn(
        "font-display text-[1.02rem] font-bold leading-none tracking-tight",
        tone === "onBrand" ? "text-brand-foreground" : "text-foreground",
        className,
      )}
    >
      Lehe
      <span className={tone === "onBrand" ? "" : "text-brand"}>koda</span>
    </span>
  );
}

/** Wordmark-only logo lockup (alias for navbar and other surfaces). */
export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "onBrand";
}) {
  return <Wordmark className={className} tone={tone} />;
}
