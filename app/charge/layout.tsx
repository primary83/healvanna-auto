import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find EV Charging Stations Near You | Healvanna Auto",
  description:
    "Search 85,000+ EV charging stations across the US. Filter by connector type, charging speed, and network. Find auto service deals near charging stations.",
  keywords: [
    "EV charging stations near me",
    "electric vehicle charger finder",
    "Tesla Supercharger",
    "ChargePoint stations",
    "Electrify America",
    "CCS charger",
    "J1772 charger",
    "DC fast charging",
    "Level 2 charging",
    "EV charging map",
  ],
  alternates: { canonical: "/charge" },
  openGraph: {
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description:
      "Search 85,000+ EV charging stations. Filter by network, connector type, and speed. Find auto service deals near charging stations.",
    type: "website",
    url: "https://healvanna.com/charge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description:
      "Search 85,000+ EV charging stations. Filter by network, connector, and speed.",
  },
};

export default function ChargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
