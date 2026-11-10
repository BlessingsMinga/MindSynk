# MindSynk Technologies website

Marketing site for MindSynk Technologies — React 19, TypeScript, Vite, Tailwind CSS v4 and React Router.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload (client-rendered, no prerendering) |
| `npm run build` | Type-check, build, then prerender every route to static HTML in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |
| `npm run typecheck` | Type-check only |

## Project layout

```
src/
  pages/            one component per route (all but Home are lazy-loaded)
  components/       shared sections and UI
    ui/             base primitives (button, input, …)
    react-bits/     animated effects; the large canvas/WebGL ones stay .jsx with a typed .d.ts beside them
  data/             site content: services, pricing, portfolio, team, FAQ, …
  config/site.ts    domain, site name and contact details used for SEO
  lib/seo.ts        per-page <head> tags, shared by the browser and the prerender step
  entry-server.tsx  renders a route to HTML; also defines the list of prerendered routes
scripts/
  prerender.mjs     writes dist/<route>/index.html, 404.html, sitemap.xml and robots.txt
```

## SEO and prerendering

`npm run build` renders each route to static HTML, so search engines and link previews (WhatsApp, LinkedIn, X) see the
real content and per-page title, description, canonical URL and Open Graph tags. The browser then hydrates the page.

- Give each page a `<Seo title description />` — it drives both the prerendered `<head>` and client-side navigation.
- New routes must be added to `routes` in `src/entry-server.tsx`; portfolio case studies are added automatically
  from `src/data/portfolio.ts`. The sitemap is generated from the same list.
- The production domain lives in `src/config/site.ts` (and the JSON-LD block in `index.html`).
- The default share image is `public/og-image.jpg` (1200×630).

## Deployment

Upload `dist/` to any static host. Each route is a folder with its own `index.html`, and `404.html` is served for
unknown paths by Netlify, Vercel, Cloudflare Pages and Firebase Hosting. Hosts that need an explicit SPA fallback should
rewrite unknown paths to `/404.html`, not `/index.html`.

## Images

Store images in `src/assets` as WebP, sized for how they are displayed (about 1920px wide for full-bleed backgrounds and
800px for portraits). Add `loading="lazy"` to anything below the fold.
