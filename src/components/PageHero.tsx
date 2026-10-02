import heroBackground from "@/assets/glasses.jpg";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate -mt-[5.75rem] overflow-hidden bg-navy pt-[5.75rem]">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/90" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <span className="inline-block rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">{description}</p>
        )}
      </div>
    </section>
  );
}
