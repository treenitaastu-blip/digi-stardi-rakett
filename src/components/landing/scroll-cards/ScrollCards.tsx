import { useEffect, useState, type RefObject } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { cards } from "./cards";
import { CardFace } from "./CardFace";

const CARD = 200; // desktop tile size (px)

/** Fan layout offsets relative to the hero centre point. */
const FAN = [
  { x: -430, y: 38, rotate: -16, scale: 0.84 },
  { x: -256, y: 22, rotate: -9, scale: 0.9 },
  { x: -86, y: 14, rotate: -3, scale: 0.97 },
  { x: 86, y: 14, rotate: 3, scale: 0.97 },
  { x: 256, y: 22, rotate: 9, scale: 0.9 },
  { x: 430, y: 38, rotate: 16, scale: 0.84 },
];

const N = FAN.length;
const MID = (N - 1) / 2;
/** Final "shelf": a gently fanned row, centred, that settles in the section's top stage. */
const SHELF = {
  scale: 0.78,
  gap: 138,
  centerY: 250, // relative to the locked wrapper origin (section top)
};

type Geo = {
  vw: number;
  vh: number;
  lp: number; // lock progress (0..1)
  heroRowY: number;
  ready: boolean;
};

export function ScrollCards({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const [geo, setGeo] = useState<Geo>({ vw: 0, vh: 0, lp: 0.4, heroRowY: 0, ready: false });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mobile = vw < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setGeo({ vw, vh, lp: 0.4, heroRowY: 0, ready: false });
        return;
      }
      const container = containerRef.current;
      const anchor = document.querySelector<HTMLElement>('[data-section="cards-anchor"]');
      const scrollable = document.documentElement.scrollHeight - vh;
      if (!container || !anchor || scrollable <= 0) return;
      const anchorTop = anchor.getBoundingClientRect().top + window.scrollY;
      const lp = Math.min(0.92, Math.max(0.05, anchorTop / scrollable));
      const stage = document.querySelector<HTMLElement>('[data-hero-cards-stage]');
      const stageRect = stage?.getBoundingClientRect();
      const heroRowY = stageRect
        ? stageRect.top + stageRect.height * 0.34
        : Math.min(vh * 0.88, vh - 64);
      setGeo({ vw, vh, lp, heroRowY, ready: true });
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once fonts/layout settle.
    const t = setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [containerRef]);

  if (isMobile || !geo.ready) return null;

  // Locked wrapper: fixed while animating, absolute once cascade is reached.
  return (
    <LockedWrapper scrollYProgress={scrollYProgress} geo={geo}>
      {cards.map((card, i) => (
        <ScrollCard
          key={`${card.id}-${geo.vw}x${Math.round(geo.lp * 100)}`}
          scrollYProgress={scrollYProgress}
          geo={geo}
          index={i}
        >
          <CardFace card={card} />
        </ScrollCard>
      ))}
    </LockedWrapper>
  );
}

function LockedWrapper({
  scrollYProgress,
  geo,
  children,
}: {
  scrollYProgress: MotionValue<number>;
  geo: Geo;
  children: React.ReactNode;
}) {
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setLocked(v >= geo.lp - 0.001));
  }, [scrollYProgress, geo.lp]);

  const scrollable = typeof window !== "undefined" ? document.documentElement.scrollHeight - geo.vh : 0;
  const topPx = geo.lp * scrollable;

  return (
    <div
      aria-hidden
      className="pointer-events-none z-20 hidden lg:block"
      style={
        locked
          ? { position: "absolute", top: topPx, left: 0, right: 0, height: 0 }
          : { position: "fixed", inset: 0 }
      }
    >
      {children}
    </div>
  );
}

function ScrollCard({
  scrollYProgress,
  geo,
  index,
  children,
}: {
  scrollYProgress: MotionValue<number>;
  geo: Geo;
  index: number;
  children: React.ReactNode;
}) {
  const { vw, vh, lp, heroRowY } = geo;
  const slot = FAN[index];

  const p1 = lp * 0.34;
  const p2 = lp * 0.64;

  // Centre points (card centre) for each phase.
  const fanCx = vw / 2 + slot.x;
  const fanCy = heroRowY + slot.y;
  const stackCx = vw / 2;
  const stackCy = vh / 2;
  // Shelf: centred fanned row in the section's top stage.
  const shelfStartCx = vw / 2 - MID * SHELF.gap;
  const endCx = shelfStartCx + index * SHELF.gap;
  const endCy = SHELF.centerY + Math.abs(index - MID) * 6; // slight downward arc at the ends
  const endRotate = (index - MID) * 3.2;
  // Centre cards sit on top of their neighbours.
  const zIndex = 10 + Math.round(N - Math.abs(index - MID));

  // Convert centre points to top-left offsets (card is positioned at 0,0 then translated).
  const x = useTransform(
    scrollYProgress,
    [0, p1, p2, lp],
    [fanCx, stackCx, stackCx, endCx].map((c) => c - CARD / 2),
    { clamp: true },
  );
  const y = useTransform(
    scrollYProgress,
    [0, p1, p2, lp],
    [fanCy, stackCy, endCy, endCy].map((c) => c - CARD / 2),
    { clamp: true },
  );
  const rotate = useTransform(scrollYProgress, [0, p1, lp], [slot.rotate, 0, endRotate], {
    clamp: true,
  });
  const scale = useTransform(scrollYProgress, [0, p1, lp], [slot.scale, 1, SHELF.scale], {
    clamp: true,
  });

  return (
    <motion.div
      className="absolute left-0 top-0 shadow-card rounded-[1.1rem]"
      style={{ x, y, rotate, scale, width: CARD, height: CARD, zIndex }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.07, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}
