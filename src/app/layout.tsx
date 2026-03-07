import type { Viewport } from "next";
import { headers } from "next/headers";

import { LOCALE_HEADER, resolveLocale } from "@/i18n/config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#efe6d8",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = resolveLocale(requestHeaders.get(LOCALE_HEADER));

  return (
    <html lang={locale} dir="ltr">
      <body>{children}</body>
    </html>
  );
}
