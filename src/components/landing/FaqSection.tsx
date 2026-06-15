import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Mis domeeni ja hostinguga?",
    a: "Need ei kuulu 400 € paketihinda, kuna kestavad aastast aastasse ja sõltuvad valitud lahendusest. Vajadusel aitame valida ja seadistada — tavaliselt 10–20 € aastas.",
  },
  {
    q: "Kas tekstid tulevad kaasa?",
    a: "Jah. Copywriting on paketi osa. Piisab ettevõtte infost — nimi, teenused, piirkond, kontakt. Tekstid vormitakse selgeks ja veenvaks sisuks.",
  },
  {
    q: "Mida 7 päevaga täpselt tehakse?",
    a: "Esimesel päeval täidetakse brief, 3–4 päevaga valmib esimene versioon, seejärel toimuvad parandusringid. Täpne graafik sõltub tagasiside kiirusest.",
  },
  {
    q: "Kas peab oma fotosid pakkuma?",
    a: "Ei. Kasutatakse kvaliteetseid stock-visuaale, mis sobivad valdkonnaga. Oma fotod saab hiljem lisada.",
  },
  {
    q: "Millal leht Google'is ilmub?",
    a: "Seadistatakse Google Search Console, metaandmed ja SEO struktuur. Indekseerimine võtab tavaliselt mõne päeva kuni paar nädalat — see on alus, millele saab edasi ehitada.",
  },
  {
    q: "Kas saab hiljem sisu muuta?",
    a: "Jah. Hilisemad muudatused ja uuendused tehakse kokkuleppel eraldi.",
  },
  {
    q: "Kellele see ei sobi?",
    a: "Pakett on mõeldud ühe-lehelistele tutvustuslehtedele. E-pood, sisselogimine, broneerimissüsteem või mitu alamsaiti — need on juba eraldi, mahukamad projektid.",
  },
];

export function FaqSection() {
  return (
    <section id="kkk" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="KKK" title="Vastused enne tellimist" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-[0.92rem] font-semibold leading-snug hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
