import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { PricingAddOn } from "@/data/pricing";

interface AddOnCardProps extends PricingAddOn {
  icon: LucideIcon;
}

export function AddOnCard({ name, description, price, priceNote, icon: Icon }: AddOnCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="pr-2">{name}</CardTitle>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
            <Icon className="h-5 w-5 text-orange" aria-hidden="true" />
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="text-2xl font-bold text-navy">{price}</span>
        <span className="text-sm text-navy/60">{priceNote}</span>
      </CardContent>
    </Card>
  );
}