import { useEffect, useState } from "react";

/** Mount after idle — defers non-critical client UI on low-end devices. */
export function useIdleMount(enabled = true, timeoutMs = 2500) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setMounted(true), { timeout: timeoutMs });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(() => setMounted(true), Math.min(timeoutMs, 2000));
    return () => window.clearTimeout(id);
  }, [enabled, timeoutMs]);

  return mounted;
}
