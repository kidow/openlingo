import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/manifest.webmanifest" || pathname.endsWith("/manifest.webmanifest")) {
    return NextResponse.next();
  }

  if (pathname === "/ko" || pathname.startsWith("/ko/") || pathname === "/en" || pathname.startsWith("/en/")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|icon-192.png|icon-512.png|apple-icon.png|sw.js).*)",
  ],
};
