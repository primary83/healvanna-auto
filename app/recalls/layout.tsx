import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Recall Checker — Free Safety Recall Lookup | Healvanna Auto",
  description:
    "Check if your vehicle has any open safety recalls. Free VIN lookup powered by NHTSA data.",
  alternates: { canonical: "/recalls" },
  openGraph: {
    title: "Vehicle Recall Checker — Free Safety Recall Lookup | Healvanna Auto",
    description:
      "Check if your car has any open safety recalls. Free NHTSA recall lookup for all makes and models. Find a certified shop to get recalls fixed.",
    type: "website",
    url: "https://healvanna.com/recalls",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Recall Checker | Healvanna Auto",
    description: "Check if your vehicle has any open safety recalls. Free VIN lookup.",
  },
};

export default function RecallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
