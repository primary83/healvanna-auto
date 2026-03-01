import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Garage - Personalized Car Maintenance Schedule",
  description:
    "Track your EV's maintenance schedule, estimated costs, and find nearby service deals.",
  alternates: { canonical: "/my-garage" },
  openGraph: {
    title: "My Garage — Car Maintenance Tracker | Healvanna Auto",
    description: "Track your car's maintenance schedule and find nearby service deals.",
    type: "website",
    url: "https://healvanna.com/my-garage",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Garage — Car Maintenance Tracker | Healvanna Auto",
    description: "Track your car's maintenance schedule and find nearby service deals.",
  },
};

export default function MyGarageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
