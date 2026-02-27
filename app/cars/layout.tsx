import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Vehicle Directory - Browse EVs by Brand & Model",
  description:
    "Browse and compare electric vehicles from 25+ brands. Filter by category — luxury, performance, American, European, and more.",
  keywords: [
    "electric vehicles",
    "EV directory",
    "Tesla models",
    "Porsche Taycan",
    "Rivian",
    "EV comparison",
    "electric car specs",
  ],
  alternates: { canonical: "/cars" },
  openGraph: {
    title: "Electric Vehicle Directory | Healvanna Auto",
    description:
      "Browse and compare electric vehicles by brand and model. Specs, range, pricing, and expert insights.",
    url: "https://healvanna.com/cars",
  },
};

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
