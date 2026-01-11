import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healvanna Auto - Premium Car Directory",
  description: "A curated guide to premium car ownership — vehicles, care, and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
