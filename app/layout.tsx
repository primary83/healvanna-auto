import type { Metadata } from "next";
import StructuredData from "./components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Healvanna Auto - Premium Car Directory | Where Cars Get Better",
    template: "%s | Healvanna Auto"
  },
  description: "Healvanna Auto is your curated guide to premium car ownership. Discover luxury vehicles, electric cars, verified detailers, ceramic coating specialists, body shops, and expert automotive insights.",
  keywords: [
    "premium car directory",
    "luxury car guide",
    "EV directory",
    "electric vehicles",
    "Tesla",
    "Porsche",
    "Lucid",
    "Rivian",
    "car detailing",
    "ceramic coating",
    "PPF",
    "paint protection film",
    "body shop",
    "auto restoration",
    "car care",
    "luxury vehicles",
    "EV maintenance"
  ],
  authors: [{ name: "Healvanna Auto" }],
  creator: "Healvanna Auto",
  publisher: "Healvanna Auto",
  metadataBase: new URL("https://healvanna.com"),
  alternates: {
    canonical: "https://healvanna.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healvanna.com",
    siteName: "Healvanna Auto",
    title: "Healvanna Auto - Premium Car Directory",
    description: "A curated guide to premium car ownership. Discover exceptional vehicles, trusted care specialists, and master craftsmen. Where cars get better.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healvanna Auto - Premium Car Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healvanna Auto - Premium Car Directory",
    description: "A curated guide to premium car ownership. Where cars get better.",
    creator: "@healvanna",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0f1a" />
      </head>
      <body className="antialiased">
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Healvanna Auto",
          url: "https://healvanna.com",
          logo: "https://healvanna.com/favicon.ico",
          description: "Premium automotive services directory connecting car owners with verified detailers, body shops, collision repair, and auto glass specialists across the United States.",
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            url: "https://healvanna.com/contact",
          },
        }} />
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Healvanna Auto",
          url: "https://healvanna.com",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://healvanna.com/car-detailing?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }} />
        {children}
      </body>
    </html>
  );
}
