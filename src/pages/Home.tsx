import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { CTABand } from "@/components/CTABand";
import { StatCounter } from "@/components/StatCounter";
import { ProcessStep } from "@/components/ProcessStep";
import { PricingCard } from "@/components/PricingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { pricingTiers } from "@/data/pricing";
import { portfolioItems } from "@/data/portfolio";
import { stats } from "@/data/stats";
import futuristicImage from "@/assets/futuristic.png";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Home"
        description="MindSynk Technologies is a Malawian ICT partnership delivering software & mobile development, AI-powered products, e-commerce & commerce, IT consultancy, and digital marketing & design."
      />

      <Hero />

      {/* Trust strip */}
      <div className="border-y border-navy/10 bg-white py-4 text-center">
        <p className="text-sm text-navy/50">
          Crafted in Malawi, built to grow with your business
        </p>
      </div>

      {/* Our Expertise */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">What we do</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-navy/70">
            We combine engineering, infrastructure, marketing, and design to help Malawian
            businesses build digital products that last.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ExpertiseCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
            />
          ))}
        </div>
      </section>

      <CTABand />

      <Testimonials />

      {/* Who we are */}
      <section className="relative overflow-hidden bg-navy">
        <img
          src={futuristicImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">Who we are</span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                A partnership, not a vendor
              </h2>
              <p className="mt-4 text-white/70">
                MindSynk Technologies is a Malawian ICT partnership. We work alongside our
                clients as long-term partners — not a vendor that disappears after launch —
                combining software development, cloud infrastructure, and digital marketing
                under one roof.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-white">
                  BM
                </div>
                <div>
                  <p className="font-semibold text-white">Blessings Minga</p>
                  <p className="text-sm text-white/60">Co-Founder</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  variant="onDark"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">How we work</span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Our Process</h2>
              <Tech className="mx-auto mt-8 aspect-square w-full max-w-xs lg:max-w-md" />
            </div>
            <div>
              {processSteps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Packages built for growth</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:underline"
          >
            Compare all packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">Our work</span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Recent projects</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-2xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">Get in touch</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Start a project</h2>
          <p className="mt-4 text-navy/70">
            Tell us a bit about what you&apos;re building and we&apos;ll get back to you.
          </p>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
