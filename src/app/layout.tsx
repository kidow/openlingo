import type { Viewport } from "next";
import { headers } from "next/headers";
import Script from "next/script";

import { LOCALE_HEADER, resolveLocale } from "@/i18n/config";
import { ServiceWorkerRegister } from "@/components/pwa/service-worker-register";
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
        <head>
          {process.env.NODE_ENV === "development" && (
            <Script
              src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
          )}
        </head>
      <body>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
