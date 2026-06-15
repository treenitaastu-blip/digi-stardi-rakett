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
    q: "Mis saab domeenist ja hostingust?",
    a: "Need ei kuulu 400 € sisse, sest kestavad aastast aastasse ja sõltuvad valitud lahendusest. Aitame need valida ja seadistada. Tavaliselt jääb kulu 10–20 € aastas.",
  },
  {
    q: "Kas tekstid on kaasas?",
    a: "Jah. Müügitekstid kuuluvad paketti. Piisab, kui saadate ettevõtte info: nimi, teenused, piirkond ja kontakt. Ülejäänu kirjutame teie eest.",
  },
  {
    q: "Mida 7 päeva jooksul tehakse?",
    a: "Esimesel päeval täidate lühikese ankeedi, 3–4 tööpäevaga valmib esiversioon, seejärel teeme parandused. Täpne graafik sõltub teie tagasiside kiirusest.",
  },
  {
    q: "Kas pean ise pildid andma?",
    a: "Ei. Kasutame valdkonda sobivaid kvaliteetseid fotopangapilte. Soovi korral saab teie enda fotod hiljem lisada.",
  },
  {
    q: "Millal leht Google'isse jõuab?",
    a: "Seadistame Google Search Console'i, metaandmed ja SEO struktuuri. Google indekseerib uue lehe tavaliselt mõne päeva kuni paari nädala jooksul. See on alus, millele edasi ehitada.",
  },
  {
    q: "Kas saan hiljem sisu muuta?",
    a: "Jah. Hilisemad muudatused ja täiendused lepime eraldi kokku.",
  },
  {
    q: "Kellele pakett ei sobi?",
    a: "Pakett on mõeldud üheleheliste tutvustuslehtede jaoks. E-pood, kasutajate sisselogimine, broneerimissüsteem või mitu alamlehte on eraldi, mahukam projekt.",
  },
];

export function FaqSection() {
  return (
    <section id="kkk" className="section-pad bg-secondary/30">
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
                <AccordionTrigger className="text-left text-[0.95rem] font-semibold leading-snug hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Jäi midagi küsida?{" "}
            <a href="#kontakt" className="font-semibold text-brand hover:underline">
              Kirjutage meile →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
