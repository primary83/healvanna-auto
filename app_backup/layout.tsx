import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Healvanna Auto - Premium EV & Luxury Car Directory",
    template: "%s | Healvanna Auto",
  },
  description:
    "Discover premium electric vehicles, luxury cars, and verified automotive service providers. Find trusted detailers, ceramic coating specialists, and certified body shops.",
  keywords: [
    "electric vehicles",
    "EV directory",
    "Tesla",
    "Rivian",
    "Lucid",
    "Porsche Taycan",
    "luxury cars",
    "auto detailing",
    "ceramic coating",
    "PPF",
    "paint protection film",
    "car care",
    "body shop",
    "collision repair",
    "EV maintenance",
  ],
  authors: [{ name: "Healvanna Auto" }],
  creator: "Healvanna Auto",
  publisher: "Healvanna Auto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://healvanna.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Healvanna Auto - Premium EV & Luxury Car Directory",
    description:
      "Discover premium electric vehicles, luxury cars, and verified automotive service providers. Your guide to exceptional car ownership.",
    url: "https://healvanna.com",
    siteName: "Healvanna Auto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Healvanna Auto - Premium Car Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healvanna Auto - Premium EV & Luxury Car Directory",
    description:
      "Discover premium electric vehicles, luxury cars, and verified automotive service providers.",
    site: "@healvanna",
    creator: "@healvanna",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
