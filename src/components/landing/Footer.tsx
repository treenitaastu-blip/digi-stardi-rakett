export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
          <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-extrabold text-brand-foreground">
              DS
            </span>
            <span className="text-[0.92rem]">Digitaalne Stardipakett</span>
          </a>

          <p className="text-center text-sm text-muted-foreground">
            Digitaalne esmamulje väikeettevõttele. 7 päeva. 400 €.
          </p>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a href="#kontakt" className="text-sm font-semibold text-brand transition-colors hover:text-brand/80">
              Küsi pakkumist →
            </a>
            <p className="text-xs text-muted-foreground">© {year} Digitaalne Stardipakett</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
