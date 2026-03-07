import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "OpenLingo Prototype",
  description: "iPad-first handwriting practice prototype with multilingual-ready worksheet data.",
  applicationName: "OpenLingo",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OpenLingo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#efe6d8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

