import { useCallback, useRef, useState, type RefObject } from "react";

type Options = {
  itemCount: number;
  cardSelector: string;
  gap?: number;
};

/** rAF-throttled scroll index — updates React state only when the index changes. */
export function useCarouselIndex(
  scrollRef: RefObject<HTMLDivElement | null>,
  { itemCount, cardSelector, gap = 12 }: Options,
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(0);
  const rafRef = useRef<number>();

  const updateActiveIndex = useCallback(() => {
    if (rafRef.current != null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = undefined;
      const el = scrollRef.current;
      if (!el) return;

      const card = el.querySelector<HTMLElement>(cardSelector);
      if (!card) return;

      const step = card.offsetWidth + gap;
      if (step <= 0) return;

      const index = Math.min(Math.max(Math.round(el.scrollLeft / step), 0), itemCount - 1);
      if (index === indexRef.current) return;

      indexRef.current = index;
      setActiveIndex(index);
    });
  }, [scrollRef, cardSelector, gap, itemCount]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;

      const card = el.querySelector<HTMLElement>(cardSelector);
      if (!card) return;

      el.scrollTo({ left: index * (card.offsetWidth + gap), behavior: "smooth" });
    },
    [scrollRef, cardSelector, gap],
  );

  return { activeIndex, updateActiveIndex, scrollToIndex };
}

export const carouselDotClass = (active: boolean) =>
  active ? "scale-125 bg-brand" : "bg-border";

export const carouselDotBaseClass =
  "h-1.5 w-1.5 shrink-0 rounded-full transition-[transform,background-color] duration-300";

export const carouselTrackClass =
  "-mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 pb-1 [scrollbar-width:none] [contain:layout] [overscroll-behavior-x:contain] [&::-webkit-scrollbar]:hidden";
