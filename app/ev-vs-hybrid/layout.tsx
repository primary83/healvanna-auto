import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV or Hybrid? Find Your Perfect Match | Healvanna Auto",
  description: "Take our quick quiz to find out if an electric vehicle or hybrid is right for you. Compare costs, range, charging, and more side by side.",
  alternates: { canonical: "/ev-vs-hybrid" },
  openGraph: {
    title: "EV or Hybrid? Find Your Perfect Match - Healvanna Auto",
    description: "Take our quick quiz to find out if an electric vehicle or hybrid is right for you. Compare costs, range, charging, and more side by side.",
    url: "https://healvanna.com/ev-vs-hybrid",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV or Hybrid? Find Your Perfect Match - Healvanna Auto",
    description: "Take our quick quiz to find out if an electric vehicle or hybrid is right for you.",
  },
};

export default function EvVsHybridLayout({ children }: { children: React.ReactNode }) {
  return children;
}
