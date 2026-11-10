import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock,
  CreditCard,
  FilePlus,
  Megaphone,
  Palette,
  PenTool,
  RefreshCw,
  Rocket,
  ShoppingCart,
  Smartphone,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { CTABand } from "@/components/CTABand";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { pricingTiers, pricingAddOns, type PricingTier } from "@/data/pricing";
import { pricingFaq } from "@/data/faq";

const addOnIcons: Record<string, LucideIcon> = {
  "Logo & basic brand kit": Palette,
  "Professional copywriting": PenTool,
  "E-commerce / online store": ShoppingCart,
  "Extra pages": FilePlus,
  "Social media management": Megaphone,
  "Rush delivery": Rocket,
};

const howItWorks = [
  {
    icon: Wallet,
    title: "Deposit to reserve",
    text: "A deposit secures your slot and kicks off discovery. The balance of the build cost is split across milestones.",
  },
  {
    icon: Rocket,
    title: "Build and launch",
    text: "A fixed, scoped build cost covers design, development, and launch. No surprise invoices once work begins.",
  },
  {
    icon: RefreshCw,
    title: "Monthly retainer",
    text: "Hosting, monitoring, fixes, and small improvements, month to month. Cancel any time after launch.",
  },
];

const paymentMethods = ["Bank transfer", "Airtel Money", "TNM Mpamba"];

function TierCard({ tier }: { tier: PricingTier }) {
  const featured = Boolean(tier.highlighted);
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-8 transition-shadow sm:p-10",
        featured
          ? "border-navy bg-navy text-white shadow-2xl shadow-navy/30 lg:-my-6"
          : "border-navy/10 bg-white hover:shadow-xl hover:shadow-navy/5"
      )}
    >
      {featured && (
        <span className="absolute -top-3.5 left-8 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      <div>
        <h3 className={cn("text-xl font-bold", featured ? "text-white" : "text-navy")}>{tier.name}</h3>
        <p className={cn("mt-2 text-sm", featured ? "text-white/65" : "text-navy/65")}>{tier.tagline}</p>
      </div>

      <div className={cn("mt-8 border-t pt-6", featured ? "border-white/15" : "border-navy/10")}>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            featured ? "text-white/50" : "text-navy/50"
          )}
        >
          Build cost
        </span>
        <div
          className={cn("mt-1 text-3xl font-bold tracking-tight sm:text-4xl", featured ? "text-white" : "text-navy")}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {tier.upfront}
        </div>
        <div className={cn("mt-2 text-sm", featured ? "text-white/65" : "text-navy/65")}>
          then <span className={cn("font-semibold", featured ? "text-white" : "text-navy")}>{tier.monthly}</span>{" "}
          retainer
        </div>
      </div>

      <dl className={cn("mt-6 space-y-3 text-sm", featured ? "text-white/75" : "text-navy/75")}>
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
          <dd>{tier.buildTime}</dd>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
          <dd>{tier.bestFor}</dd>
        </div>
      </dl>

      <Link
        to="/contact"
        className={cn(
          buttonVariants({ variant: featured ? "solid" : "outline" }),
          "mt-8 w-full",
          featured && "hover:bg-orange-600"
        )}
      >
        {tier.upfront === "Custom quote" ? "Request a quote" : "Get started"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>

      <div className={cn("mt-8 border-t pt-6", featured ? "border-white/15" : "border-navy/10")}>
        <h4
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            featured ? "text-white/50" : "text-navy/50"
          )}
        >
          Included at launch
        </h4>
        <ul className="mt-3 space-y-2.5">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={cn("flex items-start gap-2 text-sm", featured ? "text-white/85" : "text-navy/80")}
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex-1">
        <h4
          className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            featured ? "text-white/50" : "text-navy/50"
          )}
        >
          In the monthly retainer
        </h4>
        <ul className="mt-3 space-y-2.5">
          {tier.includedMonthly.map((feature) => (
            <li
              key={feature}
              className={cn("flex items-start gap-2 text-sm", featured ? "text-white/85" : "text-navy/80")}
            >
              <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <Layout>
      <Seo
        title="Pricing"
        description="Transparent pricing packages from MindSynk Technologies — Starter, Growth, and Custom, with upfront build cost plus monthly retainer."
      />

      <PageHero
        eyebrow="Pricing"
        title="Clear packages, no surprises"
        description="One upfront build cost, then a monthly retainer for hosting, support, and iteration. Pick the package that fits where your business is today."
      />

      {/* How pricing works */}
      <section className="border-b border-navy/10 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-orange">0{i + 1}</span>
                  <h3 className="mt-0.5 font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-navy/65">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange">Packages</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Choose your starting point</h2>
          <p className="mt-4 text-navy/70">
            Every package includes design, development, launch, and a retainer that keeps the
            product running. Upgrade whenever you outgrow it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-offwhite px-6 py-5 text-center sm:flex-row sm:text-left lg:mt-20">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange shadow-sm">
            <CreditCard className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-navy">Pay the way that suits you</p>
            <p className="mt-0.5 text-sm text-navy/65">
              Deposit to reserve your build, then monthly via{" "}
              {paymentMethods.map((m, i) => (
                <span key={m}>
                  <span className="font-medium text-navy">{m}</span>
                  {i < paymentMethods.length - 2 ? ", " : i === paymentMethods.length - 2 ? " or " : ""}
                </span>
              ))}
              .
            </p>
          </div>
          <Smartphone className="hidden h-5 w-5 text-navy/30 sm:block" aria-hidden="true" />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-navy/50">
          Figures shown are indicative and pending a final quote tailored to your project scope.
        </p>
      </section>

      {/* Add-ons */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange">Add-ons</span>
                <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Tailor any package</h2>
                <p className="mt-4 text-navy/70">
                  Bolt these onto Starter, Growth, or Custom whenever you need them. Most can be
                  added mid-project without changing your timeline.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 -my-3 inline-flex min-h-11 items-center gap-1 py-3 text-sm font-semibold text-orange hover:underline"
                >
                  Ask about a custom add-on <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ul className="divide-y divide-navy/10 overflow-hidden rounded-3xl border border-navy/10 bg-white lg:col-span-8">
              {pricingAddOns.map((addon) => {
                const Icon = addOnIcons[addon.name] ?? Check;
                return (
                  <li
                    key={addon.name}
                    className="group flex flex-col gap-4 p-6 transition-colors hover:bg-offwhite sm:flex-row sm:items-center sm:gap-6 sm:px-8"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-navy">{addon.name}</h3>
                      <p className="mt-1 text-sm text-navy/65">{addon.description}</p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <div className="text-lg font-bold text-navy">{addon.price}</div>
                      <div className="text-xs text-navy/55">{addon.priceNote}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-semibold uppercase tracking-wide text-orange">FAQ</span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Common questions</h2>
              <p className="mt-4 text-navy/70">
                Still unsure which package fits? A short discovery call is the fastest way to find
                out, and it's free.
              </p>
              <Link to="/contact" className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>
                Book a call
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Faq items={pricingFaq} />
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
