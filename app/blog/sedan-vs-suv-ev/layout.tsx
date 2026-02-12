import type { Metadata } from "next";
import { blogMeta } from "../../lib/blogMeta";

const slug = "sedan-vs-suv-ev";
const meta = blogMeta[slug];

export const metadata: Metadata = meta
  ? {
      title: meta.title,
      description: meta.excerpt,
      openGraph: {
        title: `${meta.title} | Healvanna Auto`,
        description: meta.excerpt,
        url: `https://healvanna.com/blog/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${meta.title} | Healvanna Auto`,
        description: meta.excerpt,
      },
    }
  : {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
