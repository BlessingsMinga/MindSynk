import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { StatCounter } from "@/components/StatCounter";
import { ProcessStep } from "@/components/ProcessStep";
import { CTABand } from "@/components/CTABand";
import { processSteps } from "@/data/process";
import { stats } from "@/data/stats";

export default function About() {
  return (
    <Layout>
      <Seo
        title="About"
        description="MindSynk Technologies is a Malawian ICT partnership building software, cloud infrastructure, and digital brands."
      />

      <PageHero
        eyebrow="Who we are"
        title="A partnership, not a vendor"
        description="We work alongside our clients as long-term partners, combining software development, cloud infrastructure, and digital marketing under one roof."
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-navy/70">
              MindSynk Technologies was founded to help Malawian businesses build digital
              products that last — not one-off websites, but software and infrastructure
              designed to grow with the business behind it. We bring together engineering,
              cloud expertise, and design under one team, so our clients get a single
              partner instead of juggling multiple vendors.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy/10 text-lg font-bold text-navy">
                BM
              </div>
              <div>
                <p className="font-semibold text-navy">Blessings Minga</p>
                <p className="text-sm text-navy/60">Co-Founder</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-navy/10 bg-offwhite p-10">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">How we work</span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Our Process</h2>
          </div>
          <div className="mt-12">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
