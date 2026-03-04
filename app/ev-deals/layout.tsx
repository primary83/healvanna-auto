import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Best Price Finder — Compare 25 Electric Vehicle Deals | Healvanna Auto",
  description:
    "Find the best prices on 25 popular electric vehicles. Compare new & used EV deals from Carvana, CarMax, AutoTrader, and more. Includes Gas Savings Calculator, Market Pulse trends, and True Value Scores.",
  keywords: [
    "EV deals",
    "electric vehicle prices",
    "best EV prices",
    "cheapest electric cars",
    "EV price comparison",
    "used EV deals",
    "electric car savings",
    "EV market trends",
    "gas vs electric savings",
    "EV cost of ownership",
  ],
  openGraph: {
    title: "EV Best Price Finder — Compare 25 Electric Vehicle Deals",
    description:
      "Find the best prices on 25 popular EVs. Compare deals from Carvana, CarMax, AutoTrader & more with our Gas Savings Calculator and Market Pulse dashboard.",
    url: "/ev-deals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Best Price Finder — Compare 25 Electric Vehicle Deals",
    description:
      "Find the best prices on 25 popular EVs. Compare deals from Carvana, CarMax, AutoTrader & more.",
  },
  alternates: {
    canonical: "/ev-deals",
  },
};

export default function EvDealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
