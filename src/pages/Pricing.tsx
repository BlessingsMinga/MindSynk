import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { pricingTiers } from "@/data/pricing";

export default function Pricing() {
  return (
    <Layout>
      <Seo
        title="Pricing"
        description="Transparent pricing packages from MindSynk Technologies — Starter, Growth, and Custom, with upfront build cost plus monthly retainer."
      />

      <PageHero
        eyebrow="Pricing"
        title="Packages built for growth"
        description="Every project starts with a build cost plus a monthly retainer for support, hosting, and iteration."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-navy/50">
          Figures shown are indicative and pending a final quote tailored to your project scope.
          {/* TODO: replace with real MindSynk pricing guide figures once finalized */}
        </p>
      </section>
    </Layout>
  );
}
