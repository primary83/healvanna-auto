import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Healvanna Auto",
  description:
    "Get in touch with Healvanna Auto. Questions about our directory, business listings, or partnerships? We'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us - Healvanna Auto",
    description:
      "Reach out to Healvanna Auto for questions about our premium car service directory, business listings, or partnerships.",
    url: "https://healvanna.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Healvanna Auto",
    description: "Reach out to Healvanna Auto for questions about our premium car service directory, business listings, or partnerships.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
