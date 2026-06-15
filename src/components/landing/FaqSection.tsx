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
    q: "Kas domeen ja hosting on hinna sees?",
    a: "Domeen ja hosting ei ole 400€ hinna sees, kuna need sõltuvad valitud lahendusest ja kestavad aastast aastasse. Aitan need vajadusel valida ja seadistada — see on tavaliselt 10–20€ aastas.",
  },
  {
    q: "Kas tekstid kirjutad sina?",
    a: "Jah. Sina annad mulle ettevõtte info — nimi, teenused, piirkond, kontakt. Mina vormin sellest veenva, selge ja kliendile arusaadava teksti. Pole vaja ise copywritingut teha.",
  },
  {
    q: "Mis täpselt 7 päeva sisse mahub?",
    a: "7 tööpäeva tähendab: esimesel päeval saad ankeedi täita, 3–4 päevaga valmib esimene versioon, seejärel toimuvad parandusringid. Aeg sõltub ka sellest, kui kiiresti tagasiside tuleb.",
  },
  {
    q: "Kas mul peavad pildid olemas olema?",
    a: "Ei pea. Saab kasutada kvaliteetseid stock-visuaale, mis sobivad sinu valdkonnaga. Kui soovid oma fotosid, võib neid hiljem lisada.",
  },
  {
    q: "Kas leht ilmub Googles kohe?",
    a: "Seadistatakse Google otsingukonsooli, meta-andmed ja põhiline SEO struktuur. Google indekseerib uue lehe tavaliselt mõne päeva kuni paari nädalaga. See on alus — edaspidi paraneb positsioon aja ja sisuloome kaudu.",
  },
  {
    q: "Kas saan hiljem ise sisu muuta?",
    a: "Jah, hilisemaid muudatusi ja uuendusi saab teha kokkuleppel eraldi.",
  },
  {
    q: "Millele see teenus ei sobi?",
    a: "See pakett on mõeldud ühelehelehistele tutvustuslehtedele. Kui vajad e-poodi, kasutajate sisselogimist, broneerimissüsteemi või mitut alamsaiti, siis on see juba mõnevõrra mahukam projekt.",
  },
];

export function FaqSection() {
  return (
    <section id="kkk" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="KKK" title="Korduma kippuvad küsimused" />
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
