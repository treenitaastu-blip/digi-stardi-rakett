import { lazy, Suspense, useEffect, useState, type RefObject } from "react";
import { useIdleMount } from "@/lib/useIdleMount";

const ScrollCards = lazy(() =>
  import("./scroll-cards/ScrollCards").then((m) => ({ default: m.ScrollCards })),
);

export function DeferredScrollCards({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const idleReady = useIdleMount(true, 3000);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!idleReady || !isDesktop) return null;

  return (
    <Suspense fallback={null}>
      <ScrollCards containerRef={containerRef} />
    </Suspense>
  );
}
