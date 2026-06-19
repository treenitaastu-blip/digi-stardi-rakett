/** Ultra-light technical line texture for the hero background. */
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
        <pattern id="hero-circuit-tile" width="96" height="96" patternUnits="userSpaceOnUse">
          <path
            d="M 10 42 H 54"
            stroke="rgb(148 163 184 / 0.55)"
            strokeWidth="0.22"
            strokeLinecap="round"
          />
          <path
            d="M 42 14 V 58"
            stroke="rgb(148 163 184 / 0.45)"
            strokeWidth="0.22"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#hero-circuit-tile)" />
    </svg>
  );
}
