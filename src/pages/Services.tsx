import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { TagPill } from "@/components/TagPill";
import { CTABand } from "@/components/CTABand";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services"
        description="Software & mobile development, AI-powered products, e-commerce & commerce, IT consultancy & networking, digital marketing & social media, and graphic design & branding from MindSynk Technologies."
      />

      <PageHero
        eyebrow="What we do"
        title="Services built for real growth"
        description="Six disciplines, one partnership — engineering, AI, commerce, infrastructure, marketing, and design working together."
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="grid gap-6 rounded-2xl border border-navy/10 bg-white p-8 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10">
                <service.icon className="h-7 w-7 text-orange" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                <p className="mt-3 text-navy/70">{service.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
