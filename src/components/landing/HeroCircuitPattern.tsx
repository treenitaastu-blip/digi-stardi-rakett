/** Decorative PCB-style traces for the hero background. */
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
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Top-left cluster */}
        <path d="M 48 96 H 168 V 168 H 288 V 96 H 392" />
        <path d="M 168 168 V 248 H 96" />
        <path d="M 288 96 V 52 H 360" />

        {/* Top-right cluster */}
        <path d="M 1392 72 H 1248 V 144 H 1104 V 72 H 1008" />
        <path d="M 1248 144 V 220 H 1320" />
        <path d="M 1104 72 V 28 H 1032" />

        {/* Mid-left accent */}
        <path d="M 0 420 H 120 V 340 H 240 V 460 H 360" />
        <path d="M 120 340 H 200" />

        {/* Mid-right accent */}
        <path d="M 1440 380 H 1320 V 300 H 1200 V 420 H 1080" />
        <path d="M 1320 300 H 1400" />

        {/* Lower fan-stage area */}
        <path d="M 320 720 H 520 V 640 H 720 V 760 H 920" />
        <path d="M 520 640 V 580 H 440" />
        <path d="M 720 760 V 820 H 800" />
        <path d="M 920 720 H 1120 V 800 H 1320" />
        <path d="M 1120 800 V 860 H 1040" />

        {/* Subtle IC outline */}
        <rect x="1088" y="520" width="72" height="48" rx="4" strokeWidth="0.75" />
        <path d="M 1088 536 H 1064 M 1088 552 H 1064 M 1160 536 H 1184 M 1160 552 H 1184" strokeWidth="0.75" />
      </g>

      {/* Via pads */}
      <g fill="currentColor">
        <circle cx="168" cy="168" r="2.5" />
        <circle cx="288" cy="96" r="2.5" />
        <circle cx="392" cy="96" r="2" />
        <circle cx="96" cy="248" r="2" />
        <circle cx="1248" cy="144" r="2.5" />
        <circle cx="1104" cy="72" r="2.5" />
        <circle cx="1008" cy="72" r="2" />
        <circle cx="120" cy="420" r="2" />
        <circle cx="240" cy="340" r="2.5" />
        <circle cx="360" cy="460" r="2" />
        <circle cx="1320" cy="300" r="2.5" />
        <circle cx="1080" cy="420" r="2" />
        <circle cx="520" cy="640" r="2.5" />
        <circle cx="720" cy="760" r="2.5" />
        <circle cx="920" cy="720" r="2" />
        <circle cx="1120" cy="800" r="2.5" />
      </g>
    </svg>
  );
}
