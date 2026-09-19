import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, Network, Megaphone, Palette, ShoppingCart } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  tags: string[];
  heroLabel?: string;
}

export const services: Service[] = [
  {
    slug: "software-mobile-development",
    title: "Software & Mobile Development",
    description: "Full-lifecycle web and mobile applications, built and supported end to end.",
    detail:
      "Full-lifecycle design, development, and maintenance of web and mobile applications — from initial concept through deployment and ongoing support. Built on React, Next.js, Python/Django, and Node.js, with mobile delivery capability including offline-first approaches (demonstrated in the MediAlert project) suited to Malawi's variable connectivity.",
    icon: Code2,
    tags: ["React", "Next.js", "Python/Django", "Node.js", "Offline-first"],
  },
  {
    slug: "it-consultancy-networking",
    title: "IT Consultancy & Networking",
    description: "Technology strategy and infrastructure guidance aligned to business goals.",
    detail:
      "Expert guidance on technology strategy and IT infrastructure decisions, helping clients align technology spend with business objectives.",
    icon: Network,
    tags: ["IT Strategy", "Networking", "Infrastructure", "IT Support"],
  },
  {
    slug: "digital-marketing-social-media",
    title: "Digital Marketing & Social Media",
    description: "Data-informed marketing strategies that grow brand visibility and engagement.",
    detail:
      "Data-informed digital marketing strategies across web and social platforms, backed by Minga's Professional Diploma in Social Media Marketing & Management, strengthening client brand visibility and customer engagement.",
    icon: Megaphone,
    tags: ["Social Media", "Digital Marketing", "Content Strategy", "SEO"],
  },
  {
    slug: "graphic-design-branding-ui-ux",
    title: "Graphic Design, Branding & UI/UX",
    description: "Human-centred brand identity and interface design across print and digital.",
    detail:
      "Human-centred interface and brand identity design — logos, brand systems, print and digital collateral — backed by 3+ years of brand identity and print design experience.",
    icon: Palette,
    tags: ["Branding", "UI/UX", "Figma", "Print Design"],
  },
  {
    slug: "ai-powered-products",
    title: "AI-Powered Products",
    description: "LLM features, automation, and intelligent tools built for real business use cases.",
    detail:
      "Practical AI that ships — chat assistants, document Q&A, content automation, and workflow tools powered by large language models. We build RAG pipelines, intelligent search, and automation designed around real local use cases and real connectivity constraints, not demos that stall in production.",
    icon: BrainCircuit,
    tags: ["LLMs", "RAG", "Automation", "Prompt Engineering"],
    heroLabel: "AI",
  },
  {
    slug: "e-commerce-commerce",
    title: "E-commerce & Commerce",
    description: "Scalable online stores and payments tuned for the local market.",
    detail:
      "Online stores that actually convert — product catalogues, cart and checkout, order management, and payments built around local mobile money (Airtel Money, TNM Mpamba) as well as card payments. Delivered on Shopify, WooCommerce, or a custom stack depending on your ambitions.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Payments", "Mobile money"],
    heroLabel: "E-commerce",
  },
];
