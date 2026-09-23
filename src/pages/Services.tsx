import { Link } from "react-router-dom";
import { ArrowRight, Check, Layers } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { TagPill } from "@/components/TagPill";
import { CTABand } from "@/components/CTABand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import networkImage from "@/assets/service-network.svg";

/** Services rendered as large "spotlight" cards in the bento grid. */
const featuredSlugs = ["software-mobile-development", "graphic-design-branding-ui-ux"];

/** Column span per service so the grid always fills full 6-column rows. */
const spans: Record<string, string> = {
  "software-mobile-development": "sm:col-span-2 lg:col-span-4",
  "it-consultancy-networking": "lg:col-span-2",
  "digital-marketing-social-media": "lg:col-span-2",
  "graphic-design-branding-ui-ux": "sm:col-span-2 lg:col-span-4",
  "ai-powered-products": "lg:col-span-3",
  "e-commerce-commerce": "lg:col-span-3",
};

const deliveryPoints = [
  {
    title: "Start with the outcome",
    text: "Every engagement opens with a discovery workshop that maps business goals to the right technology — not the other way round.",
  },
  {
    title: "Ship, then keep improving",
    text: "We build in short cycles with real users, then maintain and evolve the product long after launch.",
  },
  {
    title: "One partner, total accountability",
    text: "Design, engineering, infrastructure, marketing and support under one roof — no juggling vendors.",
  },
];

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services"
        description="Software & mobile development, AI-powered products, e-commerce & commerce, IT consultancy & networking, digital marketing & social media, and graphic design & branding from MindSynk Technologies."
      />

      <PageHero
        eyebrow="What we do"
        title="Services built for real growth"
        description="Six disciplines, one partnership — engineering, AI, commerce, infrastructure, marketing, and design working together."
      />

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">Our services</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Built for real growth</h2>
          <p className="mt-4 text-navy/70">
            Every discipline below is delivered by the same team — so the website, the app, the
            store, and the campaign always speak the same language.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const isFeatured = featuredSlugs.includes(service.slug);
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={cn(
                  "group relative scroll-mt-28 overflow-hidden rounded-2xl border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5",
                  spans[service.slug] ?? "lg:col-span-3"
                )}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-orange to-orange/40 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 transition-colors group-hover:bg-orange/15">
                    <service.icon className="h-6 w-6 text-orange" aria-hidden="true" />
                  </div>
                  <span className="text-2xl font-bold text-navy/10" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 text-navy/70">
                  {isFeatured ? service.detail : service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How we deliver */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-3xl bg-orange/15 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-10 -right-8 h-56 w-56 rounded-full bg-navy/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-navy/10 shadow-2xl shadow-navy/10">
                <img
                  src={networkImage}
                  alt="A network diagram showing six service disciplines connected around a central MindSynk hub"
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
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">
                How we work
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                One team, end to end
              </h2>
              <p className="mt-4 text-navy/70">
                Whether you need a website, a mobile app, an AI assistant, or a full e-commerce
                operation, you get the same people from strategy to support. That keeps decisions
                fast, costs predictable, and the product coherent.
              </p>

              <ul className="mt-8 space-y-5">
                {deliveryPoints.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/15">
                      <Check className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                    </span>
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
