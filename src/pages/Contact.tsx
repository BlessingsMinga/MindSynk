import { Mail, MessageCircle, MapPin, Clock, type LucideIcon } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

// TODO: replace with real MindSynk contact details
const WHATSAPP_URL = `https://wa.me/265992092766?text=${encodeURIComponent(
  "Hi MindSynk, I'd like to talk about a project."
)}`;

interface Channel {
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
  href?: string;
}

const channels: Channel[] = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mindsynk.tech",
    hint: "Best for detailed briefs and attachments",
    href: "mailto:hello@mindsynk.tech",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp or call",
    value: "+265 99 209 2766",
    hint: "Quickest way to reach us during the day",
    href: WHATSAPP_URL,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lilongwe, Malawi",
    hint: "Meetings by appointment",
  },
];

const steps = [
  {
    title: "We reply within one business day",
    body: "A real person reads your message and comes back with questions or a time to talk.",
  },
  {
    title: "A short discovery call",
    body: "Thirty minutes to understand goals, constraints, and timelines. No slides, no pressure.",
  },
  {
    title: "A clear proposal",
    body: "Scope, timeline, and a fixed price so you know exactly what you are signing up for.",
  },
];

const channelCardClass =
  "flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-4 transition-colors";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Get in touch with MindSynk Technologies to start your next software, cloud, or digital marketing project."
      />

      <PageHero
        eyebrow="Get in touch"
        title="Let's build something together"
        description="Tell us what you're working on. We'll reply within one business day with next steps."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">Contact</span>
            <h2 className="mt-3 text-3xl font-bold text-navy">Tell us about your project</h2>
            <p className="mt-4 text-navy/70">
              Whether it&apos;s a rough idea or a written brief, the form is the fastest way to get a
              considered reply. Prefer to talk first? Use any of the channels below.
            </p>

            <ul className="mt-8 space-y-3">
              {channels.map(({ icon: Icon, label, value, hint, href }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-navy/50">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate font-semibold text-navy">{value}</span>
                      <span className="mt-0.5 block text-sm text-navy/60">{hint}</span>
                    </span>
                  </>
                );
                const external = href?.startsWith("http");
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className={`${channelCardClass} hover:border-orange/50 hover:bg-orange/[0.03]`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={channelCardClass}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 flex items-center gap-2 text-sm text-navy/60">
              <Clock className="h-4 w-4 text-orange" aria-hidden="true" />
              Monday to Friday, 08:00 to 17:00 CAT
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_8px_32px_rgba(29,30,50,0.06)] sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-orange">What happens next</span>
            <h2 className="mt-3 text-3xl font-bold text-navy">No surprises, from first reply to proposal</h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-navy/10 bg-white p-6">
                <span className="text-xs font-semibold text-navy/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}
