/**
 * Fixed, non-interactive page backdrop. Three soft brand-tinted radial blobs
 * give the off-white surface a subtle premium depth without competing with content.
 */
export function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute h-[300px] w-[300px] blur-[40px]"
        style={{
          top: "5%",
          left: "8%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 14%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute h-[260px] w-[260px] blur-[40px]"
        style={{
          top: "8%",
          right: "10%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-2) 14%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute h-[400px] w-[600px] -translate-x-1/2 blur-[60px]"
        style={{
          top: "30%",
          left: "50%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-3) 10%, transparent) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
