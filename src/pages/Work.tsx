import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, Check, Search, Smartphone, Target, Users } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { TagPill } from "@/components/TagPill";
import { StatCounter } from "@/components/StatCounter";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import { stats } from "@/data/stats";

/** Short, scannable labels for the sectors each project serves. */
const sectorLabels: Record<string, string> = {
  medialert: "Healthcare",
  pezahome: "Property & services",
  unisacco: "Fintech & cooperatives",
};

const principles = [
  {
    icon: Search,
    title: "Problem first",
    text: "Every project starts with the workflow that's broken, not the feature list. We map it with the people who live it.",
    proof: "Discovery sessions with clinic staff, committee members, and property seekers.",
  },
  {
    icon: Smartphone,
    title: "Built for the context",
    text: "Offline-friendly, SMS fallbacks, low-bandwidth UIs. We design for how products are actually used here.",
    proof: "Mobile-first by default, with fallbacks for low-connectivity areas.",
  },
  {
    icon: Target,
    title: "Measured in outcomes",
    text: "Fewer missed appointments, faster loan approvals, hours reclaimed. Results are the only deliverable that matters.",
    proof: "Every case study above reports what changed, not just what shipped.",
  },
];

function ProjectVisual({ project, className }: { project: PortfolioItem; className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bg-navy",
        className
      )}
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
      <div className="relative flex h-full flex-col justify-between p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          {sectorLabels[project.slug] ?? "Product"}
        </span>
        <div>
          <span
            className="block text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </span>
          <span className="mt-2 block text-sm text-white/60">{project.stack.join(" · ")}</span>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: PortfolioItem }) {
  return (
    <article className="grid gap-8 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm lg:grid-cols-12">
      <ProjectVisual project={project} className="min-h-[320px] rounded-none lg:col-span-7 lg:min-h-[480px]" />
      <div className="flex flex-col justify-center px-6 pb-8 sm:px-10 sm:pb-10 lg:col-span-5 lg:py-14 lg:pl-0 lg:pr-14">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange">Featured project</span>
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{project.name}</h2>
        <p className="mt-4 text-navy/70">{project.problem}</p>
        <ul className="mt-6 space-y-3">
          {project.result.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-3 text-sm text-navy/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-navy/10 pt-6 text-sm">
          <div>
            <dt className="flex items-center gap-1.5 text-navy/50">
              <Users className="h-3.5 w-3.5" aria-hidden="true" /> Client
            </dt>
            <dd className="mt-1 font-semibold text-navy">{project.client}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-navy/50">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> Timeline
            </dt>
            <dd className="mt-1 font-semibold text-navy">{project.timeline}</dd>
          </div>
        </dl>
        <Link
          to={`/work/${project.slug}`}
          className={cn(buttonVariants({ variant: "solid" }), "mt-8 self-start")}
        >
          Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function CaseStudyRow({ project, index }: { project: PortfolioItem; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <ProjectVisual
        project={project}
        className={cn("aspect-[4/3] sm:aspect-[16/10]", reverse && "lg:order-2")}
      />
      <div className={cn(reverse && "lg:order-1")}>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-navy/50">
          <span className="text-orange">0{index + 1}</span>
          <span aria-hidden="true" className="h-px w-8 bg-navy/20" />
          {sectorLabels[project.slug] ?? "Product"}
        </div>
        <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{project.name}</h3>
        <p className="mt-3 text-navy/70">{project.description}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-navy/50">The problem</h4>
            <p className="mt-2 text-sm text-navy/80">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-navy/50">The result</h4>
            <ul className="mt-2 space-y-2">
              {project.result.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>

        <Link
          to={`/work/${project.slug}`}
          className="mt-6 -my-3 inline-flex min-h-11 items-center gap-1 py-3 text-sm font-semibold text-orange hover:underline"
        >
          View full case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function Work() {
  const allTags = useMemo(
    () => Array.from(new Set(portfolioItems.flatMap((p) => p.tags))).sort(),
    []
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const visible = activeTag
    ? portfolioItems.filter((p) => p.tags.includes(activeTag))
    : portfolioItems;

  const [featured, ...rest] = visible;

  return (
    <Layout>
      <Seo
        title="Our Work"
        description="A selection of projects delivered by MindSynk Technologies, including MediAlert, PezaHome, and UniSacco."
      />

      <PageHero
        eyebrow="Our work"
        title="Products that solve real problems"
        description="Health reminders, property marketplaces, cooperative finance. Here's what we've shipped and what it changed."
      />

      {/* Stats strip */}
      <section className="border-b border-navy/10 bg-offwhite">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-6 py-14 sm:grid-cols-4 sm:px-8 sm:py-16 lg:px-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
          <StatCounter value={portfolioItems.length} suffix="" label="Case Studies" />
          <StatCounter value={100} suffix="%" label="Delivered On Brief" />
        </div>
      </section>

      {/* Filter + projects */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">Case studies</span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Selected projects</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
            <FilterChip active={activeTag === null} onClick={() => setActiveTag(null)}>
              All
            </FilterChip>
            {allTags.map((tag) => (
              <FilterChip key={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)}>
                {tag}
              </FilterChip>
            ))}
          </div>
        </div>

        {featured ? (
          <div className="mt-12">
            <FeaturedProject project={featured} />
          </div>
        ) : (
          <p className="mt-12 text-navy/60">No projects match that filter yet.</p>
        )}

        {rest.length > 0 && (
          <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
            {rest.map((project, i) => (
              <CaseStudyRow key={project.slug} project={project} index={i + 1} />
            ))}
          </div>
        )}
      </section>

      {/* How we work */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(241,89,34,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sticky intro */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">How we work</span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Three habits behind every project above
                </h2>
                <p className="mt-4 text-white/65">
                  Different sectors, different stacks, same discipline. This is the approach that made each
                  of these products stick.
                </p>
                <Link
                  to="/services"
                  className={cn(buttonVariants({ variant: "solid" }), "mt-8")}
                >
                  See our services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Steps */}
            <ol className="relative lg:col-span-8">
              <span
                aria-hidden="true"
                className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-orange via-white/20 to-transparent"
              />
              {principles.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="relative pl-20 pb-12 last:pb-0">
                    <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-orange/40 bg-navy text-orange shadow-[0_0_0_6px_rgba(29,30,50,1)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-orange/40 hover:bg-white/[0.07] sm:p-8">
                      <div className="flex items-baseline gap-4">
                        <span
                          className="text-3xl font-bold text-white/15"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          0{i + 1}
                        </span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-white/70">{item.text}</p>
                      <p className="mt-4 flex gap-2 border-t border-white/10 pt-4 text-sm text-white/55">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                        {item.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

    </Layout>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors",
        active
          ? "border-navy bg-navy text-white"
          : "border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
      )}
    >
      {children}
    </button>
  );
}
