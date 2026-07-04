type Props = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceSchema({
  name,
  description,
  url,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: name,

    name,

    description,

    provider: {
      "@type": "Organization",
      name: "Nexora",
      url: "https://heynexora.in",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
    },

    url,
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