import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Layers } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/data/services";
import { processSteps } from "@/data/process";
import networkImage from "@/assets/service-network.svg";

/** Short labels for the sticky index. */
const shortNames: Record<string, string> = {
  "software-mobile-development": "Software & Mobile",
  "it-consultancy-networking": "IT & Networking",
  "cybersecurity-awareness-training": "Cybersecurity",
  "digital-marketing-social-media": "Marketing",
  "graphic-design-branding-ui-ux": "Design & Brand",
  "e-commerce-commerce": "E-commerce",
};

const deliveryPoints = [
  {
    title: "Start with the outcome",
    text: "Every engagement opens with a discovery workshop that maps business goals to the right technology, not the other way round.",
  },
  {
    title: "Ship, then keep improving",
    text: "We build in short cycles with real users, then maintain and evolve the product long after launch.",
  },
  {
    title: "One partner, total accountability",
    text: "Design, engineering, infrastructure, marketing and support under one roof. No juggling vendors.",
  },
];

/** Tracks which service panel is closest to the top of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function ServicePanel({ service, index }: { service: Service; index: number }) {
  return (
    <article
      id={service.slug}
      className="group relative scroll-mt-32 overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 sm:p-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 text-[8rem] font-bold leading-none text-navy/[0.04] transition-colors group-hover:text-orange/10"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
              <service.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">
              Service {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 text-2xl font-bold text-navy sm:text-3xl">{service.title}</h3>
          <p className="mt-3 text-lg text-navy/80">{service.description}</p>
          <p className="mt-4 text-sm leading-relaxed text-navy/65">{service.detail}</p>
        </div>

        <aside className="flex flex-col justify-between gap-6 rounded-2xl bg-offwhite p-6 md:col-span-5">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-navy/50">What's included</h4>
            <ul className="mt-3 space-y-2">
              {service.tags.map((tag) => (
                <li key={tag} className="flex gap-2 text-sm text-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-navy/10 pt-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">Starting at</span>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
              <span className="text-xl font-bold text-navy">{service.price}</span>
              <span className="text-sm text-navy/60">{service.priceNote}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contact" className={cn(buttonVariants({ variant: "solid", size: "sm" }))}>
                Get a quote
              </Link>
              <Link to="/pricing" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                See pricing
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default function Services() {
  const slugs = services.map((s) => s.slug);
  const active = useActiveSection(slugs);

  return (
    <Layout>
      <Seo
        title="Services"
        description="Software & mobile development, e-commerce, IT consultancy, cybersecurity awareness training, digital marketing, and design from MindSynk Technologies."
      />

      <PageHero
        eyebrow="What we do"
        title="Services built for real growth"
        description="Six disciplines, one partnership. Engineering, commerce, infrastructure, cybersecurity, marketing, and design working together."
      />

      {/* Quick index strip */}
      <section className="border-b border-navy/10 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <p className="text-sm text-navy/60">Jump to a service</p>
            <nav aria-label="Services" className="flex flex-wrap gap-2">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-xs font-semibold text-navy/70 transition-colors hover:border-navy/40 hover:text-navy"
                >
                  <service.icon className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                  {shortNames[service.slug] ?? service.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Services with sticky index */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">Our services</span>
              <h2 className="mt-3 text-3xl font-bold text-navy">Everything under one roof</h2>
              <p className="mt-4 text-sm text-navy/70">
                Every discipline is delivered by the same team, so the website, the app, the store,
                and the campaign always speak the same language.
              </p>
              <ol className="mt-8 hidden space-y-1 border-l border-navy/10 lg:block">
                {services.map((service, i) => {
                  const isActive = active === service.slug;
                  return (
                    <li key={service.slug}>
                      <a
                        href={`#${service.slug}`}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "-ml-px flex items-center gap-3 border-l-2 py-2 pl-4 text-sm transition-colors",
                          isActive
                            ? "border-orange font-semibold text-navy"
                            : "border-transparent text-navy/55 hover:text-navy"
                        )}
                      >
                        <span className="w-5 text-xs text-navy/40">{String(i + 1).padStart(2, "0")}</span>
                        {shortNames[service.slug] ?? service.title}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10 lg:col-span-9">
            {services.map((service, index) => (
              <ServicePanel key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(241,89,34,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">Our process</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              From first call to long-term support
            </h2>
            <p className="mt-4 text-white/65">
              The same seven steps apply whether we're building an app, a store, or a brand. You
              always know where the project stands.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-orange via-white/20 to-transparent lg:block"
            />
            {processSteps.map((step) => (
              <li key={step.number} className="relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-orange/40 bg-navy text-sm font-bold text-orange">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.description}</p>
              </li>
            ))}
            <li className="relative flex flex-col justify-end rounded-2xl border border-dashed border-white/15 p-6">
              <p className="text-sm text-white/65">Ready to start at step one?</p>
              <Link
                to="/contact"
                className="mt-3 -my-3 inline-flex min-h-11 items-center gap-1 py-3 text-sm font-semibold text-orange hover:underline"
              >
                Book a discovery call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* One team */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-3xl bg-orange/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-navy/10 shadow-2xl shadow-navy/10">
                <img
                  src={networkImage}
                  alt="A network diagram showing MindSynk service disciplines connected around a central hub"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-3.5 shadow-xl shadow-navy/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10">
                  <Layers className="h-5 w-5 text-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Six disciplines</p>
                  <p className="text-xs text-navy/60">delivered as one team</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">Why one team</span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">One team, end to end</h2>
              <p className="mt-4 text-navy/70">
                Whether you need a website, a mobile app, or a full e-commerce operation, you get the
                same people from strategy to support. That keeps decisions fast, costs predictable,
                and the product coherent.
              </p>
              <ul className="mt-8 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
                {deliveryPoints.map((point, i) => (
                  <li key={point.title} className="flex gap-4 p-5">
                    <span className="text-sm font-semibold text-orange">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-navy">{point.title}</h3>
                      <p className="mt-1 text-sm text-navy/70">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className={cn(buttonVariants({ variant: "solid", size: "lg" }))}>
                  Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
