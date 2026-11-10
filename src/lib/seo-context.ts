import { createContext } from "react";
import type { SeoData } from "@/lib/seo";

/** Set only while prerendering: receives each page's SEO data so it can be serialised into <head>. */
export const SeoCollectorContext = createContext<((seo: SeoData) => void) | null>(null);
