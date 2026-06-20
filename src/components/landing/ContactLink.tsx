import type { ComponentProps } from "react";
import { CONTACT_HREF, handleContactClick } from "@/lib/contact-link";

export function ContactLink({
  href = CONTACT_HREF,
  onClick,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      href={href}
      onClick={(e) => {
        handleContactClick(e);
        onClick?.(e);
      }}
      {...props}
    />
  );
}
