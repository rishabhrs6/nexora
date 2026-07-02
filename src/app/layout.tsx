import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-sepia-zeta.vercel.app"),

  title: {
    default: "Nexora | AI Automation & Web Development Agency",
    template: "%s | Nexora",
  },

  description:
    "Nexora helps businesses grow with AI Automation, Premium Websites, SEO, Lead Generation and Digital Growth Systems.",

  keywords: [
    "AI Automation",
    "AI Agency",
    "Website Development",
    "SEO",
    "Lead Generation",
    "Dental Website",
    "AI Chatbot",
    "Next.js",
    "Nexora",
  ],

  authors: [
    {
      name: "Rishabh Sharma",
    },
  ],

  creator: "Rishabh Sharma",

  publisher: "Nexora",

  verification: {
    google: "so46b6IrvMoSzzNauhthz4ZLKjVmY3C3ItBiufoUSms",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Nexora | AI Automation & Web Development",
    description:
      "Premium websites, AI automation and growth systems built to scale businesses.",
    url: "https://nexora-sepia-zeta.vercel.app",
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
  url: "https://nexora-sepia-zeta.vercel.app",
  logo: "https://nexora-sepia-zeta.vercel.app/logo.png",

  founder: {
    "@type": "Person",
    name: "Rishabh Sharma",
  },

  email: "rishabhsharmx1@gmail.com",

  sameAs: [
    "https://github.com/rishabhrs6",
    "https://www.linkedin.com/in/rishabh-sharma-17a05341b/",
  ],

  description:
    "Nexora is an AI Automation and Web Development agency helping businesses grow with premium websites and intelligent automation.",
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
      </body>
    </html>
  );
}