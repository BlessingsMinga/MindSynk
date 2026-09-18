import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { CTABand } from "@/components/CTABand";
import { portfolioItems } from "@/data/portfolio";

export default function Work() {
  return (
    <Layout>
      <Seo
        title="Our Work"
        description="A selection of projects delivered by MindSynk Technologies, including MediAlert, PezaHome, and UniSacco."
      />

      <PageHero
        eyebrow="Our work"
        title="Projects we've built"
        description="A look at some of the products we've delivered for our partners."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
