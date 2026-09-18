import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { CTABand } from "@/components/CTABand";
import { TagPill } from "@/components/TagPill";
import { buttonVariants } from "@/components/ui/button";
import { getPortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getPortfolioItem(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Layout>
      <Seo
        title={project.name}
        description={project.description}
      />

      <section className="bg-offwhite">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm font-semibold text-navy/60 hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to work
          </Link>
          <span className="mt-6 inline-block rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange">
            Case study
          </span>
          <h1 className="mt-4 text-4xl font-bold text-navy sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy/70">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
          <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-semibold text-navy">Client</dt>
              <dd className="mt-1 text-navy/70">{project.client}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Timeline</dt>
              <dd className="mt-1 text-navy/70">{project.timeline}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy">The problem</h2>
            <p className="mt-4 max-w-3xl text-navy/70">{project.problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Our approach</h2>
            <ul className="mt-4 space-y-3">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-3 text-navy/70">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">The result</h2>
            <ul className="mt-4 space-y-3">
              {project.result.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-navy/70">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TagPill key={tech}>{tech}</TagPill>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-navy/10 pt-8">
          <Link to="/work" className={cn(buttonVariants({ variant: "outline" }))}>
            View more projects
          </Link>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
