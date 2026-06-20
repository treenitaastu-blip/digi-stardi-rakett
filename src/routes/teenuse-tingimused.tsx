import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/blog/SiteLayout";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LEGAL_PROVIDER } from "@/lib/legal";
import { SITE, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/teenuse-tingimused")({
  head: () => ({
    meta: [
      { title: "Teenuse tingimused | Lehekoda" },
      {
        name: "description",
        content:
          "Lehekoda kodulehe stardipaketi teenuse tingimused. Hind, tarne, muudatused ja kliendi kohustused.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/teenuse-tingimused") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <LegalDocument title="Teenuse tingimused">
        <p>
          Need tingimused kehtivad Lehekoda kodulehe stardipaketi tellimisel. Teenust osutab{" "}
          <strong>{LEGAL_PROVIDER.name}</strong>.
        </p>

        <h2>Teenuse sisu</h2>
        <p>
          Pakett sisaldab ühe-lehe kodulehe loomist, müügitekstide koostamist, põhilist SEO
          seadistust, kontaktvormi, hostingut ja 6 kuud väiksemaid muudatusi. Täpsem ülevaade on
          avalehel paketi kirjelduses.
        </p>

        <h2>Hind ja makse</h2>
        <p>
          Stardipaketi hind on {SITE.price} € (ühekordne makse). Hind on fikseeritud enne
          alustamist kokkulepitud ulatuses. Lisatööd väljaspool paketti lepitakse eraldi kokku.
        </p>

        <h2>Tarne</h2>
        <p>
          Koduleht valmib tavaliselt {SITE.deliveryDays} tööpäeva jooksul pärast seda, kui oleme
          saanud kliendilt vajaliku info. Täpne ajakava sõltub vastuse kiirusest ja projekti
          ulatusest.
        </p>

        <h2>Kliendi kohustused</h2>
        <p>
          Klient annab õige info ettevõtte, teenuste ja kontaktandmete kohta. Klient vastab
          küsimustele mõistliku aja jooksul, et töö saaks õigeaegselt valmis.
        </p>

        <h2>Muudatused pärast valmimist</h2>
        <p>
          Paketis on 6 kuud tasuta väiksemaid muudatusi (nt teksti, pildi või detaili parandused).
          Suuremad ümbertöötamised või uued funktsioonid on eraldi tellimus.
        </p>

        <h2>Intellektuaalne omand</h2>
        <p>
          Valminud koduleht kuulub kliendile pärast tasumist. {LEGAL_PROVIDER.name} võib projekti
          kasutada portfoolio näitena, kui klient ei ole teisiti kokku leppinud.
        </p>

        <h2>Kontakt</h2>
        <p>
          Küsimuste korral kirjutage{" "}
          <a href={`mailto:${LEGAL_PROVIDER.email}`}>{LEGAL_PROVIDER.email}</a>.
        </p>

        <p>
          <em>Viimati uuendatud: juuni 2026</em>
        </p>
      </LegalDocument>
    </SiteLayout>
  );
}
