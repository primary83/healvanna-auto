/**
 * Bulk-update all blog layout.tsx files with:
 * - canonical URL
 * - OG article metadata (type, publishedTime, modifiedTime, authors, images)
 * - BlogArticleWrapper wrapping children
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "app", "blog");

// Get all blog slug directories
const slugDirs = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== "category")
  .map(d => d.name);

let updated = 0;
let created = 0;
let skipped = 0;

for (const slug of slugDirs) {
  const layoutPath = path.join(BLOG_DIR, slug, "layout.tsx");

  const newLayout = `import type { Metadata } from "next";
import { blogMeta } from "../../lib/blogMeta";
import BlogArticleWrapper from "../../components/BlogArticleWrapper";

const slug = "${slug}";
const meta = blogMeta[slug];

export const metadata: Metadata = meta
  ? {
      title: meta.title,
      description: meta.excerpt,
      alternates: {
        canonical: \`/blog/\${slug}\`,
      },
      openGraph: {
        title: \`\${meta.title} | Healvanna Auto\`,
        description: meta.excerpt,
        url: \`https://healvanna.com/blog/\${slug}\`,
        type: "article",
        publishedTime: meta.datePublished,
        modifiedTime: meta.dateModified,
        authors: [meta.author],
        images: [\`https://healvanna.com\${meta.image}\`],
      },
      twitter: {
        card: "summary_large_image",
        title: \`\${meta.title} | Healvanna Auto\`,
        description: meta.excerpt,
      },
    }
  : {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BlogArticleWrapper slug="${slug}">{children}</BlogArticleWrapper>;
}
`;

  if (fs.existsSync(layoutPath)) {
    fs.writeFileSync(layoutPath, newLayout);
    updated++;
  } else {
    fs.writeFileSync(layoutPath, newLayout);
    created++;
  }
}

console.log(`Blog SEO update complete:`);
console.log(`  Updated: ${updated} layouts`);
console.log(`  Created: ${created} layouts`);
console.log(`  Total: ${updated + created} blog posts with Article schema, canonical URLs, and OG article metadata`);
