export interface PricingTier {
  name: string;
  tagline: string;
  bestFor: string;
  buildTime: string;
  // TODO: replace with real MindSynk pricing guide figures once finalized
  upfront: string;
  monthly: string;
  features: string[];
  includedMonthly: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    tagline: "For small businesses getting online for the first time.",
    bestFor: "Sole traders, small shops, consultants and clinics getting online for the first time.",
    buildTime: "Build · 1–2 weeks",
    // TODO: replace with real MindSynk pricing guide figures
    upfront: "MWK 800,000",
    monthly: "MWK 45,000 /mo",
    features: [
      "Single-page or brochure website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "Email support",
    ],
    includedMonthly: [
      "Hosting, domain, SSL & security",
      "Uptime monitoring",
      "Up to 2 content changes / month",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale their digital presence.",
    bestFor: "Restaurants, lodges, salons, agencies and event organisers needing bookings, ordering or payments.",
    buildTime: "Build · 3–5 weeks",
    // TODO: replace with real MindSynk pricing guide figures
    upfront: "MWK 2,200,000",
    monthly: "MWK 120,000 /mo",
    features: [
      "Multi-page website or web app",
      "Custom UI/UX design",
      "CMS integration",
      "Basic cloud hosting & monitoring",
      "3 rounds of revisions",
      "Priority email & phone support",
    ],
    includedMonthly: [
      "Everything in Starter",
      "Ongoing content updates",
      "Monthly performance summary",
      "Priority support + small feature tweaks",
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    tagline: "For organisations with unique or complex requirements.",
    bestFor: "POS & inventory, ticketing platforms, multi-user dashboards and internal management systems.",
    buildTime: "Build · Typically 6–12 weeks",
    // TODO: replace with real MindSynk pricing guide figures
    upfront: "Custom quote",
    monthly: "Custom retainer",
    features: [
      "Full software or mobile product build",
      "Cloud architecture & DevOps setup",
      "Ongoing dedicated support",
      "Scalable, multi-environment infrastructure",
      "Dedicated project manager",
    ],
    includedMonthly: [
      "Hosting & infrastructure",
      "Maintenance + monthly dev hours",
      "Priority support with response SLA",
      "Ongoing feature roadmap",
    ],
  },
];

export interface PricingAddOn {
  name: string;
  description: string;
  price: string;
  priceNote: string;
}

export const pricingAddOns: PricingAddOn[] = [
  {
    name: "Logo & basic brand kit",
    description: "A simple logo, colour palette and brand mark for a consistent identity across web and print.",
    price: "MWK 400,000",
    priceNote: "one-off",
  },
  {
    name: "Professional copywriting",
    description: "Web copy written to sell, tuned to your audience and the local market.",
    price: "MWK 75,000",
    priceNote: "per page",
  },
  {
    name: "E-commerce / online store",
    description: "Sell online with product listings, cart, checkout and local mobile-money payments.",
    price: "From MWK 800,000",
    priceNote: "+ MWK 100,000 /mo",
  },
  {
    name: "Extra pages",
    description: "Add more pages beyond your package limit.",
    price: "MWK 90,000",
    priceNote: "per page",
  },
  {
    name: "Social media management",
    description: "Content planning, posting and monthly reporting across your social channels.",
    price: "MWK 250,000",
    priceNote: "per month",
  },
  {
    name: "Rush delivery",
    description: "Prioritised build so you launch sooner — perfect when there's a deadline.",
    price: "+30% of upfront",
    priceNote: "one-off",
  },
];
