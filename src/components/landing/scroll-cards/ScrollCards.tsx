import { useEffect, useRef, useState, type RefObject } from "react";
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
  centerY: 250,
};

type Geo = {
  vw: number;
  vh: number;
  lp: number;
  heroRowY: number;
  ready: boolean;
};

export function ScrollCards({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const [geo, setGeo] = useState<Geo>({ vw: 0, vh: 0, lp: 0.4, heroRowY: 0, ready: false });
  const [isMobile, setIsMobile] = useState(false);
  const fanRowYRef = useRef(0);
  const lockScrollYRef = useRef<number | null>(null);

  const { scrollYProgress, scrollY } = useScroll({
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
        fanRowYRef.current = 0;
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
      if (!stageRect || stageRect.height < 80) return;

      // Viewport Y captured near page top — stable reference for fixed positioning.
      const viewportFanRow = stageRect.top + stageRect.height * 0.34;
      if (fanRowYRef.current === 0 || window.scrollY < 50) {
        fanRowYRef.current = viewportFanRow;
      }

      const heroRowY = fanRowYRef.current;
      setGeo((prev) => {
        if (
          prev.ready &&
          prev.vw === vw &&
          prev.vh === vh &&
          Math.abs(prev.lp - lp) < 0.002 &&
          Math.abs(prev.heroRowY - heroRowY) < 1
        ) {
          return prev;
        }
        return { vw, vh, lp, heroRowY, ready: true };
      });
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const t1 = setTimeout(measure, 400);
    const t2 = setTimeout(measure, 1200);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [containerRef]);

  useEffect(() => {
    const syncLock = (p: number) => {
      if (p >= geo.lp - 0.001) {
        if (lockScrollYRef.current === null) {
          lockScrollYRef.current = window.scrollY;
        }
      } else {
        lockScrollYRef.current = null;
      }
    };
    syncLock(scrollYProgress.get());
    return scrollYProgress.on("change", syncLock);
  }, [scrollYProgress, geo.lp]);

  if (isMobile || !geo.ready || geo.heroRowY <= 0) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 hidden lg:block">
      {cards.map((card, i) => (
        <ScrollCard
          key={card.id}
          scrollYProgress={scrollYProgress}
          scrollY={scrollY}
          lockScrollYRef={lockScrollYRef}
          geo={geo}
          index={i}
        >
          <CardFace card={card} />
        </ScrollCard>
      ))}
    </div>
  );
}

function ScrollCard({
  scrollYProgress,
  scrollY,
  lockScrollYRef,
  geo,
  index,
  children,
}: {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
  lockScrollYRef: RefObject<number | null>;
  geo: Geo;
  index: number;
  children: React.ReactNode;
}) {
  const { vw, vh, lp, heroRowY } = geo;
  const slot = FAN[index];

  const p1 = lp * 0.34;
  const p2 = lp * 0.64;

  const fanCx = vw / 2 + slot.x;
  const fanCy = heroRowY + slot.y;
  const stackCx = vw / 2;
  const stackCy = vh / 2;
  const shelfStartCx = vw / 2 - MID * SHELF.gap;
  const endCx = shelfStartCx + index * SHELF.gap;
  const endCy = SHELF.centerY + Math.abs(index - MID) * 6;
  const endRotate = (index - MID) * 3.2;
  const zIndex = 10 + Math.round(N - Math.abs(index - MID));

  const baseX = useTransform(
    scrollYProgress,
    [0, p1, p2, lp],
    [fanCx, stackCx, stackCx, endCx].map((c) => c - CARD / 2),
    { clamp: true },
  );
  const baseY = useTransform(
    scrollYProgress,
    [0, p1, p2, lp],
    [fanCy, stackCy, endCy, endCy].map((c) => c - CARD / 2),
    { clamp: true },
  );

  // After the shelf phase, scroll cards with the page instead of toggling fixed/absolute.
  const x = baseX;
  const y = useTransform([baseY, scrollY, scrollYProgress], ([by, sy, p]) => {
    const lockY = lockScrollYRef.current;
    if (p >= lp && lockY !== null) {
      return by - (sy - lockY);
    }
    return by;
  });

  const rotate = useTransform(scrollYProgress, [0, p1, lp], [slot.rotate, 0, endRotate], {
    clamp: true,
  });
  const scale = useTransform(scrollYProgress, [0, p1, lp], [slot.scale, 1, SHELF.scale], {
    clamp: true,
  });

  return (
    <motion.div
      className="carousel-gpu-card absolute left-0 top-0 rounded-[1.1rem] shadow-card"
      style={{ x, y, rotate, scale, width: CARD, height: CARD, zIndex }}
      initial={false}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
