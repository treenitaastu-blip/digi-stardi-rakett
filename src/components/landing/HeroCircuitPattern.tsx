const TRACE = "rgb(37 99 235 / 0.22)";
const PAD = "rgb(37 99 235 / 0.32)";

/** Decorative PCB-style traces for the hero background. Tiles on all viewports. */
export function HeroCircuitPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="hero-circuit-tile" width="52" height="52" patternUnits="userSpaceOnUse">
          <path
            d="M 4 16 H 20 V 8 H 36 V 24 H 48 M 20 8 V 4 H 28 M 36 24 V 32 H 44"
            stroke={TRACE}
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="30"
            y="14"
            width="9"
            height="6"
            rx="1"
            stroke={TRACE}
            strokeWidth="0.45"
          />
          <circle cx="20" cy="16" r="1.1" fill={PAD} />
          <circle cx="36" cy="8" r="1" fill={PAD} />
          <circle cx="36" cy="24" r="1" fill={PAD} />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#hero-circuit-tile)" />
    </svg>
  );
}
