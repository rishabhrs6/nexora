import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexora",
    short_name: "Nexora",
    description:
      "Nexora helps businesses grow with Premium Websites, AI Automation, SEO and Digital Growth Systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#06b6d4",
    orientation: "portrait",
    lang: "en",
    categories: [
      "business",
      "technology",
      "marketing",
      "productivity",
    ],

    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}