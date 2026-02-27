import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Garage - Personalized Car Maintenance Schedule",
  description:
    "Track your EV's maintenance schedule, estimated costs, and find nearby service deals.",
};

export default function MyGarageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
