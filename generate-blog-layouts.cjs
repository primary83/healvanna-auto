const fs = require("fs");
const path = require("path");

const blogDir = path.join(__dirname, "app", "blog");
const skip = new Set(["category"]);

const entries = fs.readdirSync(blogDir, { withFileTypes: true });
const articleDirs = entries.filter(
  (e) => e.isDirectory() && !skip.has(e.name)
);

let created = 0;

for (const dir of articleDirs) {
  const slug = dir.name;
  const layoutPath = path.join(blogDir, slug, "layout.tsx");

  // Skip if layout.tsx already exists
  if (fs.existsSync(layoutPath)) {
    console.log(`SKIP (already exists): ${slug}/layout.tsx`);
    continue;
  }

  const content = `import type { Metadata } from "next";
import { blogMeta } from "../../lib/blogMeta";

const slug = "${slug}";
const meta = blogMeta[slug];

export const metadata: Metadata = meta
  ? {
      title: meta.title,
      description: meta.excerpt,
      openGraph: {
        title: \`\${meta.title} | Healvanna Auto\`,
        description: meta.excerpt,
        url: \`https://healvanna.com/blog/\${slug}\`,
      },
      twitter: {
        card: "summary_large_image",
        title: \`\${meta.title} | Healvanna Auto\`,
        description: meta.excerpt,
      },
    }
  : {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

  fs.writeFileSync(layoutPath, content, "utf-8");
  console.log(`CREATED: ${slug}/layout.tsx`);
  created++;
}

console.log(`\nDone. Created ${created} layout.tsx files across ${articleDirs.length} article directories.`);
