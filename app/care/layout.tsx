import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Car Care - Detailing, Ceramic Coating & PPF Specialists",
  description:
    "Find verified detailing specialists, ceramic coating experts, and paint protection film installers. Premium car care from trusted professionals near you.",
  keywords: [
    "car detailing",
    "ceramic coating",
    "paint protection film",
    "PPF",
    "auto detailing near me",
    "premium car care",
  ],
  alternates: { canonical: "/care" },
  openGraph: {
    title: "Premium Car Care Specialists | Healvanna Auto",
    description:
      "Verified detailers, ceramic coating experts, and PPF installers. Premium protection from trusted professionals.",
    url: "https://healvanna.com/care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Car Care Specialists | Healvanna Auto",
    description: "Verified detailers, ceramic coating experts, and PPF installers. Premium protection from trusted professionals.",
  },
};

export default function CareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
