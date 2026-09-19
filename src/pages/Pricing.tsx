import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { AddOnCard } from "@/components/AddOnCard";
import { Faq } from "@/components/Faq";
import { CTABand } from "@/components/CTABand";
import { pricingTiers, pricingAddOns } from "@/data/pricing";
import { pricingFaq } from "@/data/faq";
import { Palette, PenTool, ShoppingCart, FilePlus, Megaphone, Rocket } from "lucide-react";

const addOnIcons = {
  "Logo & basic brand kit": Palette,
  "Professional copywriting": PenTool,
  "E-commerce / online store": ShoppingCart,
  "Extra pages": FilePlus,
  "Social media management": Megaphone,
  "Rush delivery": Rocket,
} as const;

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
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-navy/70">
          Start with a deposit to reserve your build — then pay monthly via bank transfer, Airtel
          Money or TNM Mpamba.
        </p>
      </section>

      {/* Add-ons */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">Add-ons</span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Tailor it — optional add-ons
            </h2>
            <p className="mt-4 text-navy/70">
              Bolt these onto any package whenever you need them.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingAddOns.map((addon) => (
              <AddOnCard
                key={addon.name}
                {...addon}
                icon={addOnIcons[addon.name as keyof typeof addOnIcons]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Common questions</h2>
        </div>
        <div className="mt-12">
          <Faq items={pricingFaq} />
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
