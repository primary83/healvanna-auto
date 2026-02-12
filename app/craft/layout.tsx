import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Shops & Restoration - Certified Collision Repair Specialists",
  description:
    "Find certified body shops, collision repair centers, and restoration specialists. Expert craftsmen for luxury, classic, and electric vehicle repair.",
  keywords: [
    "body shop",
    "collision repair",
    "auto body repair",
    "car restoration",
    "EV collision repair",
    "luxury car body shop",
  ],
  alternates: { canonical: "/craft" },
  openGraph: {
    title: "Body Shops & Restoration Specialists | Healvanna Auto",
    description:
      "Certified collision repair and master restoration craftsmen for luxury, classic, and electric vehicles.",
    url: "https://healvanna.com/craft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Shops & Restoration Specialists | Healvanna Auto",
    description: "Certified collision repair and master restoration craftsmen for luxury, classic, and electric vehicles.",
  },
};

export default function CraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
