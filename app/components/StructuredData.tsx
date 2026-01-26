interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema(provider: {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  rating: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: provider.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: provider.address,
      addressLocality: provider.city,
      addressRegion: provider.state,
      addressCountry: "US",
    },
    telephone: provider.phone,
    url: provider.url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: provider.latitude,
      longitude: provider.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: provider.rating,
      reviewCount: provider.reviewCount,
    },
    additionalType: provider.category,
  };
}

// Generate Service schema for service category pages
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  city?: string;
  state?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://healvanna.com/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Healvanna Auto",
      url: "https://healvanna.com",
    },
    serviceType: service.name,
  };

  if (service.city && service.state) {
    schema.areaServed = {
      "@type": "City",
      name: service.city,
      containedInPlace: {
        "@type": "State",
        name: service.state,
      },
    };
  }

  return schema;
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
