/** Sparse PCB-style traces — corners only, stays behind hero content. */
export function HeroCircuitPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="rgb(148 163 184 / 0.55)" strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 0 88 H 140 V 168 H 260 V 88 H 360" />
        <path d="M 140 168 V 248 H 64" />

        <path d="M 1440 72 H 1300 V 152 H 1180 V 72 H 1080" />
        <path d="M 1300 152 V 232 H 1376" />

        <path d="M 0 520 H 100 V 440 H 220 V 560 H 340" />
        <path d="M 1440 500 H 1340 V 420 H 1220 V 540 H 1100" />

        <path d="M 280 900 H 420 V 820 H 540 V 900 H 640" />
        <path d="M 1160 900 H 1020 V 820 H 900 V 900 H 800" />
      </g>
    </svg>
  );
}
