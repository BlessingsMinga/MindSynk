export interface PricingTier {
  name: string;
  tagline: string;
  // TODO: replace with real MindSynk pricing guide figures once finalized
  upfront: string;
  monthly: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    tagline: "For small businesses getting online for the first time.",
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
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale their digital presence.",
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
    highlighted: true,
  },
  {
    name: "Custom",
    tagline: "For organisations with unique or complex requirements.",
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
  },
];
