import type { LucideIcon } from "lucide-react";
import { Code2, Cloud, Megaphone } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  tags: string[];
}

export const services: Service[] = [
  {
    slug: "software-mobile-development",
    title: "Software & Mobile Development",
    description: "Custom web and mobile applications built for real-world African businesses.",
    detail:
      "We design and build custom software, web platforms, and mobile apps tailored to your operations — from customer-facing products to internal tools that streamline how your team works.",
    icon: Code2,
    tags: ["React", "React Native", "Node.js", "TypeScript", "Firebase"],
  },
  {
    slug: "cloud-it-consultancy",
    title: "Cloud & IT Consultancy",
    description: "Reliable infrastructure, cloud migration, and IT strategy that scales with you.",
    detail:
      "We help organisations move to the cloud, modernise their IT infrastructure, and put in place systems that stay reliable as the business grows — with practical, cost-aware guidance.",
    icon: Cloud,
    tags: ["AWS", "Google Cloud", "DevOps", "Networking", "IT Support"],
  },
  {
    slug: "digital-marketing-design",
    title: "Digital Marketing & Design",
    description: "Brand identity, content, and digital campaigns that get noticed.",
    detail:
      "From brand identity to social media campaigns and content strategy, we help businesses show up clearly and consistently online — with design that matches the quality of the product behind it.",
    icon: Megaphone,
    tags: ["Branding", "Figma", "SEO", "Social Media", "Content Strategy"],
  },
];
