import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Healvanna Auto - Our Story & Mission",
  description:
    "Learn about Healvanna Auto's mission to connect automotive enthusiasts with premium, verified service providers. Discover the philosophy behind healing cars.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Healvanna Auto - Our Story & Mission",
    description:
      "The philosophy behind Healvanna: connecting discerning owners with verified detailers, body shops, and automotive specialists.",
    url: "https://healvanna.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Healvanna Auto - Our Story & Mission",
    description: "The philosophy behind Healvanna: connecting discerning owners with verified detailers, body shops, and automotive specialists.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
