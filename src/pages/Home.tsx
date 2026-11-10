import { lazy } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MapPin, Phone, Search, Smartphone, Target } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { StatCounter } from "@/components/StatCounter";
import { ProcessStep } from "@/components/ProcessStep";
import { DeferUntilVisible } from "@/components/DeferUntilVisible";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/data/services";
import { processSteps } from "@/data/process";
import { pricingTiers } from "@/data/pricing";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import { stats } from "@/data/stats";
import { team } from "@/data/team";
import { pricingFaq } from "@/data/faq";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/config/site";
import futuristicImage from "@/assets/futuristic.webp";

// Below-the-fold pieces with heavy dependencies (Lottie player, form validation) load on scroll.
const Tech = lazy(() => import("@/components/Tech").then((m) => ({ default: m.Tech })));
const ContactForm = lazy(() => import("@/components/ContactForm").then((m) => ({ default: m.ContactForm })));

const sectorLabels: Record<string, string> = {
  medialert: "Healthcare",
  pezahome: "Property & services",
  unisacco: "Fintech & cooperatives",
};

const reasons = [
  {
    icon: Search,
    title: "Problem first",
    text: "Every engagement opens with discovery, so we build the thing that fixes the workflow, not the longest feature list.",
  },
  {
    icon: Smartphone,
    title: "Built for the context",
    text: "Offline-friendly apps, SMS fallbacks, and low-bandwidth interfaces designed for how products are actually used here.",
  },
  {
    icon: Target,
    title: "Measured in outcomes",
    text: "Fewer missed appointments, faster approvals, hours reclaimed. We report what changed, not just what shipped.",
  },
];

const homeFaq = pricingFaq.slice(0, 4);

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span className="text-xs font-semibold uppercase tracking-wide text-orange">{eyebrow}</span>
      <h2 className={cn("mt-3 text-3xl font-bold sm:text-4xl", light ? "text-white" : "text-navy")}>{title}</h2>
      {text && <p className={cn("mt-4", light ? "text-white/65" : "text-navy/70")}>{text}</p>}
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-4 text-[5rem] font-bold leading-none text-navy/[0.04] transition-colors group-hover:text-orange/10"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
          <service.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange"
          aria-hidden="true"
        />
      </div>
      <h3 className="relative mt-5 text-lg font-bold text-navy">{service.title}</h3>
      <p className="relative mt-2 flex-1 text-sm text-navy/70">{service.description}</p>
      <div className="relative mt-5 flex items-center justify-between border-t border-navy/10 pt-4 text-xs">
        <span className="text-navy/50">{service.tags.slice(0, 2).join(" · ")}</span>
        <span className="font-semibold text-navy">{service.price}</span>
      </div>
    </Link>
  );
}

