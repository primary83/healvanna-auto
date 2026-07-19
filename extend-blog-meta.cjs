/**
 * Extend blogMeta.ts with SEO fields: datePublished, dateModified, author, image, category
 * Scans each blog post's page.tsx to extract image paths and date strings.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "app", "blog");
const META_FILE = path.join(__dirname, "app", "lib", "blogMeta.ts");

// Read current blogMeta
const metaContent = fs.readFileSync(META_FILE, "utf-8");

// Extract all slugs from blogMeta
const slugRegex = /"([^"]+)":\s*\{/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(metaContent)) !== null) {
  slugs.push(match[1]);
}

console.log(`Found ${slugs.length} blog slugs in blogMeta.ts`);

// Category mapping based on slug keywords
function inferCategory(slug, title) {
  const s = slug + " " + title.toLowerCase();
  if (s.includes("ceramic-coating") || s.includes("ppf") || s.includes("paint-protection") || s.includes("matte-paint")) return "Paint Protection";
  if (s.includes("detailing") || s.includes("detail") || s.includes("clay-bar") || s.includes("swirl-mark") || s.includes("water-spot") || s.includes("waxing") || s.includes("car-wash") || s.includes("tire-shine") || s.includes("headlight") || s.includes("interior-detailing") || s.includes("air-freshener") || s.includes("scratch-removal")) return "Car Care";
  if (s.includes("wrap") || s.includes("vinyl")) return "Car Wrapping";
  if (s.includes("body-shop") || s.includes("collision") || s.includes("auto-glass") || s.includes("paint-job") || s.includes("paint-correction")) return "Body & Paint";
  if (s.includes("battery") && !s.includes("solid-state")) return "EV Technology";
  if (s.includes("charging") || s.includes("charger") || s.includes("v2h") || s.includes("wireless-ev")) return "EV Charging";
  if (s.includes("road-trip") || s.includes("scenic")) return "EV Travel";
  if (s.includes("lease") || s.includes("buy") || s.includes("cost") || s.includes("resale") || s.includes("tax-credit") || s.includes("insurance")) return "EV Ownership";
  if (s.includes("ev-maintenance") || s.includes("ev-vs-gas") || s.includes("winter-ev") || s.includes("cold-weather") || s.includes("regenerative") || s.includes("range-anxiety") || s.includes("towing")) return "EV Maintenance";
  if (s.includes("review") || s.includes("vs") || s.includes("compared") || s.includes("alternative") || s.includes("best-electric") || s.includes("best-used") || s.includes("sedan-vs") || s.includes("pickup") || s.includes("choose-first") || s.includes("ev-vs-hybrid") || s.includes("should-you-buy")) return "EV Comparisons";
  if (s.includes("ev-myth") || s.includes("environment") || s.includes("autonomous") || s.includes("fleet") || s.includes("solid-state") || s.includes("ev-battery-technology") || s.includes("ev-app") || s.includes("car-show") || s.includes("expo") || s.includes("dashcam")) return "EV Guides";
  if (s.includes("business") || s.includes("start-")) return "Business";
  if (s.includes("window-tint")) return "Window Tinting";
  if (s.includes("winter-car") || s.includes("road-trip-car") || s.includes("parking-lot") || s.includes("summer-heat")) return "Car Care";
  return "Automotive Guides";
}

// Scan blog pages for images and dates
const results = {};
for (const slug of slugs) {
  const pageFile = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(pageFile)) {
    console.warn(`Missing page.tsx for: ${slug}`);
    continue;
  }

  const content = fs.readFileSync(pageFile, "utf-8");

  // Extract first image src
  let image = `/blog/${slug}.png`; // default
  const imgMatch = content.match(/src=["']([^"']+)["']/);
  if (imgMatch && imgMatch[1].startsWith("/")) {
    image = imgMatch[1];
  }

  // Extract date from page content (look for patterns like "January 18, 2026" or "Jan 2026")
  let datePublished = "2026-01-15"; // default
  const dateMatch = content.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s*(\d{4})/i);
  if (dateMatch) {
    const months = { january: "01", february: "02", march: "03", april: "04", may: "05", june: "06", july: "07", august: "08", september: "09", october: "10", november: "11", december: "12" };
    const m = months[dateMatch[1].toLowerCase()];
    const d = dateMatch[2].padStart(2, "0");
    datePublished = `${dateMatch[3]}-${m}-${d}`;
  }

  // Get title from blogMeta
  const titleMatch = metaContent.match(new RegExp(`"${slug}":\\s*\\{[^}]*title:\\s*"([^"]*)"`, "s"));
  const title = titleMatch ? titleMatch[1] : slug;

  results[slug] = {
    datePublished,
    dateModified: datePublished, // same for now
    author: "Healvanna Auto Editorial",
    image,
    category: inferCategory(slug, title),
  };
}

// Now rewrite blogMeta.ts with extended fields
const currentMeta = metaContent.match(/"([^"]+)":\s*\{\s*title:\s*"([^"]*)",\s*excerpt:\s*"([^"]*)"\s*,?\s*\}/g);
if (!currentMeta) {
  console.error("Could not parse blogMeta entries");
  process.exit(1);
}

let newEntries = [];
for (const slug of slugs) {
  // Extract title and excerpt
  const entryMatch = metaContent.match(new RegExp(`"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*\\{\\s*title:\\s*"([^"]*)"[,\\s]*excerpt:\\s*"([^"]*)"`, "s"));
  if (!entryMatch) {
    console.warn(`Could not parse entry for: ${slug}`);
    continue;
  }
  const title = entryMatch[1];
  const excerpt = entryMatch[2];
  const ext = results[slug] || {
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    author: "Healvanna Auto Editorial",
    image: `/blog/${slug}.png`,
    category: "Automotive Guides",
  };

  newEntries.push(`  "${slug}": {
    title: "${title}",
    excerpt: "${excerpt}",
    datePublished: "${ext.datePublished}",
    dateModified: "${ext.dateModified}",
    author: "${ext.author}",
    image: "${ext.image}",
    category: "${ext.category}",
  }`);
}

const newFile = `// Auto-generated blog metadata for SEO
// Used by app/blog/[slug]/layout.tsx for per-article meta tags

export interface BlogMetaEntry {
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
  category: string;
}

export const blogMeta: Record<string, BlogMetaEntry> = {
${newEntries.join(",\n")},
};
`;

fs.writeFileSync(META_FILE, newFile);
console.log(`\nUpdated blogMeta.ts with ${newEntries.length} extended entries.`);
