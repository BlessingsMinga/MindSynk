import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildHeadTags, formatTitle } from "@/lib/seo";
import { SeoCollectorContext } from "@/lib/seo-context";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}

export function Seo({ title, description, image, noIndex }: SeoProps) {
  const { pathname } = useLocation();
  const collect = useContext(SeoCollectorContext);

  // Effects don't run on the server, so report during render for the prerender step.
  collect?.({ title, description, path: pathname, image, noIndex });

  useEffect(() => {
    document.title = formatTitle(title);
    for (const { tag, key, attrs } of buildHeadTags({ title, description, path: pathname, image, noIndex })) {
      let el = document.head.querySelector(`${tag}[${key[0]}="${key[1]}"]`);
      if (!el) {
        el = document.createElement(tag);
        document.head.appendChild(el);
      }
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
    }
  }, [title, description, pathname, image, noIndex]);

  return null;
}
