import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Electric Vehicles Side by Side | Healvanna Auto",
  description:
    "Compare electric vehicles side by side. Price, range, 0-60, top speed, and full specs for Tesla, BMW, Rivian, Mercedes, Porsche, Lucid, Hyundai, Kia, and more.",
  alternates: { canonical: "/compare-evs" },
  openGraph: {
    title: "Compare Electric Vehicles - Healvanna Auto",
    description:
      "Compare electric vehicles side by side. Price, range, acceleration, and full specs comparison.",
    url: "https://healvanna.com/compare-evs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Electric Vehicles - Healvanna Auto",
    description:
      "Compare electric vehicles side by side. Price, range, acceleration, and full specs comparison.",
  },
};

export default function CompareEVsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
