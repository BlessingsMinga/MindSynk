import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from "@/config/site";

export interface SeoData {
  title: string;
  description: string;
  /** Route path, e.g. "/work/medialert". Used for the canonical and og:url. */
  path: string;
  image?: string;
  /** Keep the page out of search results (e.g. the 404 page). */
  noIndex?: boolean;
}

/** A head tag, identified by `key` so the client can find and update the existing element. */
export interface HeadTag {
  tag: "meta" | "link";
  key: [attribute: string, value: string];
  attrs: Record<string, string>;
}

export function formatTitle(title: string) {
  return title === "Home" ? `${SITE_NAME} | Powering Progress Through Technology` : `${title} | ${SITE_NAME}`;
}

/** The single source of truth for per-page head tags, shared by the browser and the prerender step. */
export function buildHeadTags({ title, description, path, image = DEFAULT_OG_IMAGE, noIndex }: SeoData): HeadTag[] {
  const fullTitle = formatTitle(title);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const meta = (attribute: "name" | "property", value: string, content: string): HeadTag => ({
    tag: "meta",
    key: [attribute, value],
    attrs: { [attribute]: value, content },
  });

  return [
    meta("name", "description", description),
    meta("name", "robots", noIndex ? "noindex, follow" : "index, follow"),
    // A noindex page shouldn't claim a canonical URL; point it at the home page instead of a URL that doesn't exist.
    { tag: "link", key: ["rel", "canonical"], attrs: { rel: "canonical", href: noIndex ? absoluteUrl("/") : url } },
    meta("property", "og:type", "website"),
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:locale", "en_GB"),
    meta("property", "og:title", fullTitle),
    meta("property", "og:description", description),
    meta("property", "og:url", url),
    meta("property", "og:image", imageUrl),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", fullTitle),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", imageUrl),
  ];
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Serialises the page head for prerendered HTML. */
export function renderHeadHtml(seo: SeoData) {
  const tags = buildHeadTags(seo).map(({ tag, attrs }) => {
    const attributes = Object.entries(attrs)
      .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
      .join(" ");
    return `<${tag} ${attributes} />`;
  });
  return [`<title>${escapeHtml(formatTitle(seo.title))}</title>`, ...tags].join("\n    ");
}
