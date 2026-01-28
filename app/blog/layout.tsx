import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Automotive Guides, Reviews & Insights",
  description:
    "Expert automotive guides, EV reviews, cost comparisons, and industry insights. Stay informed about car detailing, ceramic coating, wraps, and electric vehicles.",
  keywords: [
    "car blog",
    "automotive guides",
    "EV reviews",
    "ceramic coating guide",
    "car detailing tips",
    "electric vehicle news",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Automotive Guides, Reviews & Insights | Healvanna Auto",
    description:
      "Expert automotive guides, EV reviews, and industry insights for the discerning enthusiast.",
    url: "https://healvanna.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
