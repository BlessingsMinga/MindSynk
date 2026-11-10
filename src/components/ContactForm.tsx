import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, ChevronDown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const budgets = [
  { value: "under-500k", label: "Under MWK 500k" },
  { value: "500k-1.5m", label: "MWK 500k – 1.5M" },
  { value: "1.5m-5m", label: "MWK 1.5M – 5M" },
  { value: "5m-plus", label: "MWK 5M+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Pick the service closest to what you need"),
  budget: z.string().optional(),
  details: z.string().min(10, "Tell us a little more about your project (min. 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const shortNames: Record<string, string> = {
  "software-mobile-development": "Software & Mobile",
  "it-consultancy-networking": "IT & Networking",
  "cybersecurity-awareness-training": "Cybersecurity",
  "digital-marketing-social-media": "Marketing",
  "graphic-design-branding-ui-ux": "Design & Brand",
  "e-commerce-commerce": "E-commerce",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-orange" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "", budget: "" },
  });

  const selectedService = watch("service");

  const onSubmit = async (_data: ContactFormValues) => {
    // TODO: wire up to real form submission endpoint (e.g. email service or backend API)
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10">
          <CheckCircle2 className="h-8 w-8 text-orange" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-bold text-navy">Message received</h3>
        <p className="max-w-sm text-sm text-navy/70">
          Thanks for reaching out. We read every message and will reply within one business day
          with next steps.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8" aria-label="Contact form">
      <fieldset className="space-y-5">
        <legend className="mb-5 text-xs font-semibold uppercase tracking-wide text-orange">About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Chikondi Banda"
              className="mt-1.5"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            <FieldError id="name-error" message={errors.name?.message} />
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="mt-1.5"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>
        </div>
        <div>
          <Label htmlFor="phone">
            Phone or WhatsApp <span className="font-normal text-navy/50">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+265 99 000 0000"
            className="mt-1.5"
            {...register("phone")}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-5 text-xs font-semibold uppercase tracking-wide text-orange">Your project</legend>

        <div>
          <p className="text-sm font-medium text-navy" id="service-label">
            What do you need help with?
          </p>
          <div
            role="radiogroup"
            aria-labelledby="service-label"
            aria-describedby={errors.service ? "service-error" : undefined}
            className="mt-2.5 flex flex-wrap gap-2"
          >
            {services.map((service) => {
              const checked = selectedService === service.slug;
              return (
                <label
                  key={service.slug}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orange has-[:focus-visible]:ring-offset-2",
                    checked
                      ? "border-navy bg-navy text-white"
                      : "border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
                  )}
                >
                  <input type="radio" value={service.slug} className="sr-only" {...register("service")} />
                  <service.icon className="h-3.5 w-3.5 text-orange" aria-hidden="true" />
                  {shortNames[service.slug] ?? service.title}
                </label>
              );
            })}
          </div>
          <FieldError id="service-error" message={errors.service?.message} />
        </div>

        <div>
          <Label htmlFor="budget">
            Rough budget <span className="font-normal text-navy/50">(optional)</span>
          </Label>
          <div className="relative mt-1.5">
            <select
              id="budget"
              className="flex h-11 w-full appearance-none rounded-lg border border-navy/20 bg-white px-4 pr-10 text-sm text-navy transition-colors focus-visible:border-orange"
              {...register("budget")}
            >
              <option value="">Select a range</option>
              {budgets.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="details">Project details</Label>
          <Textarea
            id="details"
            placeholder="What are you building, who is it for, and when do you need it?"
            className="mt-1.5 min-h-36"
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? "details-error" : undefined}
            {...register("details")}
          />
          <FieldError id="details-error" message={errors.details?.message} />
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs text-navy/55">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          We only use your details to reply to this enquiry.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send enquiry"}
          {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </Button>
      </div>
    </form>
  );
}
