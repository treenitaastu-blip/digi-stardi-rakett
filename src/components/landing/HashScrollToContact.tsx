import { useEffect } from "react";
import { scrollToContact } from "@/lib/contact-link";

/** Scroll to #kontakt after navigation or when the hash is set on the homepage. */
export function HashScrollToContact() {
  useEffect(() => {
    const scrollIfNeeded = () => {
      if (window.location.hash === "#kontakt") {
        scrollToContact(false);
      }
    };

    scrollIfNeeded();
    const t1 = window.setTimeout(scrollIfNeeded, 100);
    const t2 = window.setTimeout(scrollIfNeeded, 400);

    window.addEventListener("hashchange", scrollIfNeeded);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", scrollIfNeeded);
    };
  }, []);

  return null;
}
