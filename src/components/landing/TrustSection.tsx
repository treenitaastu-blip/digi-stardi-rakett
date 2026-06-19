import { useCallback, useRef, useState } from "react";
import { Tag, PenLine, Clock, LayoutGrid, RefreshCw, CircleCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { cn } from "@/lib/utils";

const trust = [
  {
    icon: Tag,
    title: "Hind on kohe teada",
    body: "399€. Mitte “alates”, mitte “oleneb mahust”. Tead kohe, millega arvestada.",
  },
  {
    icon: PenLine,
    title: "Tekstid ei jää sinu kaela",
    body: "Räägid meile, mida pakud. Meie paneme selle sõnadesse nii, et klient saab aru ja tahab ühendust võtta.",
  },
  {
    icon: Clock,
    title: "Leht ei jää venima",
    body: "7 tööpäevaga on sul olemas korralik koduleht, mida saad kohe jagada, reklaamida ja klientidele näidata.",
  },
  {
    icon: LayoutGrid,
    title: "Kõik oluline pannakse paika",
    body: "Teenused, kontakt, pildid, Google’i seadistus ja päringuvorm - kõik saab ühte selgesse kohta.",
  },
  {
    icon: RefreshCw,
    title: "6 kuud saad rahulikult muuta",
    body: "Kui tahad hiljem teksti, pilti või mõnda detaili muuta, ei tule iga väikese asja eest uut arvet.",
  },
  {
    icon: CircleCheck,
    title: "Ei mingit üle keerutamist",
    body: "Sul pole vaja suurt ja kallist süsteemi. Sul on vaja lehte, mis jätab hea mulje ja teeb ühenduse võtmise lihtsaks.",
  },
];

function TrustCard({ item }: { item: (typeof trust)[number] }) {
  const Icon = item.icon;
  return (
    <article className="group flex h-full snap-center flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-base font-bold leading-snug">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
    </article>
  );
}

export function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-trust-card]");
    if (!card) return;
    const gap = 12;
    const step = card.offsetWidth + gap;
    const index = Math.round(el.scrollLeft / step);
    setActiveIndex(Math.min(Math.max(index, 0), trust.length - 1));
  }, []);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-trust-card]");
    if (!card) return;
    const gap = 12;
    el.scrollTo({ left: index * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="usaldus" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Miks meie"
          title="Miks see on lihtsam kui tavaline kodulehe tellimine"
          subtitle="Saad korraliku tulemuse ilma suure agentuuri hinna, pikkade koosolekute ja segase protsessita."
        />

        <Reveal className="mt-14">
          {/* Mobile — horizontal carousel */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              onScroll={updateActiveIndex}
              className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Miks meie karussell"
            >
              {trust.map((t) => (
                <div
                  key={t.title}
                  data-trust-card
                  className="w-[min(85vw,320px)] shrink-0 snap-center"
                >
                  <TrustCard item={t} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden>
              {trust.map((t, i) => (
                <button
                  key={t.title}
                  type="button"
                  aria-label={`Kuva ${t.title}`}
                  onClick={() => scrollToIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeIndex ? "w-5 bg-brand" : "w-1.5 bg-border",
                  )}
                />
              ))}
            </div>
          </div>

          {/* Desktop — grid */}
          <RevealGroup className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {trust.map((t) => (
              <RevealItem key={t.title}>
                <TrustCard item={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
