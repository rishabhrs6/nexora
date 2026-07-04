export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    "@id": "https://heynexora.in/#business",

    name: "Nexora",

    alternateName: "Hey Nexora",

    image: "https://heynexora.in/og-image.png",

    url: "https://heynexora.in",

    logo: "https://heynexora.in/logo.png",

    telephone: "+918447410623",

    email: "rishabhsharmx1@gmail.com",

    description:
      "Nexora helps businesses automate operations using AI Receptionists, AI Calling, WhatsApp Automation, SEO, Premium Websites and Business Automation.",

    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Delhi",

      addressRegion: "Delhi",

      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: "28.6139",

      longitude: "77.2090",
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    founder: {
      "@type": "Person",

      name: "Rishabh Sharma",
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
