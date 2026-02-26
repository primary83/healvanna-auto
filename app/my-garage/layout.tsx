import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Garage - Personalized Car Maintenance Schedule",
  description:
    "Track your car's maintenance schedule based on your vehicle and mileage. Get personalized service reminders and find deals on upcoming maintenance.",
};

export default function MyGarageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
