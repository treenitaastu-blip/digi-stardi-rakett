/** Premium side circuit accent — visible on all viewports, center stays open. */
export function HeroCircuitPattern({ className }: { className?: string }) {
  const stroke = "rgb(148 163 184 / 0.46)";
  const strokeMid = "rgb(148 163 184 / 0.32)";
  const strokeFine = "rgb(148 163 184 / 0.26)";

  const mx = (x: number) => 1440 - x;
  const my = (y: number) => 900 - y;

  const junctions: [number, number][] = [
    [92, 44],
    [92, 120],
    [184, 120],
    [184, 72],
    [136, 80],
    [60, 152],
    [128, 152],
    [88, 28],
    [48, 108],
    [96, 108],
    [56, 376],
    [32, 412],
    [44, 536],
    [20, 568],
    [48, 656],
    [348, 24],
    [392, 24],
    [308, 72],
    [24, 450],
    [40, 316],
    [16, 352],
    [52, 352],
    [36, 468],
    [12, 496],
    [48, 496],
    [32, 608],
    [8, 636],
    [44, 636],
    [36, 748],
    [16, 772],
    [56, 772],
    [64, 340],
    [100, 380],
    [72, 532],
    [104, 532],
    [76, 668],
    [108, 668],
    [140, 300],
    [140, 420],
    [140, 540],
    [140, 660],
    [120, 400],
    [240, 400],
    [120, 520],
    [228, 520],
    [120, 640],
    [236, 640],
    [320, 280],
    [320, 620],
  ];

  const nodes = Array.from(
    junctions.reduce((map, [x, y]) => {
      for (const [cx, cy] of [
        [x, y],
        [mx(x), y],
        [x, my(y)],
        [mx(x), my(y)],
      ] as [number, number][]) {
        map.set(`${cx},${cy}`, [cx, cy]);
      }
      return map;
    }, new Map<string, [number, number]>()),
  ).map(([, pt]) => pt);

  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="pcb-dots" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="18" cy="18" r="0.5" fill="rgb(148 163 184 / 0.2)" />
        </pattern>

        <clipPath id="side-safe">
          <rect x="0" y="0" width="420" height="900" />
          <rect x="1020" y="0" width="420" height="900" />
        </clipPath>
      </defs>

      <rect width="1440" height="900" fill="url(#pcb-dots)" clipPath="url(#side-safe)" />

      <g clipPath="url(#side-safe)" strokeLinecap="round" strokeLinejoin="round">
        {/* Vertical spine — left & right */}
        <g stroke={strokeMid} strokeWidth="0.5" opacity="0.9">
          <path d="M 24 120 V 780" />
          <path d={`M ${mx(24)} 120 V 780`} />
        </g>

        {/* Corners */}
        <g stroke={stroke} strokeWidth="0.52">
          <path d="M 0 44 H 92 V 120 H 184 V 72 H 292" />
          <path d="M 0 88 H 60 V 152 H 128" />
          <path d="M 92 44 V 80 H 136" />
          <path d="M 184 120 V 164 H 144" opacity="0.8" />
          <path d="M 40 0 V 28 H 88" />
          <path d={`M 1440 44 H ${mx(92)} V 120 H ${mx(184)} V 72 H ${mx(292)}`} />
          <path d={`M 1440 88 H ${mx(60)} V 152 H ${mx(128)}`} />
          <path d={`M ${mx(92)} 44 V 80 H ${mx(136)}`} />
          <path d={`M ${mx(184)} 120 V 164 H ${mx(144)}`} opacity="0.8" />
          <path d={`M ${mx(40)} 0 V 28 H ${mx(88)}`} />
          <path d={`M 0 ${my(44)} H 92 V ${my(120)} H 184 V ${my(72)} H 292`} />
          <path d={`M 0 ${my(88)} H 60 V ${my(152)} H 128`} />
          <path d={`M 92 ${my(44)} V ${my(80)} H 136`} />
          <path d={`M 184 ${my(120)} V ${my(164)} H 144`} opacity="0.8" />
          <path d={`M 40 900 V ${my(28)} H 88`} />
          <path d={`M 1440 ${my(44)} H ${mx(92)} V ${my(120)} H ${mx(184)} V ${my(72)} H ${mx(292)}`} />
          <path d={`M 1440 ${my(88)} H ${mx(60)} V ${my(152)} H ${mx(128)}`} />
          <path d={`M ${mx(92)} ${my(44)} V ${my(80)} H ${mx(136)}`} />
          <path d={`M ${mx(184)} ${my(120)} V ${my(164)} H ${mx(144)}`} opacity="0.8" />
          <path d={`M ${mx(40)} 900 V ${my(28)} H ${mx(88)}`} />
        </g>

        <g stroke={strokeMid} strokeWidth="0.42">
          <path d="M 0 68 H 48 V 108 H 96" />
          <path d="M 128 152 V 188 H 88" opacity="0.75" />
          <path d="M 292 72 H 340" opacity="0.55" />
          <path d={`M 1440 68 H ${mx(48)} V 108 H ${mx(96)}`} />
          <path d={`M ${mx(128)} 152 V 188 H ${mx(88)}`} opacity="0.75" />
          <path d={`M ${mx(292)} 72 H ${mx(340)}`} opacity="0.55" />
          <path d={`M 0 ${my(68)} H 48 V ${my(108)} H 96`} />
          <path d={`M 128 ${my(152)} V ${my(188)} H 88`} opacity="0.75" />
          <path d={`M 292 ${my(72)} H 340`} opacity="0.55" />
          <path d={`M 1440 ${my(68)} H ${mx(48)} V ${my(108)} H ${mx(96)}`} />
          <path d={`M ${mx(128)} ${my(152)} V ${my(188)} H ${mx(88)}`} opacity="0.75" />
          <path d={`M ${mx(292)} ${my(72)} H ${mx(340)}`} opacity="0.55" />
        </g>

        {/* Left side rails */}
        <g stroke={strokeFine} strokeWidth="0.42">
          <path d="M 0 200 H 32 V 232 H 12 V 264 H 44" />
          <path d="M 0 280 H 40 V 316 H 16 V 352 H 52" />
          <path d="M 0 340 H 56 V 376 H 32 V 412 H 72" />
          <path d="M 0 440 H 36 V 468 H 12 V 496 H 48" />
          <path d="M 0 500 H 44 V 536 H 20 V 568 H 60" />
          <path d="M 0 580 H 32 V 608 H 8 V 636 H 44" />
          <path d="M 0 620 H 48 V 656" />
          <path d="M 0 720 H 36 V 748 H 16 V 772 H 56" />
          <path d="M 24 450 H 68" />
          <path d="M 88 260 V 300 H 64 V 340 H 100" />
          <path d="M 88 380 V 420 H 72 V 452 H 104" />
          <path d="M 88 500 V 540 H 76 V 572 H 108" />
          <path d="M 88 620 V 660 H 80 V 688 H 112" />
          <path d="M 140 300 H 240" opacity="0.7" />
          <path d="M 140 420 H 228" opacity="0.65" />
          <path d="M 140 540 H 236" opacity="0.6" />
          <path d="M 140 660 H 232" opacity="0.55" />
          <path d="M 320 240 V 280" opacity="0.5" />
          <path d="M 320 560 V 600" opacity="0.5" />
        </g>

        {/* Right side rails */}
        <g stroke={strokeFine} strokeWidth="0.42">
          <path d={`M 1440 200 H ${mx(32)} V 232 H ${mx(12)} V 264 H ${mx(44)}`} />
          <path d={`M 1440 280 H ${mx(40)} V 316 H ${mx(16)} V 352 H ${mx(52)}`} />
          <path d={`M 1440 340 H ${mx(56)} V 376 H ${mx(32)} V 412 H ${mx(72)}`} />
          <path d={`M 1440 440 H ${mx(36)} V 468 H ${mx(12)} V 496 H ${mx(48)}`} />
          <path d={`M 1440 500 H ${mx(44)} V 536 H ${mx(20)} V 568 H ${mx(60)}`} />
          <path d={`M 1440 580 H ${mx(32)} V 608 H ${mx(8)} V 636 H ${mx(44)}`} />
          <path d={`M 1440 620 H ${mx(48)} V 656`} />
          <path d={`M 1440 720 H ${mx(36)} V 748 H ${mx(16)} V 772 H ${mx(56)}`} />
          <path d={`M ${mx(24)} 450 H ${mx(68)}`} />
          <path d={`M ${mx(88)} 260 V 300 H ${mx(64)} V 340 H ${mx(100)}`} />
          <path d={`M ${mx(88)} 380 V 420 H ${mx(72)} V 452 H ${mx(104)}`} />
          <path d={`M ${mx(88)} 500 V 540 H ${mx(76)} V 572 H ${mx(108)}`} />
          <path d={`M ${mx(88)} 620 V 660 H ${mx(80)} V 688 H ${mx(112)}`} />
          <path d={`M ${mx(140)} 300 H ${mx(240)}`} opacity="0.7" />
          <path d={`M ${mx(140)} 420 H ${mx(228)}`} opacity="0.65" />
          <path d={`M ${mx(140)} 540 H ${mx(236)}`} opacity="0.6" />
          <path d={`M ${mx(140)} 660 H ${mx(232)}`} opacity="0.55" />
          <path d={`M ${mx(320)} 240 V 280`} opacity="0.5" />
          <path d={`M ${mx(320)} 560 V 600`} opacity="0.5" />
        </g>

        {/* Top caps */}
        <g stroke={strokeFine} strokeWidth="0.38" opacity="0.85">
          <path d="M 348 0 V 24 H 392" />
          <path d={`M ${mx(348)} 0 V 24 H ${mx(392)}`} />
        </g>
      </g>

      <g clipPath="url(#side-safe)">
        {nodes.map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="2.8" stroke={strokeMid} strokeWidth="0.4" fill="none" />
            <circle cx={cx} cy={cy} r="0.9" fill="rgb(148 163 184 / 0.5)" />
          </g>
        ))}
      </g>
    </svg>
  );
}
