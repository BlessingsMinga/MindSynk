export interface PortfolioItem {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  // TODO: replace with real project screenshot
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "medialert",
    name: "MediAlert",
    description: "A health-alert platform connecting patients with timely medical information and reminders.",
    tags: ["React Native", "Firebase", "Node.js"],
    image: "/placeholders/medialert.svg",
  },
  {
    slug: "pezahome",
    name: "PezaHome",
    description: "A property listing and home services marketplace built for the local market.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    image: "/placeholders/pezahome.svg",
  },
  {
    slug: "unisacco",
    name: "UniSacco",
    description: "A digital savings and loan management system for university savings cooperatives.",
    tags: ["React", "Node.js", "AWS"],
    image: "/placeholders/unisacco.svg",
  },
];
