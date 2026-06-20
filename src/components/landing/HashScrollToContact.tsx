import { useEffect } from "react";
import { scrollToContactFromHash } from "@/lib/contact-link";

/** Scroll to #kontakt after navigation or when the hash is set on the homepage. */
export function HashScrollToContact() {
  useEffect(() => {
    scrollToContactFromHash();

    const onHashChange = () => scrollToContactFromHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
