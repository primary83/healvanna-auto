import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Your Business — Partner With Healvanna Auto",
  description:
    "Get your auto shop in front of thousands of car owners. Apply to be featured on Healvanna's Deal Hunter directory — free to join, no hidden fees.",
  alternates: { canonical: "/partner" },
  openGraph: {
    title: "List Your Business — Partner With Healvanna Auto",
    description:
      "Get your auto shop in front of thousands of car owners. Apply to be featured on Healvanna's Deal Hunter directory — free to join, no hidden fees.",
    url: "https://healvanna.com/partner",
  },
  twitter: {
    card: "summary_large_image",
    title: "List Your Business — Partner With Healvanna Auto",
    description:
      "Get your auto shop in front of thousands of car owners. Apply to be featured on Healvanna's Deal Hunter directory.",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
