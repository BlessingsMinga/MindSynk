import { useEffect, useState } from "react";
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MapPin,
  Quote,
  ShieldCheck,
  Target,
  Trophy,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { ProcessStep } from "@/components/ProcessStep";
import { StatCounter } from "@/components/StatCounter";
import ProfileCard from "@/components/react-bits/ProfileCard";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { team } from "@/data/team";
import { stats } from "@/data/stats";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import storyImage from "@/assets/idea.webp";
import processImage from "@/assets/Process.webp";

interface Value {
  icon: LucideIcon;
  title: string;
  copy: string;
}

const sections = [
  { id: "story", label: "Our story" },
  { id: "purpose", label: "Mission & vision" },
  { id: "values", label: "Values" },
  { id: "team", label: "Team" },
  { id: "process", label: "How we work" },
];

const values: Value[] = [
  { icon: Lightbulb, title: "Innovation", copy: "We explore practical new ideas that create better ways forward." },
  { icon: Trophy, title: "Excellence", copy: "We hold ourselves to a high standard in every detail we deliver." },
  { icon: Leaf, title: "Sustainability", copy: "We build solutions designed to remain useful as businesses grow." },
  { icon: ShieldCheck, title: "Integrity", copy: "We lead with honesty, transparency, and accountability." },
  { icon: UsersRound, title: "Collaboration", copy: "The strongest work happens when we build it together." },
  { icon: HeartHandshake, title: "Client-centred", copy: "Your goals, context, and customers shape our decisions." },
];

const purpose = [
  {
    icon: Target,
    label: "Our mission",
    statement: "To make thoughtful technology a force for sustainable progress.",
    detail: "We help people and organisations solve important problems with digital tools they can rely on.",
  },
  {
    icon: Eye,
    label: "Our vision",
    statement: "A more connected, capable digital future for Malawi and the region.",
    detail: "We see local organisations using great technology with confidence, clarity, and ambition.",
  },
];

const differences = [
  {
    title: "Fewer hand-offs",
    text: "Strategy, design, engineering, and marketing sit in one team, so nothing gets lost between vendors.",
  },
  {
    title: "Built for local reality",
    text: "Offline-first apps, sensible hosting, and tooling that works on the connectivity our clients actually have.",
  },
  {
    title: "Here after launch",
    text: "We stay close to monitor, maintain, and improve the product as your business grows.",
  },
];

/** Tracks which section is closest to the top of the viewport. */
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-semibold uppercase tracking-wide text-orange">{children}</span>;
}

