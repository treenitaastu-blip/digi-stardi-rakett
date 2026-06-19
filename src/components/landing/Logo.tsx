import { cn } from "@/lib/utils";

/** Full logo lockup — house icon + Lehekoda wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo-lehekoda.png"
      alt="Lehekoda"
      width={140}
      height={28}
      className={cn("h-7 w-auto mix-blend-screen", className)}
    />
  );
}

/** @deprecated Use `Logo` — kept for existing imports. */
export function Wordmark({ className }: { className?: string }) {
  return <Logo className={className} />;
}
