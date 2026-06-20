import type { MouseEvent } from "react";

export const CONTACT_HREF = "/#kontakt";
export const CONTACT_ID = "kontakt";

export function scrollToContact(smooth = true) {
  const behavior: ScrollBehavior = smooth ? "smooth" : "auto";

  const tryScroll = () => {
    const el = document.getElementById(CONTACT_ID);
    if (!el) return false;
    el.scrollIntoView({ behavior, block: "start" });
    return true;
  };

  if (tryScroll()) return;

  requestAnimationFrame(() => {
    if (tryScroll()) return;
    window.setTimeout(tryScroll, 150);
    window.setTimeout(tryScroll, 500);
  });
}

export function isHomePath(pathname = window.location.pathname) {
  return pathname === "/" || pathname === "";
}

export function handleContactClick(e: MouseEvent<HTMLAnchorElement>) {
  if (isHomePath()) {
    e.preventDefault();
    scrollToContact();
  }
}
