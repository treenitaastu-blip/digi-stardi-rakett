import { useRef } from "react";
import {
  MessageCircle,
  LayoutTemplate,
  FileText,
  Image,
  Mail,
  Search,
  Server,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ContactLink } from "./ContactLink";
import { cn } from "@/lib/utils";
import {
  carouselDotBaseClass,
  carouselDotClass,
  carouselTrackClass,
  useCarouselIndex,
} from "@/lib/useCarouselIndex";

const features = [
  {
    icon: MessageCircle,
    title: "Nõustamine enne alustamist",
    body: "Räägime läbi, mida su ettevõte pakub, kellele leht mõeldud on ja mis info peab seal kindlasti olema.",
  },
  {
    icon: LayoutTemplate,
    title: "Valmis koduleht",
    body: "Teeme sulle korraliku ühelehelise kodulehe, kus teenused, kontakt ja oluline info on selgelt olemas.",
  },
  {
    icon: FileText,
    title: "Tekstid sinu eest",
    body: "Sina annad põhinfo, meie kirjutame selle põhjal selged ja usaldust tekitavad kodulehe tekstid.",
  },
  {
    icon: Image,
    title: "Pildid ja visuaalid",
    body: "Lisame sinu pildid või aitame valida sobivad visuaalid, et leht ei jääks tühi ega juhuslik.",
  },
  {
    icon: Mail,
    title: "Kontaktvorm e-postiga",
    body: "Seome päringuvormi sinu ettevõtte e-postiga, et kliendi sõnum jõuaks otse sinuni.",
  },
  {
    icon: Search,
    title: "Google'i seadistus",
    body: "Seadistame Google Search Console'i ja vajadusel Google Mapsi, et ettevõttel oleks parem alus Google'is nähtavaks saada.",
  },
  {
    icon: Server,
    title: "Tasuta hosting",
    body: "Kodulehe majutus on hinna sees. Sa ei pea maksma eraldi igakuist hostingutasu.",
  },
  {
    icon: RefreshCw,
    title: "6 kuud tasuta muudatusi",
    body: "Kui tahad hiljem tekste, pilte või väiksemaid detaile muuta, teeme need 6 kuu jooksul tasuta.",
  },
];

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const Icon = feature.icon;
  return (
    <article className="group flex h-full snap-center flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-soft-lg">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-bold leading-snug">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
    </article>
  );
}

export function SolutionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, updateActiveIndex, scrollToIndex } = useCarouselIndex(scrollRef, {
    itemCount: features.length,
    cardSelector: "[data-feature-card]",
    gap: 12,
  });

  return (
    <section id="mida-saad" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pakett"
          title="Mis 399€ paketis sisaldub?"
          subtitle="Kõik vajalik, et sul oleks korralik koduleht valmis ja kasutuses - ilma kuutasuta."
        />

        <Reveal className="mt-14">
          {/* Desktop — grid */}
          <RevealGroup className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <RevealItem key={f.title}>
                <FeatureCard feature={f} />
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Mobile — horizontal carousel */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              onScroll={updateActiveIndex}
              className={cn(carouselTrackClass, "gap-3")}
              aria-label="Pakett karussell"
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  data-feature-card
                  className="w-[min(85vw,320px)] shrink-0 snap-center"
                >
                  <FeatureCard feature={f} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden>
              {features.map((f, i) => (
                <button
                  key={f.title}
                  type="button"
                  aria-label={`Kuva ${f.title}`}
                  onClick={() => scrollToIndex(i)}
                  className={cn(carouselDotBaseClass, carouselDotClass(i === activeIndex))}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand/25 bg-card p-6 shadow-soft sm:flex-row">
            <p className="text-center text-sm font-medium leading-relaxed sm:text-left">
              Koduleht, tekstid, pildid, kontaktvorm, Google'i seadistus, tasuta hosting ja 6 kuud
              muudatusi - kõik hinnas.
            </p>
            <Button asChild variant="hero" className="shrink-0 rounded-xl">
              <ContactLink>
                Küsi pakkumist <ArrowRight className="h-4 w-4" />
              </ContactLink>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
