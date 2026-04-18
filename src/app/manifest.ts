import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { DEFAULT_LOCALE, isAppLocale } from "@/i18n/config";

function detectLocaleFromReferer(referer: string | null) {
  if (!referer) {
    return null;
  }

  try {
    const pathname = new URL(referer).pathname;
    const candidate = pathname.split("/")[1];

    return isAppLocale(candidate) ? candidate : null;
  } catch {
    return null;
  }
}

function detectLocaleFromAcceptLanguage(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return null;
  }

  const languageTags = acceptLanguage
    .split(",")
    .map((value) => value.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const tag of languageTags) {
    if (tag.startsWith("ko")) {
      return "ko";
    }

    if (tag.startsWith("en")) {
      return "en";
    }
  }

  return null;
}

export const dynamic = "force-dynamic";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const requestHeaders = await headers();
  const locale =
    detectLocaleFromReferer(requestHeaders.get("referer")) ??
    detectLocaleFromAcceptLanguage(requestHeaders.get("accept-language")) ??
    DEFAULT_LOCALE;

  return {
    name: "OpenLingo Prototype",
    short_name: "OpenLingo",
    description: "Paper-like handwriting worksheet prototype for tablet practice.",
    start_url: `/${locale}`,
    scope: "/",
    display: "standalone",
    background_color: "#efe6d8",
    theme_color: "#efe6d8",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
