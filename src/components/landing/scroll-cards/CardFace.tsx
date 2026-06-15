import type { CardData } from "./cards";

/**
 * A self-contained mini website-preview rendered entirely in CSS.
 * Square tile: browser chrome → brand-tinted hero → footer meta row.
 */
export function CardFace({ card }: { card: CardData }) {
  const Icon = card.icon;
  const tint = `oklch(0.62 0.17 ${card.hue})`;
  const tintSoft = `oklch(0.7 0.13 ${card.hue})`;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.1rem] bg-card">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-secondary/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="ml-2 truncate rounded-full bg-card px-2 py-0.5 text-[9px] font-medium text-muted-foreground">
          {card.domain}
        </span>
      </div>

      {/* Hero band */}
      <div
        className="relative flex flex-1 flex-col justify-center px-3.5"
        style={{
          background: `linear-gradient(135deg, ${tint} 0%, ${tintSoft} 100%)`,
        }}
      >
        <div className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-lg bg-white/20 backdrop-blur-sm">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div className="text-[13px] font-bold leading-tight text-white">{card.headline}</div>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-foreground">
            Telli
          </span>
          <span className="rounded-full border border-white/60 px-2.5 py-1 text-[8px] font-medium text-white">
            Loe lisaks
          </span>
        </div>
      </div>

      {/* Footer meta */}
      <div className="flex items-center justify-between px-3.5 py-2.5">
        <div>
          <div className="text-[11px] font-semibold leading-none text-foreground">{card.name}</div>
          <div className="mt-1 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
            {card.category}
          </div>
        </div>
        <span className="h-1.5 w-6 rounded-full" style={{ background: tint }} />
      </div>
    </div>
  );
}
