import { ArrowRight, Eye, HeartHandshake, Leaf, Lightbulb, ShieldCheck, Target, Trophy, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import ProfileCard from "@/components/react-bits/ProfileCard";
import BorderGlow from "@/components/react-bits/BorderGlow";
import { CTABand } from "@/components/CTABand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { team } from "@/data/team";
import futureImage from "@/assets/idea.jpeg";
import processImage from "@/assets/Process.jpg";
import blessingsPortrait from "@/assets/bless_1.png";
import innocentPortrait from "@/assets/Inno_3.jpeg";

const values = [
  { icon: Lightbulb, title: "Innovation", copy: "We explore practical new ideas that create better ways forward." },
  { icon: Trophy, title: "Excellence", copy: "We hold ourselves to a high standard in every detail we deliver." },
  { icon: Leaf, title: "Sustainability", copy: "We build solutions designed to remain useful as businesses grow." },
  { icon: ShieldCheck, title: "Integrity", copy: "We lead with honesty, transparency, and accountability." },
  { icon: UsersRound, title: "Collaboration", copy: "The strongest work happens when we build it together." },
  { icon: HeartHandshake, title: "Client-centred", copy: "Your goals, context, and customers shape our decisions." },
];

const process = [
  ["01", "Initial consultation", "We learn about your ambitions, audience, and the opportunity in front of you."],
  ["02", "Research & design", "We turn insight into a clear strategy and a thoughtful experience for your users."],
  ["03", "Development & implementation", "Our team builds reliable, scalable solutions with quality at every stage."],
  ["04", "Launch & support", "We launch with confidence and stay close to help your product keep improving."],
];

export default function About() {
  return <Layout><Seo title="About" description="MindSynk Technologies is a Malawian ICT partnership building software, cloud infrastructure, and digital brands." />
    <PageHero eyebrow="About MindSynk" title="Technology with a human point of view" description="We are a Malawian digital partner helping ambitious organisations turn meaningful ideas into durable products." />

    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28"><div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Our story</span><h2 className="mt-3 text-3xl sm:text-4xl">Built for the work that moves people forward.</h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-navy/70 sm:text-base"><p>MindSynk Technologies was founded to make capable digital expertise more accessible to businesses in Malawi and beyond. We bring software, cloud, design, and strategy into one close-knit team.</p><p>That means fewer hand-offs, clearer decisions, and work shaped around the people using it. From a first idea to a product in the hands of customers, we are here for the whole journey.</p></div>
        <Link to="/contact" className={cn(buttonVariants({ variant: "outline" }), "mt-8 gap-2")}>Start a conversation <ArrowRight className="h-4 w-4" /></Link></div>
      <BorderGlow className="min-h-80 sm:min-h-96" backgroundColor="#0a1b35" borderRadius={24} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><div className="relative min-h-80 overflow-hidden rounded-3xl sm:min-h-96"><img src={futureImage} alt="A hand launching a digital rocket" className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-orange/10" /><div className="absolute right-5 bottom-5 left-5 max-w-xs rounded-2xl border border-white/15 bg-navy/45 p-5 backdrop-blur-sm"><p className="text-sm font-semibold text-white">One partner, from idea to impact.</p><p className="mt-1 text-sm leading-6 text-white/75">We combine perspective, craft, and technology to make progress feel possible.</p></div></div></BorderGlow>
    </div></section>

    <section className="bg-navy py-16 sm:py-20"><div className="mx-auto grid max-w-6xl gap-5 px-6 lg:grid-cols-2">
      <BorderGlow backgroundColor="#ffffff" borderRadius={16} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><div className="p-7 sm:p-9"><div className="flex items-center gap-3 text-orange"><Target className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wide">Our mission</span></div><p className="mt-5 text-xl font-semibold leading-8 text-navy">To make thoughtful technology a force for sustainable progress.</p><p className="mt-3 text-sm leading-6 text-navy/65">We help people and organisations solve important problems with digital tools they can rely on.</p></div></BorderGlow>
      <BorderGlow backgroundColor="#ffffff" borderRadius={16} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><div className="p-7 sm:p-9"><div className="flex items-center gap-3 text-orange"><Eye className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wide">Our vision</span></div><p className="mt-5 text-xl font-semibold leading-8 text-navy">A more connected, capable digital future for Malawi and the region.</p><p className="mt-3 text-sm leading-6 text-navy/65">We see local organisations using great technology with confidence, clarity, and ambition.</p></div></BorderGlow>
    </div></section>

    <section className="bg-offwhite py-20 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">What guides us</span><h2 className="mt-3 text-3xl sm:text-4xl">The values that define us</h2><p className="mt-4 text-navy/65">The principles behind how we show up, make decisions, and work with our partners.</p></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(({ icon: Icon, title, copy }) => <BorderGlow key={title} backgroundColor="#ffffff" borderRadius={16} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><article className="p-6"><Icon className="h-5 w-5 text-orange" /><h3 className="mt-5 text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-navy/65">{copy}</p></article></BorderGlow>)}</div>
    </div></section>

    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Our team</span><h2 className="mt-3 text-3xl sm:text-4xl">A team that cares about the outcome.</h2><p className="mt-5 leading-7 text-navy/65">We are designers, developers, and strategists who believe strong partnerships produce stronger digital experiences.</p></div><div className="grid gap-5 sm:grid-cols-2">{team.map((member) => <ProfileCard key={member.name} name={member.name} title={member.role} handle={member.name.toLowerCase().replace(/[^a-z0-9]+/g, "")} bio={member.bio} linkedinUrl={member.linkedinUrl} avatarUrl={member.name === "Blessings Minga" ? blessingsPortrait : member.name === "Innocent Phakira" ? innocentPortrait : undefined} avatarPosition={member.name === "Innocent Phakira" ? "center center" : undefined} />)}</div></div></section>

    <section className="bg-offwhite py-20 sm:py-28"><div className="mx-auto max-w-6xl px-6"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Our process</span><h2 className="mt-3 text-3xl sm:text-4xl">A clear path from idea to launch.</h2><p className="mt-5 max-w-md leading-7 text-navy/65">We keep the process collaborative and visible, so you always know what is happening and why.</p></div><BorderGlow backgroundColor="#f8f5f0" borderRadius={24} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><img src={processImage} alt="MindSynk project process" className="h-48 w-full rounded-3xl object-cover object-center sm:h-56" /></BorderGlow></div><div className="mt-10 grid gap-4 sm:grid-cols-2">{process.map(([number, title, description]) => <BorderGlow key={number} backgroundColor="#ffffff" borderRadius={24} glowColor="18 80 60" colors={["#f15922", "#43b1df", "#ffb088"]}><article className="p-7 sm:p-9"><span className="text-sm font-bold text-orange">{number}</span><h3 className="mt-4 text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-navy/65">{description}</p></article></BorderGlow>)}</div></div></section>
    <CTABand />
  </Layout>;
}
