import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OpenLingo Prototype",
    short_name: "OpenLingo",
    description: "Paper-like handwriting worksheet prototype for tablet practice.",
    start_url: "/",
    display: "standalone",
    background_color: "#efe6d8",
    theme_color: "#efe6d8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
