import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find EV Charging Stations Near You | Healvanna Auto",
  description:
    "Find EV charging stations near you. Real-time availability, pricing, and directions for all major charging networks.",
  alternates: { canonical: "/charge" },
  openGraph: {
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description:
      "Find EV charging stations near you. Real-time availability, pricing, and directions for all major charging networks.",
    type: "website",
    url: "https://healvanna.com/charge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find EV Charging Stations Near You | Healvanna Auto",
    description: "Find EV charging stations near you with real-time availability and pricing.",
  },
};

export default function ChargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
