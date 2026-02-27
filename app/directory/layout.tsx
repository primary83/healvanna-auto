import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Services Directory - Find Auto Service Providers | Healvanna Auto",
  description:
    "Browse verified EV service shops near you — detailing, body shops, collision repair, wrapping, and more.",
  alternates: { canonical: "/directory" },
  openGraph: {
    title: "Car Services Directory | Healvanna Auto",
    description:
      "Browse verified EV service shops near you — detailing, body shops, collision repair, wrapping, and more.",
    url: "https://healvanna.com/directory",
  },
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
