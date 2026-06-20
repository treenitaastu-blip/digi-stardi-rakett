import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/blog/SiteLayout";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { LEGAL_PROVIDER } from "@/lib/legal";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/privaatsuspoliitika")({
  head: () => ({
    meta: [
      { title: "Privaatsuspoliitika | Lehekoda" },
      {
        name: "description",
        content:
          "Lehekoda privaatsuspoliitika. Kuidas Blimey OÜ kogub ja töötleb isikuandmeid kontaktivormi kaudu.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privaatsuspoliitika") }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <LegalDocument title="Privaatsuspoliitika">
        <p>
          Käesolev privaatsuspoliitika kehtib Lehekoda veebilehe ({absoluteUrl("/")}) kasutamisel
          ja päringute saatmisel kontaktivormi kaudu.
        </p>

        <h2>Vastutav töötleja</h2>
        <p>
          Isikuandmeid töötleb <strong>{LEGAL_PROVIDER.name}</strong> ({LEGAL_PROVIDER.email}).
        </p>

        <h2>Milliseid andmeid kogume</h2>
        <p>Kontaktivormi kaudu võime koguda:</p>
        <ul>
          <li>nimi ja ettevõtte nimi</li>
          <li>e-posti aadress ja telefoninumber</li>
          <li>teie sõnumis esitatud info teenuse kohta</li>
        </ul>

        <h2>Miks andmeid kogume</h2>
        <p>
          Andmeid kasutame päringule vastamiseks, pakkumise koostamiseks ja teenuse osutamiseks.
          Me ei müü ega rendi teie andmeid kolmandatele osapooltele.
        </p>

        <h2>Andmete säilitamine</h2>
        <p>
          Säilitame andmeid ainult nii kaua, kui see on vajalik päringu menetlemiseks ja lepingulise
          suhte jaoks, või seadusest tulenevalt.
        </p>

        <h2>Teie õigused</h2>
        <p>
          Teil on õigus tutvuda oma andmetega, nõuda parandamist või kustutamist, piirata töötlust
          ja esitada kaebus Andmekaitse Inspektsioonile. Päringute jaoks kirjutage{" "}
          <a href={`mailto:${LEGAL_PROVIDER.email}`}>{LEGAL_PROVIDER.email}</a>.
        </p>

        <h2>Küpsised</h2>
        <p>
          Veebileht võib kasutada tehniliselt vajalikke küpsiseid saidi toimimiseks. Me ei kasuta
          reklaami- ega jälgimisküpsiseid.
        </p>

        <p>
          <em>Viimati uuendatud: juuni 2026</em>
        </p>
      </LegalDocument>
    </SiteLayout>
  );
}
