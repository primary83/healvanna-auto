import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights - Expert Automotive Analysis & Market Intelligence",
  description:
    "Expert analysis, buying guides, EV comparisons, and automotive market intelligence. In-depth insights for the discerning automotive enthusiast.",
  keywords: [
    "automotive insights",
    "EV comparison",
    "car buying guide",
    "ceramic coating review",
    "automotive market analysis",
  ],
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Automotive Insights & Market Intelligence | Healvanna Auto",
    description:
      "Expert analysis, comparisons, and guides for the discerning automotive enthusiast.",
    url: "https://healvanna.com/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
