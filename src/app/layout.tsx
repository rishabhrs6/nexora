import type { Metadata } from "next";
// Removed import of @next/third-parties/google because it's not available in this environment.
// We'll insert the Google Analytics script manually below.
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://heynexora.in"),

  title: {
    default: "Nexora | AI Automation & Web Development Agency",
    template: "%s | Nexora",
  },

  description:
    "Nexora helps businesses grow with AI Automation, Premium Websites, SEO, Lead Generation and Digital Growth Systems.",

  keywords: [
    "Nexora",
    "AI Automation",
    "AI Agency",
    "Web Development",
    "Website Development",
    "SEO",
    "Lead Generation",
    "Dental Websites",
    "AI Chatbot",
    "Next.js",
  ],

  authors: [
    {
      name: "Rishabh Sharma",
    },
  ],

  creator: "Rishabh Sharma",

  publisher: "Nexora",

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
    title: "Nexora | AI Automation & Web Development",
    description:
      "Premium websites, AI automation and growth systems built to scale businesses.",

    url: "https://heynexora.in",

    siteName: "Nexora",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Nexora",

    description:
      "AI Automation • Premium Websites • SEO • Lead Generation",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "Nexora",

  url: "https://heynexora.in",

  logo: "https://heynexora.in/logo.png",

  description:
    "Nexora helps businesses grow with AI automation, premium websites, SEO and intelligent growth systems.",

  founder: {
    "@type": "Person",
    name: "Rishabh Sharma",
  },

  email: "rishabhsharmx1@gmail.com",

  sameAs: [
    "https://github.com/rishabhrs6",
    "https://www.linkedin.com/in/rishabh-sharma-17a05341b/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-XWCQCWKX0L" />
      </body>
    </html>
  );
}