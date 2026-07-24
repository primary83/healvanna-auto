import type { Metadata } from "next";
import { blogMeta } from "../../lib/blogMeta";
import BlogArticleWrapper from "../../components/BlogArticleWrapper";

const slug = "best-home-ev-charger-tesla-model-y-orlando";
const meta = blogMeta[slug];

export const metadata: Metadata = meta
  ? {
      title: meta.title,
      description: meta.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: `${meta.title} | Healvanna Auto`,
        description: meta.excerpt,
        url: `https://healvanna.com/blog/${slug}`,
        type: "article",
        publishedTime: meta.datePublished,
        modifiedTime: meta.dateModified,
        authors: [meta.author],
        images: [`https://healvanna.com${meta.image}`],
      },
      twitter: {
        card: "summary_large_image",
        title: `${meta.title} | Healvanna Auto`,
        description: meta.excerpt,
      },
    }
  : {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BlogArticleWrapper slug="best-home-ev-charger-tesla-model-y-orlando">{children}</BlogArticleWrapper>;
}
