import { cn } from "@/lib/utils";

/** Full logo lockup — house icon + Lehekoda wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo-lehekoda.webp"
      alt="Lehekoda"
      width={126}
      height={42}
      fetchPriority="high"
      decoding="async"
      className={cn("h-8 w-auto md:h-9", className)}
    />
  );
}

/** @deprecated Use `Logo` — kept for existing imports. */
export function Wordmark({ className }: { className?: string }) {
  return <Logo className={className} />;
}