export default function About() {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <Layout>
      <Seo
        title="About"
        description="MindSynk Technologies is a Malawian ICT partnership building software, cloud infrastructure, and digital brands."
      />
      <PageHero
        eyebrow="About MindSynk"
        title="Technology with a human point of view"
        description="We are a Malawian digital partner helping ambitious organisations turn meaningful ideas into durable products."
      />

      {/* Sticky jump strip */}
      <div className="sticky top-0 z-30 border-b border-navy/10 bg-offwhite/90 backdrop-blur">
        <nav
          aria-label="On this page"
          className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-3 sm:px-8 lg:px-12 [scrollbar-width:none]"
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  isActive ? "bg-navy text-white" : "text-navy/60 hover:bg-navy/5 hover:text-navy"
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Manifesto + facts */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Who we are</Eyebrow>
              <p
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A small, senior team that brings software, cloud, design, and marketing{" "}
                <span className="text-orange">under one roof.</span>
              </p>
              <p className="mt-6 max-w-xl text-navy/70">
                MindSynk Technologies was founded to make capable digital expertise more accessible to businesses
                in Malawi and beyond. One partner for the whole journey, from the first idea to a product in the
                hands of your customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 self-center lg:col-span-5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
              <div className="rounded-2xl border border-navy/10 bg-white p-6 text-center">
                <div className="text-5xl font-bold text-navy sm:text-6xl">{services.length}</div>
                <p className="mt-2 text-sm font-medium text-navy/60">Disciplines, one team</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-navy p-6 text-center">
                <MapPin className="h-6 w-6 text-orange" aria-hidden="true" />
                <p className="mt-3 text-lg font-bold text-white">Lilongwe, Malawi</p>
                <p className="mt-1 text-sm text-white/60">Working across the region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section id="story" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-3xl bg-orange/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-navy/10 shadow-2xl shadow-navy/10">
                <img
                  src={storyImage}
                  loading="lazy"
                  decoding="async"
                  alt="A hand launching a digital rocket"
                  className="aspect-[4/3] h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <figure className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-navy/50 p-5 backdrop-blur-sm sm:inset-x-8 sm:bottom-8">
                  <Quote className="h-5 w-5 text-orange" aria-hidden="true" />
                  <blockquote className="mt-2 text-sm font-semibold leading-6 text-white sm:text-base">
                    One partner, from idea to impact. We combine perspective, craft, and technology to make progress
                    feel possible.
                  </blockquote>
                </figure>
              </div>
            </div>

            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                Built for the work that moves people forward.
              </h2>
              <p className="mt-4 text-navy/70">
                We started MindSynk because too many good ideas in Malawi stall between the people who have them
                and the people who can build them. We close that gap by bringing the whole product team together
                and shaping every decision around the people who will use the result.
              </p>
              <ul className="mt-8 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
                {differences.map((point, i) => (
                  <li key={point.title} className="flex gap-4 p-5">
                    <span className="text-sm font-semibold text-orange">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-navy">{point.title}</h3>
                      <p className="mt-1 text-sm text-navy/70">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className={cn(buttonVariants({ variant: "solid", size: "lg" }))}>
                  Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/work" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section id="purpose" className="relative isolate scroll-mt-20 overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(241,89,34,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Purpose that outlasts any one project</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {purpose.map(({ icon: Icon, label, statement, detail }) => (
              <article
                key={label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-orange/40 sm:p-10"
              >
                <Icon
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/[0.04] transition-colors group-hover:text-orange/10"
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange/15 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/60">{label}</span>
                  </div>
                  <p className="mt-6 text-2xl font-bold leading-snug text-white sm:text-3xl">{statement}</p>
                  <p className="mt-4 text-white/65">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="scroll-mt-20 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>What guides us</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">The values that define us</h2>
                <p className="mt-4 text-navy/70">
                  The principles behind how we show up, make decisions, and work with our partners.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {values.map(({ icon: Icon, title, copy }, i) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-4 text-[5rem] font-bold leading-none text-navy/[0.04] transition-colors group-hover:text-orange/10"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-navy">{title}</h3>
                  <p className="relative mt-2 text-sm text-navy/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>Our team</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">The people behind the work</h2>
                <p className="mt-4 text-navy/70">
                  Two co-founders, one shared standard. We are designers, developers, and strategists who believe
                  strong partnerships produce stronger digital experiences.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-orange hover:underline"
                >
                  Work with us <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {team.map((member) => (
                <ProfileCard
                  key={member.name}
                  name={member.name}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/[^a-z0-9]+/g, "")}
                  bio={member.bio}
                  linkedinUrl={member.linkedinUrl}
                  avatarUrl={member.portrait}
                  avatarPosition={member.portraitPosition}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="process" className="scroll-mt-20 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>How we work</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">A clear path from idea to launch.</h2>
                <p className="mt-4 text-navy/70">
                  We keep the process collaborative and visible, so you always know what is happening and why.
                </p>
                <div className="relative mt-8 overflow-hidden rounded-3xl border border-navy/10 shadow-xl shadow-navy/10">
                  <img
                    src={processImage}
                    loading="lazy"
                    decoding="async"
                    alt="MindSynk project process"
                    className="h-56 w-full object-cover object-center sm:h-64"
                  />
                </div>
                <Link
                  to="/services"
                  className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-orange hover:underline"
                >
                  Explore our services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <ol className="rounded-3xl border border-navy/10 bg-white px-6 sm:px-8 lg:col-span-7">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <ProcessStep number={step.number} title={step.title} description={step.description} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
