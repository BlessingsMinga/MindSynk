import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange">
          What clients say
        </span>
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Trusted by our partners</h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="flex h-full flex-col">
            <CardContent className="flex h-full flex-col pt-6">
              <Quote className="h-6 w-6 text-orange" aria-hidden="true" />
              <p className="mt-4 flex-1 text-navy/70">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-navy/50">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
