import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find EV Charging Stations Near You | Healvanna Auto",
  description:
    "Find EV charging stations near you. Real-time availability, pricing, and directions for all major charging networks.",
  openGraph: {
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description:
      "Find EV charging stations near you. Real-time availability, pricing, and directions for all major charging networks.",
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
