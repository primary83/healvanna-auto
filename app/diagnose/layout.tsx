import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
  description:
    "Look up any OBD-II diagnostic trouble code. Get plain-English explanations, severity levels, estimated repair costs, and find a certified mechanic near you.",
  openGraph: {
    title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
    description:
      "Look up any OBD-II diagnostic trouble code. Get plain-English explanations, severity levels, estimated repair costs, and find a certified mechanic near you.",
    type: "website",
  },
};

export default function DiagnoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
