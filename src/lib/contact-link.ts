import type { MouseEvent } from "react";

export const CONTACT_HREF = "/#kontakt";
export const CONTACT_ID = "kontakt";

const WATCH_MS = 4000;
const RETRY_DELAYS_MS = [0, 80, 200, 400, 700, 1200, 2000, 3200];

let watchUntil = 0;
let layoutObserver: MutationObserver | null = null;

function getContactElement() {
  return document.getElementById(CONTACT_ID);
}

/** content-visibility:auto underestimates section height — reveal before measuring. */
function revealSectionsForLayout() {
  document.querySelectorAll<HTMLElement>(".section-pad").forEach((node) => {
    node.style.contentVisibility = "visible";
  });
}

function getContactScrollTop(el: HTMLElement) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - margin);
}

function measureAndScroll(smooth: boolean) {
  revealSectionsForLayout();
  const el = getContactElement();
  if (!el) return false;
  window.scrollTo({ top: getContactScrollTop(el), behavior: smooth ? "smooth" : "auto" });
  return true;
}

function stopLayoutWatch() {
  watchUntil = 0;
  layoutObserver?.disconnect();
}

function startLayoutWatch(smooth: boolean) {
  if (typeof window === "undefined") return;

  stopLayoutWatch();
  watchUntil = Date.now() + WATCH_MS;

  const sync = (useSmooth: boolean) => {
    if (Date.now() > watchUntil) return;
    measureAndScroll(useSmooth);
  };

  sync(smooth);

  const main = document.getElementById("main-content");
  if (main) {
    layoutObserver = new MutationObserver(() => {
      if (Date.now() > watchUntil) return;
      sync(false);
    });
    layoutObserver.observe(main, { childList: true, subtree: true });
  }

  for (const delay of RETRY_DELAYS_MS) {
    window.setTimeout(() => sync(false), delay);
  }

  window.setTimeout(stopLayoutWatch, WATCH_MS);
}

export function scrollToContact(smooth = true) {
  startLayoutWatch(smooth);
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

/** Call on homepage mount when URL already contains #kontakt. */
export function scrollToContactFromHash() {
  if (window.location.hash !== `#${CONTACT_ID}`) return;
  startLayoutWatch(false);
}
