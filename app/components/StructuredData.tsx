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

// Generate FAQPage schema for Google rich snippets
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Article schema for blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://healvanna.com${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://healvanna.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Healvanna Auto",
      url: "https://healvanna.com",
      logo: {
        "@type": "ImageObject",
        url: "https://healvanna.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://healvanna.com/blog/${article.slug}`,
    },
    articleSection: article.category,
  };
}

// Generate OfferCatalog schema for deal listings
export function generateOfferCatalogSchema(deals: {
  title: string;
  shop: string;
  description: string;
  url: string;
  city: string;
  state: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Car Service Deals",
    itemListElement: deals.map((deal, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: deal.title,
      description: deal.description,
      offeredBy: {
        "@type": "AutoRepair",
        name: deal.shop,
        address: {
          "@type": "PostalAddress",
          addressLocality: deal.city,
          addressRegion: deal.state,
        },
      },
      url: deal.url,
    })),
  };
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
