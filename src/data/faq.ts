export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaq: FaqItem[] = [
  {
    question: "What does the upfront build cost cover?",
    answer:
      "It covers discovery, design, and development of the initial version of your product — everything needed to get to launch, scoped to your project during a paid discovery phase.",
  },
  {
    question: "Why is there a monthly retainer on top of the build cost?",
    answer:
      "The retainer covers hosting, monitoring, bug fixes, and ongoing iteration after launch, so your product keeps running smoothly and can evolve as your business grows — without a new contract every time.",
  },
  {
    question: "Can I cancel the monthly retainer after launch?",
    answer:
      "Yes. The retainer is month-to-month with no long-term lock-in. Most clients keep it on for support and continued improvements, but you're free to move maintenance in-house at any time.",
  },
  {
    question: "How is a final quote calculated?",
    answer:
      "Every project is different, so the figures shown are indicative. After discovery, we send a fixed quote based on scope, timeline, and complexity — no surprise costs once work begins.",
  },
  {
    question: "Do you work with businesses outside Malawi?",
    answer:
      "Yes — while we're based in Malawi and understand the local market well, we work remotely with clients across the region and beyond.",
  },
];
