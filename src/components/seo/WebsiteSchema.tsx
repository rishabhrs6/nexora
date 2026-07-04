export default function WebsiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Nexora",

    alternateName: "Hey Nexora",

    url: "https://heynexora.in",

    description:
      "AI Automation Company helping businesses grow with AI Receptionists, AI Calling, WhatsApp Automation, SEO and Premium Websites.",

    publisher: {
      "@type": "Organization",
      name: "Nexora",
    },

    inLanguage: "en",

    potentialAction: {
      "@type": "SearchAction",
      target: "https://heynexora.in/services",
      "query-input": "required name=search_term_string",
    },
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
