import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App.tsx";
import { SeoCollectorContext } from "@/lib/seo-context";
import { renderHeadHtml, type SeoData } from "@/lib/seo";
import { portfolioItems } from "@/data/portfolio";
import { DEFAULT_DESCRIPTION, SITE_URL } from "@/config/site";

export { SITE_URL };

/** Every route that gets its own prerendered HTML file. `priority` feeds the sitemap. */
export const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/work", priority: 0.8 },
  ...portfolioItems.map((item) => ({ path: `/work/${item.slug}`, priority: 0.6 })),
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

/** Renders a route to static HTML, waiting for lazy routes to resolve. */
export async function render(url: string) {
  let seo: SeoData | null = null;
  const { prelude } = await prerender(
    <StrictMode>
      <SeoCollectorContext.Provider value={(data) => (seo = data)}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoCollectorContext.Provider>
    </StrictMode>
  );

  const html = await new Response(prelude).text();

  return { html, head: renderHeadHtml(seo ?? { title: "Home", description: DEFAULT_DESCRIPTION, path: url }) };
}
