/** PCB-style background — traces, pads and chips frame the hero without crowding copy. */
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
      <defs>
        <pattern id="pcb-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.65" fill="rgb(148 163 184 / 0.22)" />
        </pattern>
        <linearGradient id="trace-brand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(37 99 235 / 0)" />
          <stop offset="50%" stopColor="rgb(37 99 235 / 0.55)" />
          <stop offset="100%" stopColor="rgb(37 99 235 / 0)" />
        </linearGradient>
        <radialGradient id="node-pulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(37 99 235 / 0.45)" />
          <stop offset="100%" stopColor="rgb(37 99 235 / 0)" />
        </radialGradient>
        <filter id="trace-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle solder grid */}
      <rect width="1440" height="900" fill="url(#pcb-grid)" opacity="0.85" />

      {/* ── Primary traces (corners + sides, center stays open) ── */}
      <g
        stroke="rgb(148 163 184 / 0.42)"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#trace-soft)"
      >
        {/* Top-left cluster */}
        <path d="M 0 64 H 96 V 144 H 208 V 64 H 320 V 192 H 128 V 272 H 48" />
        <path d="M 96 144 H 176 V 224 H 96" />
        <path d="M 208 64 V 32 H 384" />

        {/* Top-right cluster */}
        <path d="M 1440 56 H 1344 V 136 H 1232 V 56 H 1120 V 184 H 1312 V 264 H 1392" />
        <path d="M 1344 136 H 1264 V 216 H 1344" />
        <path d="M 1232 56 V 28 H 1056" />

        {/* Bottom-left */}
        <path d="M 0 836 H 112 V 756 H 224 V 836 H 336 V 708 H 144 V 628 H 64" />
        <path d="M 112 756 H 192 V 676 H 112" />

        {/* Bottom-right */}
        <path d="M 1440 844 H 1328 V 764 H 1216 V 844 H 1104 V 716 H 1296 V 636 H 1376" />
        <path d="M 1328 764 H 1248 V 684 H 1328" />

        {/* Mid-edge accents */}
        <path d="M 0 420 H 80 V 340 H 160 V 500 H 240" opacity="0.7" />
        <path d="M 1440 400 H 1360 V 320 H 1280 V 480 H 1200" opacity="0.7" />
        <path d="M 560 0 V 72 H 640 V 144 H 720" opacity="0.45" />
        <path d="M 880 900 V 828 H 800 V 756 H 720" opacity="0.45" />
      </g>

      {/* Brand accent traces */}
      <g stroke="url(#trace-brand)" strokeWidth="1.1" strokeLinecap="round" opacity="0.9">
        <path d="M 320 192 H 448 V 120 H 576" />
        <path d="M 1120 184 H 992 V 112 H 864" />
        <path d="M 336 708 H 464 V 780 H 592" />
        <path d="M 1104 716 H 976 V 788 H 848" />
      </g>

      {/* Via pads at junctions */}
      <g fill="rgb(148 163 184 / 0.35)">
        {[
          [96, 144],
          [208, 64],
          [208, 192],
          [1344, 136],
          [1232, 56],
          [112, 756],
          [224, 836],
          [1328, 764],
          [1216, 844],
          [448, 120],
          [992, 112],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" />
        ))}
      </g>

      {/* IC / chip blocks */}
      <g stroke="rgb(148 163 184 / 0.38)" strokeWidth="0.65" fill="rgb(148 163 184 / 0.06)">
        <rect x="52" y="108" width="44" height="28" rx="2" />
        <rect x="1344" y="100" width="44" height="28" rx="2" />
        <rect x="68" y="748" width="44" height="28" rx="2" />
        <rect x="1328" y="740" width="44" height="28" rx="2" />
        {/* Pin legs */}
        {[52, 60, 68, 76, 84, 92].map((x) => (
          <line key={`tl-${x}`} x1={x} y1="136" x2={x} y2="142" />
        ))}
        {[1344, 1352, 1360, 1368, 1376, 1384].map((x) => (
          <line key={`tr-${x}`} x1={x} y1="100" x2={x} y2="94" />
        ))}
      </g>

      {/* Brand nodes — subtle glow anchors */}
      <g>
        {[
          [576, 120],
          [864, 112],
          [592, 780],
          [848, 788],
        ].map(([cx, cy]) => (
          <g key={`node-${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="14" fill="url(#node-pulse)" />
            <circle cx={cx} cy={cy} r="3.5" fill="rgb(37 99 235 / 0.7)" />
            <circle cx={cx} cy={cy} r="1.4" fill="rgb(255 255 255 / 0.85)" />
          </g>
        ))}
      </g>

      {/* Mobile-friendly edge traces (visible when side clusters crop) */}
      <g
        className="sm:hidden"
        stroke="rgb(148 163 184 / 0.32)"
        strokeWidth="0.7"
        strokeLinecap="round"
      >
        <path d="M 0 180 H 56 V 260 H 0" />
        <path d="M 1440 180 H 1384 V 260 H 1440" />
        <path d="M 0 720 H 56 V 640 H 0" />
        <path d="M 1440 720 H 1384 V 640 H 1440" />
      </g>
    </svg>
  );
}
