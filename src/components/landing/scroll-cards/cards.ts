import {
  ShoppingCart,
  HeartPulse,
  AppWindow,
  HardHat,
  ShoppingBag,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

export type CardData = {
  id: string;
  name: string;
  domain: string;
  category: string;
  headline: string;
  icon: LucideIcon;
  /** Hue used for the per-card gradient tint (oklch hue angle). */
  hue: number;
};

/**
 * Six branded "website preview" cards. The first four mirror the real
 * portfolio projects; the last two represent common project types.
 * Rendered as mini website mockups (no external image assets needed).
 */
export const cards: CardData[] = [
  {
    id: "carrypeace",
    name: "CarryPeace.com",
    domain: "carrypeace.com",
    category: "E-pood",
    headline: "Osta rahuga",
    icon: ShoppingCart,
    hue: 262,
  },
  {
    id: "treenitaastu",
    name: "Treenitaastu.ee",
    domain: "treenitaastu.ee",
    category: "Terviseteenus",
    headline: "Treeni targalt",
    icon: HeartPulse,
    hue: 160,
  },
  {
    id: "treenitaastu-app",
    name: "Treenitaastu.app",
    domain: "treenitaastu.app",
    category: "Veebirakendus",
    headline: "Sinu treeningkava",
    icon: AppWindow,
    hue: 280,
  },
  {
    id: "centivo",
    name: "Centivo.ee",
    domain: "centivo.ee",
    category: "Ehitus",
    headline: "Ehitus, mis kestab",
    icon: HardHat,
    hue: 55,
  },
  {
    id: "epood",
    name: "Sinu e-pood",
    domain: "sinupood.ee",
    category: "E-pood",
    headline: "Müü internetis",
    icon: ShoppingBag,
    hue: 215,
  },
  {
    id: "broneering",
    name: "Broneerimisleht",
    domain: "sinuteenus.ee",
    category: "Teenused",
    headline: "Broneeri kohe",
    icon: CalendarCheck,
    hue: 300,
  },
];
