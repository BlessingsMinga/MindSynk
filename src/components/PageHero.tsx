interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <span className="inline-block rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold text-navy sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">{description}</p>
        )}
      </div>
    </section>
  );
}
