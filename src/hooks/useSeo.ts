import { useEffect } from "react";

interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SITE_NAME = "Creche Amélia";

const toAbsoluteUrl = (value: string) => {
  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return value;
  }
};

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  const previous = element.getAttribute("content");
  element.setAttribute("content", content);
  return () => {
    if (previous === null) element?.remove();
    else element?.setAttribute("content", previous);
  };
};

export const useSeo = ({ title, description, image, type = "website" }: SeoOptions) => {
  useEffect(() => {
    const restorers: Array<() => void> = [];
    const previousTitle = document.title;

    const fullTitle = title ? `${title} | ${SITE_NAME}` : previousTitle;
    if (title) document.title = fullTitle;

    restorers.push(setMeta('meta[property="og:title"]', "property", "og:title", fullTitle));
    restorers.push(setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle));
    restorers.push(setMeta('meta[property="og:type"]', "property", "og:type", type));
    restorers.push(setMeta('meta[property="og:url"]', "property", "og:url", window.location.href));

    if (description) {
      restorers.push(setMeta('meta[name="description"]', "name", "description", description));
      restorers.push(setMeta('meta[property="og:description"]', "property", "og:description", description));
      restorers.push(setMeta('meta[name="twitter:description"]', "name", "twitter:description", description));
    }

    if (image) {
      const absoluteImage = toAbsoluteUrl(image);
      restorers.push(setMeta('meta[property="og:image"]', "property", "og:image", absoluteImage));
      restorers.push(setMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", absoluteImage));
      restorers.push(setMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImage));
    }

    return () => {
      document.title = previousTitle;
      restorers.forEach((restore) => restore());
    };
  }, [title, description, image, type]);
};
