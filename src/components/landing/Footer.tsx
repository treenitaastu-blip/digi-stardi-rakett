export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
            DS
          </span>
          Digitaalne Stardipakett
        </div>
        <p className="text-sm text-muted-foreground">
          Korralik esimene mulje ilma agentuuri hinnata.
        </p>
        <a
          href="#kontakt"
          className="text-sm font-medium text-brand hover:underline"
        >
          Küsi pakkumist
        </a>
      </div>
    </footer>
  );
}