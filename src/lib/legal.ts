import { SITE } from "./site";

export const LEGAL_PROVIDER = {
  name: "Blimey OÜ",
  email: SITE.email,
} as const;

export const legalLinks = [
  { href: "/privaatsuspoliitika", label: "Privaatsuspoliitika" },
  { href: "/teenuse-tingimused", label: "Teenuse tingimused" },
] as const;
