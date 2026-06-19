type BlogFigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function BlogFigure({ src, alt, caption }: BlogFigureProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-border bg-secondary">
      <img
        src={src}
        alt={alt}
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full object-cover"
      />
      {caption && (
        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
