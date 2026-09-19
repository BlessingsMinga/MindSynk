import { Check, Clock, RefreshCw, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PricingTier } from "@/data/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col",
        tier.highlighted && "border-orange shadow-lg ring-1 ring-orange"
      )}
    >
      <CardHeader>
        {tier.highlighted && (
          <span className="mb-2 inline-block w-fit rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
            Most popular
          </span>
        )}
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription>{tier.tagline}</CardDescription>
        <div className="mt-4 space-y-2.5 text-sm">
          <p className="flex items-center gap-2 font-medium text-navy">
            <Clock className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
            {tier.buildTime}
          </p>
          <p className="flex items-start gap-2 text-navy/70">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
            <span>
              <span className="font-medium text-navy">Best for:</span> {tier.bestFor}
            </span>
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="mb-6 rounded-xl bg-offwhite p-4">
          <div className="text-3xl font-bold text-navy">{tier.upfront}</div>
          <div className="text-sm text-navy/60">+ {tier.monthly}</div>
        </div>

        <h4 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
          What&apos;s included at launch
        </h4>
        <ul className="mb-6 mt-3 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-navy/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <h4 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
          In your monthly plan
        </h4>
        <ul className="mb-8 mt-3 flex-1 space-y-3">
          {tier.includedMonthly.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-navy/80">
              <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={cn(
            buttonVariants({ variant: tier.highlighted ? "solid" : "outline" }),
            "w-full"
          )}
        >
          Get started
        </Link>
      </CardContent>
    </Card>
  );
}
