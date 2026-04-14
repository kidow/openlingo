import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_LOCALE, isAppLocale, LOCALE_HEADER } from "@/i18n/config";

function detectLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
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

  return DEFAULT_LOCALE;
}

function getLocaleFromPathname(pathname: string) {
  const candidate = pathname.split("/")[1];

  return isAppLocale(candidate) ? candidate : null;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = getLocaleFromPathname(pathname);
  const detectedLocale = pathnameLocale ?? detectLocale(request);

  if (pathname === "/") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${detectedLocale}`;

    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, detectedLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|manifest.webmanifest).*)"],
};
