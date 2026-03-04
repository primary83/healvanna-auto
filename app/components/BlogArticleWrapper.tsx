import StructuredData, { generateArticleSchema, generateBreadcrumbSchema } from "./StructuredData";
import { blogMeta } from "../lib/blogMeta";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function BlogArticleWrapper({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const meta = blogMeta[slug];
  if (!meta) return <>{children}</>;

  const articleSchema = generateArticleSchema({
    title: meta.title,
    description: meta.excerpt,
    slug,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: meta.author,
    image: meta.image,
    category: meta.category,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://healvanna.com" },
    { name: "Blog", url: "https://healvanna.com/blog" },
    { name: meta.title, url: `https://healvanna.com/blog/${slug}` },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
