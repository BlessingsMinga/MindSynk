import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { TagPill } from "@/components/TagPill";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import heroImage from "@/assets/glasses.jpg";
import Scanner from "@/components/react-bits/Scanner";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[80%_20%] opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <Scanner
          color1="#1D1E32"
          color2="#F15922"
          color3="#FFFFFF"
          speed={0.4}
          sweepSpeed={0.2}
          scanDirection="diagonal"
          brightness={0.9}
          vignette={0.6}
          grain={false}
          mouseInteraction={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange"
        >
          Malawian ICT Partnership
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Powering <span className="text-orange">Progress</span> Through
          <br className="hidden sm:block" /> Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          MindSynk Technologies is a Malawian ICT partnership building software, cloud
          infrastructure, and digital brands for businesses ready to grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {services.map((service) => (
            <TagPill key={service.slug}>/{service.heroLabel ?? service.title.split(" ")[0]}</TagPill>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/contact" className={cn(buttonVariants({ variant: "solid", size: "lg" }))}>
            Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/work"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/30 text-white hover:bg-white hover:text-navy"
            )}
          >
            View our Work
          </Link>
        </motion.div>

        <p className="mt-8 text-xs font-medium text-white/40">
          Registered in Malawi · BRN-L5SB7RNK
        </p>
      </div>
    </section>
  );
}
