/**
 * Web3Forms access key. The key is safe to expose client-side.
 * Override locally via VITE_WEB3FORMS_KEY.
 */
export const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ??
  "a0027edf-736b-429b-a254-3ff1d1cd3d38";

export const RECIPIENT = "henri@blimeyofficial.com";

export type LeadInput = {
  nimi: string;
  ettevote?: string;
  email: string;
  telefon?: string;
  huvitab?: string[];
  sonum?: string;
  /** Where the lead came from, e.g. "Hero küsimustik" or "Kontaktivorm". */
  allikas?: string;
};

/**
 * Sends a lead to Web3Forms. Resolves on success, throws on failure so the
 * caller can surface an error state.
 */
export async function submitLead(input: LeadInput): Promise<void> {
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: "Uus päring — Lehekoda",
    from_name: "Lehekoda",
    to: RECIPIENT,
    nimi: input.nimi,
    ettevote: input.ettevote || "—",
    email: input.email,
    telefon: input.telefon || "—",
    huvitab: input.huvitab && input.huvitab.length ? input.huvitab.join(", ") : "Pole valitud",
    sonum: input.sonum || "—",
    allikas: input.allikas || "—",
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message || "Saatmine ebaõnnestus");
  }
}
