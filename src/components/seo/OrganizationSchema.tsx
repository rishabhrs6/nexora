export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Nexora",

    alternateName: "Hey Nexora",

    url: "https://heynexora.in",

    logo: "https://heynexora.in/logo.png",

    image: "https://heynexora.in/og-image.png",

    description:
      "Nexora is an AI Automation company helping businesses grow using AI Receptionists, AI Calling, WhatsApp Automation, Premium Websites and SEO.",

    email: "rishabhsharmx1@gmail.com",

    telephone: "+918447410623",

    founder: {
      "@type": "Person",
      name: "Rishabh Sharma",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    sameAs: [
      "https://github.com/rishabhrs6",
      "https://www.linkedin.com/in/rishabh-sharma-17a05341b/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}