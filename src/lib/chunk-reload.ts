const RELOAD_KEY = "lehekoda-chunk-reload";

function isChunkLoadError(reason: unknown) {
  if (!(reason instanceof Error)) return false;
  const msg = reason.message;
  return (
    msg.includes("Failed to fetch dynamically imported module") ||
    msg.includes("Importing a module script failed") ||
    msg.includes("error loading dynamically imported module")
  );
}

/** Reload once when a stale hashed chunk 404s after deploy. */
export function installChunkReloadHandler() {
  if (typeof window === "undefined") return;

  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    reloadOnceForStaleChunk();
  });

  window.addEventListener("unhandledrejection", (event) => {
    if (!isChunkLoadError(event.reason)) return;
    event.preventDefault();
    reloadOnceForStaleChunk();
  });

  window.addEventListener("load", () => {
    sessionStorage.removeItem(RELOAD_KEY);
  });
}

export function reloadOnceForStaleChunk() {
  if (sessionStorage.getItem(RELOAD_KEY)) return false;
  sessionStorage.setItem(RELOAD_KEY, "1");
  window.location.reload();
  return true;
}

export function isChunkLoadErrorMessage(message: string) {
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed") ||
    message.includes("error loading dynamically imported module")
  );
}
