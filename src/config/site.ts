// TODO: confirm the production domain before launch — canonical URLs, Open Graph tags and the sitemap all derive from it.
export const SITE_URL = "https://mindsynk.tech";
export const SITE_NAME = "MindSynk Technologies";
export const SITE_TAGLINE = "Powering Progress Through Technology";
export const DEFAULT_DESCRIPTION =
  "MindSynk Technologies is a Malawian ICT partnership delivering software & mobile development, cloud & IT consultancy, and digital marketing & design.";
/** 1200×630 share image served from /public. */
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const CONTACT_EMAIL = "hello@mindsynk.tech";
export const CONTACT_PHONE = "+265992092766";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
