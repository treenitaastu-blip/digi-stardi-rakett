import { useEffect, useState, type RefObject } from "react";
import { ScrollCards } from "./scroll-cards/ScrollCards";

export function DeferredScrollCards({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!isDesktop) return null;

  return <ScrollCards containerRef={containerRef} />;
}