function ProjectTile({ project, className }: { project: PortfolioItem; className?: string }) {
  return (
    <div
      className={cn("relative isolate overflow-hidden rounded-3xl bg-navy", className)}
      role="img"
      aria-label={`${project.name} project preview`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(241,89,34,0.45),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.25),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* TODO: replace with real project screenshot (project.image) */}
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          {sectorLabels[project.slug] ?? "Product"}
        </span>
        <span
          className="block text-3xl font-bold tracking-tight text-white sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [featured, ...moreProjects] = portfolioItems;

  return (
    <Layout>
      <Seo
        title="Home"
        description="MindSynk Technologies is a Malawian ICT partnership delivering software, e-commerce, IT consultancy, cybersecurity awareness training, digital marketing, and design."
      />

      <Hero />

      {/* Proof strip */}
      <section className="border-b border-navy/10 bg-offwhite">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-navy/10 px-6 sm:px-8 lg:grid-cols-4 lg:divide-x lg:px-12">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 lg:px-8">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
          <div className="py-8 text-center lg:px-8">
            <div className="text-5xl font-bold text-navy sm:text-6xl">{services.length}</div>
            <p className="mt-2 text-sm font-medium text-navy/60">Disciplines, one team</p>
          </div>
          <div className="flex flex-col items-center justify-center py-8 text-center lg:px-8">
            <MapPin className="h-6 w-6 text-orange" aria-hidden="true" />
            <p className="mt-2 font-bold text-navy">Lilongwe, Malawi</p>
            <p className="text-sm text-navy/60">Working across the region</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Everything your product needs, under one roof"
            text="Engineering, commerce, infrastructure, cybersecurity, marketing, and design, delivered by the same team so nothing gets lost between vendors."
          />
          <Link
            to="/services"
            className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-orange hover:underline"
          >
            All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Why MindSynk */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={futuristicImage}
          loading="lazy"
          decoding="async"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(241,89,34,0.25),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Why MindSynk"
                title="A partnership, not a vendor"
                text="We work alongside our clients long after launch, combining software, cloud infrastructure, design, and marketing into one accountable team."
              />
              <ul className="mt-8 space-y-4">
                {team.map((member) => (
                  <li key={member.name} className="flex items-center gap-4">
                    {member.portrait ? (
                      <img
                        src={member.portrait}
                        loading="lazy"
                        decoding="async"
                        alt={`Portrait of ${member.name}`}
                        className="h-14 w-14 shrink-0 rounded-full border border-white/15 object-cover"
                        style={{ objectPosition: member.portraitPosition ?? "center top" }}
                      />
                    ) : (
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 font-bold text-white">
                        {member.initials}
                      </span>
                    )}
                    <div>
                      <p className="font-semibold text-white">{member.name}</p>
                      <p className="text-sm text-white/60">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-orange hover:underline"
              >
                Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 self-center lg:col-span-7">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <article
                  key={title}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-orange/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-orange">0{i + 1}</span>
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/65">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our work"
              title="Products people rely on"
              text="Selected projects across healthcare, property, and finance."
            />
            <Link
              to="/work"
              className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-orange hover:underline"
            >
              All case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <article className="grid overflow-hidden rounded-3xl border border-navy/10 bg-white lg:col-span-7 lg:grid-rows-[auto_1fr]">
              <ProjectTile project={featured} className="min-h-[260px] rounded-none sm:min-h-[320px]" />
              <div className="p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">Featured project</span>
                <h3 className="mt-2 text-2xl font-bold text-navy">{featured.name}</h3>
                <p className="mt-3 text-navy/70">{featured.description}</p>
                <ul className="mt-5 space-y-2">
                  {featured.result.slice(0, 2).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-navy/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={`/work/${featured.slug}`} className={cn(buttonVariants({ variant: "solid" }), "mt-6")}>
                  Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {moreProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5"
                >
                  <ProjectTile project={project} className="h-40 rounded-none" />
                  <div className="flex flex-1 items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-bold text-navy">{project.name}</h3>
                      <p className="mt-1 text-sm text-navy/70">{project.description}</p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="How we work"
                title="A clear path from idea to launch"
                text="Seven steps, the same for an app, a store, or a brand. You always know where the project stands."
              />
              <DeferUntilVisible className="mx-auto mt-8 aspect-square w-full max-w-xs lg:max-w-sm">
                <Tech className="h-full w-full" />
              </DeferUntilVisible>
            </div>
          </div>
          <ol className="rounded-3xl border border-navy/10 bg-white px-6 sm:px-8 lg:col-span-7">
            {processSteps.map((step) => (
              <li key={step.number}>
                <ProcessStep {...step} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Packages built for growth"
            text="Transparent starting points. Every project gets a fixed quote after discovery."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-white p-7",
                  tier.highlighted ? "border-orange shadow-xl shadow-orange/10" : "border-navy/10"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                <p className="mt-1 text-sm text-navy/70">{tier.tagline}</p>
                <div className="mt-6">
                  <div className="text-3xl font-bold text-navy">{tier.upfront}</div>
                  <div className="text-sm text-navy/60">+ {tier.monthly}</div>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm text-navy/70">
                  <Clock className="h-4 w-4 text-orange" aria-hidden="true" />
                  {tier.buildTime}
                </p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-navy/10 pt-5">
                  {tier.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-navy/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={cn(buttonVariants({ variant: tier.highlighted ? "solid" : "outline" }), "mt-7 w-full")}
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/pricing"
              className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-orange hover:underline"
            >
              Compare all packages and add-ons <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <SectionHeading align="center" eyebrow="Good to know" title="Questions we hear most" />
        <div className="mt-12">
          <Faq items={homeFaq} />
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Get in touch"
                title="Ready to build something that lasts?"
                text="Tell us a bit about what you are building and we will get back to you with next steps."
              />
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-11 items-center gap-3 text-white/80 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-orange" aria-hidden="true" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="inline-flex min-h-11 items-center gap-3 text-white/80 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                    +265 99 209 2766
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
                  Lilongwe, Malawi
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 sm:p-8 lg:col-span-7">
              <DeferUntilVisible className="min-h-[26rem]">
                <ContactForm />
              </DeferUntilVisible>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
