import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to build something that lasts?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us about your project and we&apos;ll get back to you with next steps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className={cn(buttonVariants({ variant: "solid", size: "lg" }))}>
            Start a Project →
          </Link>
          {/* TODO: replace with real MindSynk contact email */}
          <a href="mailto:hello@mindsynk.tech" className="text-sm font-semibold text-white/80 hover:text-white">
            Email us
          </a>
        </div>
        <p className="mt-6 text-sm text-white/50">
          {/* TODO: replace with real MindSynk contact details */}
          hello@mindsynk.tech · +265 99 209 2766 · Lilongwe, Malawi
        </p>
      </div>
    </section>
  );
}
