import { Mail, Phone, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Get in touch with MindSynk Technologies to start your next software, cloud, or digital marketing project."
      />

      <PageHero
        eyebrow="Get in touch"
        title="Get a quote"
        description="Tell us about what you're building and we'll get back to you with next steps."
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-xl font-bold text-navy">Contact details</h2>
            <ul className="mt-6 space-y-5 text-sm text-navy/70">
              {/* TODO: replace with real MindSynk contact details */}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange" aria-hidden="true" />
                <a href="mailto:hello@mindsynk.tech" className="hover:text-navy">hello@mindsynk.tech</a>
              </li>
              {/* TODO: replace with real MindSynk contact details */}
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange" aria-hidden="true" />
                <a href="tel:+265992092766" className="hover:text-navy">+265 99 209 2766</a>
              </li>
              {/* TODO: replace with real MindSynk address */}
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange" aria-hidden="true" />
                Lilongwe, Malawi
              </li>
            </ul>

            {/* TODO: replace with real map embed once office address is confirmed */}
            <div
              className="mt-8 flex aspect-video items-center justify-center rounded-2xl border border-navy/10 bg-offwhite text-sm text-navy/40"
              role="img"
              aria-label="Map placeholder"
            >
              Map coming soon
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
