import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find EV Charging Stations Near You | Healvanna Auto",
  description:
    "Locate EV charging stations nearby. Filter by DC Fast, Level 2, or free chargers. Get estimated charge times for your electric vehicle.",
  openGraph: {
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description:
      "Locate EV charging stations nearby. Filter by DC Fast, Level 2, or free chargers. Get estimated charge times for your electric vehicle.",
    type: "website",
  },
};

export default function ChargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
