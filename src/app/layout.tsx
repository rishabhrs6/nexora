import type { Metadata } from "next";
import "./globals.css";

import GoogleAnalytics from "../components/GoogleAnalytics";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://heynexora.in"),

  title: {
    default: "Nexora | AI Automation Company for Businesses",
    template: "%s | Nexora",
  },

  description:
    "Nexora helps businesses grow with AI Receptionists, AI Calling, WhatsApp Automation, Premium Websites, SEO and Business Automation.",

  applicationName: "Nexora",

  category: "Technology",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Nexora",
    "Hey Nexora",
    "Nexora AI",
    "Nexora Company",
    "AI Automation",
    "AI Receptionist",
    "AI Calling",
    "AI Voice Agent",
    "WhatsApp Automation",
    "CRM",
    "Website Development",
    "Website Design",
    "Web Development Company",
    "SEO",
    "Local SEO",
    "Dental SEO",
    "Dental Marketing",
    "Business Automation",
    "Lead Generation",
    "Digital Marketing",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Rishabh Sharma",
    },
  ],

  creator: "Rishabh Sharma",

  publisher: "Nexora",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "NV42UrqVn-tO8ELMqbRmpmOOvD6GQ707yK3T1EgW6nk",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Nexora | AI Automation Company",

    description:
      "AI Receptionists, AI Calling, WhatsApp Automation, SEO, Premium Websites and Business Automation.",

    url: "https://heynexora.in",

    siteName: "Nexora",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexora AI Automation Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Nexora | AI Automation Company",

    description:
      "AI Receptionists • AI Calling • Websites • SEO • WhatsApp Automation",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <OrganizationSchema />

        <WebsiteSchema />

        <LocalBusinessSchema />

        {children}

        <GoogleAnalytics gaId="G-2NG0NPXKF3" />

      </body>
    </html>
  );
}
