export interface PortfolioItem {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  // TODO: replace with real project screenshot
  image: string;
  client: string;
  timeline: string;
  problem: string;
  approach: string[];
  result: string[];
  stack: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "medialert",
    name: "MediAlert",
    description: "A health-alert platform connecting patients with timely medical information and reminders.",
    tags: ["React Native", "Firebase", "Node.js"],
    image: "/placeholders/medialert.svg",
    client: "Healthcare provider network",
    timeline: "4 months",
    problem:
      "Patients were missing critical medication schedules and follow-up appointments because reminders relied on manual phone calls from clinic staff, which didn't scale as the patient base grew.",
    approach: [
      "Ran discovery sessions with clinic staff and patients to map the existing reminder workflow and failure points.",
      "Designed a mobile-first app with offline-friendly reminders and SMS fallback for low-connectivity areas.",
      "Built a Firebase-backed notification pipeline with a Node.js service for scheduling and clinic-side management.",
    ],
    result: [
      "Missed appointment rate dropped significantly within the first three months of rollout.",
      "Clinic staff reclaimed hours per week previously spent on manual reminder calls.",
      "Positive adoption across the initial pilot group of patients.",
    ],
    stack: ["React Native", "Firebase", "Node.js", "Cloud Messaging"],
  },
  {
    slug: "pezahome",
    name: "PezaHome",
    description: "A property listing and home services marketplace built for the local market.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    image: "/placeholders/pezahome.svg",
    client: "Real estate & home services startup",
    timeline: "5 months",
    problem:
      "Property seekers and home service providers had no trusted, centralized platform, forcing them to rely on fragmented social media groups and word of mouth.",
    approach: [
      "Designed a searchable listings experience with verified provider profiles and structured filters.",
      "Built a relational data model in PostgreSQL to support listings, bookings, and provider reviews.",
      "Implemented a responsive React + TypeScript front end optimized for mobile browsing.",
    ],
    result: [
      "Consolidated hundreds of listings into a single searchable marketplace at launch.",
      "Reduced average time-to-match between seekers and providers.",
      "Established a foundation for future payments and booking features.",
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Node.js"],
  },
  {
    slug: "unisacco",
    name: "UniSacco",
    description: "A digital savings and loan management system for university savings cooperatives.",
    tags: ["React", "Node.js", "AWS"],
    image: "/placeholders/unisacco.svg",
    client: "University savings cooperative",
    timeline: "6 months",
    problem:
      "Member savings and loan records were tracked manually in spreadsheets, leading to reconciliation errors and slow loan approval times.",
    approach: [
      "Mapped the cooperative's savings, contribution, and loan approval workflows with committee members.",
      "Built a role-based web application covering member accounts, contributions, and loan applications.",
      "Deployed on AWS with automated backups and audit logging for financial accountability.",
    ],
    result: [
      "Eliminated manual reconciliation errors in member savings records.",
      "Cut average loan approval turnaround time significantly.",
      "Gave committee members real-time visibility into cooperative finances.",
    ],
    stack: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
