/**
 * extract-brand-hub-data.cjs
 * Parses 34 brand hub HTML files from public/cars/ and generates
 * app/lib/brandHubData.ts with structured data for each brand.
 */
const fs = require("fs");
const path = require("path");

const HTML_DIR = path.join(__dirname, "public", "cars");
const OUTPUT = path.join(__dirname, "app", "lib", "brandHubData.ts");

function extractAll(html, regex) {
  const results = [];
  let m;
  while ((m = regex.exec(html)) !== null) results.push(m);
  return results;
}

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/→/g, "→")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseHtml(html, slug) {
  // Brand name from hero h1
  const brandMatch = html.match(/<h1><em>([^<]+)<\/em>/);
  const brandName = brandMatch ? brandMatch[1] : slug;

  // Hero tagline
  const taglineMatch = html.match(/<p class="hero-tagline">([^<]+)<\/p>/);
  const tagline = taglineMatch ? taglineMatch[1] : "";

  // Hero stats
  const heroStats = [];
  const statMatches = extractAll(
    html,
    /<div class="hero-stat"><span class="hero-stat-number">([^<]+)<\/span><span class="hero-stat-label">([^<]+)<\/span><\/div>/g
  );
  for (const m of statMatches) {
    heroStats.push({ number: m[1], label: m[2] });
  }

  // About section title
  const aboutTitleMatch = html.match(
    /section-label">About the Brand<\/div><h2 class="section-title">([^<]+)<\/h2>/
  );
  const aboutTitle = aboutTitleMatch ? aboutTitleMatch[1] : "";

  // About paragraphs
  const aboutTextMatch = html.match(
    /<div class="brand-intro-text">([\s\S]*?)<\/div>\s*<div class="brand-quick-facts">/
  );
  const aboutParagraphs = [];
  if (aboutTextMatch) {
    const pMatches = extractAll(aboutTextMatch[1], /<p[^>]*>([\s\S]*?)<\/p>/g);
    for (const p of pMatches) {
      const text = decodeHtml(p[1]);
      if (text) aboutParagraphs.push(text);
    }
  }

  // Quick facts
  const quickFacts = [];
  const factMatches = extractAll(
    html,
    /<div class="fact-row"><span class="fact-label">([^<]+)<\/span><span class="fact-value">([^<]+)<\/span><\/div>/g
  );
  for (const m of factMatches) {
    quickFacts.push({ label: m[1], value: m[2] });
  }

  // Official website
  const officialMatch = html.match(
    /<a href="([^"]+)"[^>]*class="brand-official-link">/
  );
  const officialUrl = officialMatch ? officialMatch[1] : "";

  // Charging cards
  const chargingCards = [];
  const chargingMatches = extractAll(
    html,
    /<div class="charging-card"><div class="charge-icon">([^<]+)<\/div><h4>([^<]+)<\/h4><p>([^<]+)<\/p>(?:<span class="charge-highlight">([^<]+)<\/span>)?<\/div>/g
  );
  for (const m of chargingMatches) {
    const card = { icon: m[1], title: m[2], description: m[3] };
    if (m[4]) card.highlight = m[4];
    chargingCards.push(card);
  }

  // FAQ items
  const faqItems = [];
  const faqMatches = extractAll(
    html,
    /<h4>([^<]+)<\/h4>\s*<span class="faq-toggle">[^<]*<\/span>\s*<\/div>\s*<div class="faq-answer"><p>([\s\S]*?)<\/p><\/div>/g
  );
  for (const m of faqMatches) {
    faqItems.push({ question: m[1].trim(), answer: decodeHtml(m[2]) });
  }

  // Cross-links
  const crossLinks = [];
  const crossSection = html.match(/Browse Other EV Brands[\s\S]*?<div class="cross-links">([\s\S]*?)<\/div>/);
  if (crossSection) {
    const linkMatches = extractAll(
      crossSection[1],
      /<a href="\/cars\/([^"]+)" class="cross-link">([^<]+)<\/a>/g
    );
    for (const m of linkMatches) {
      crossLinks.push({ slug: m[1], name: m[2] });
    }
  }

  return {
    slug,
    brandName,
    tagline,
    heroStats,
    aboutTitle,
    aboutParagraphs,
    quickFacts,
    officialUrl,
    chargingCards,
    faqItems,
    crossLinks,
  };
}

// Process all HTML files
const files = fs.readdirSync(HTML_DIR).filter((f) => f.endsWith(".html"));
const brands = [];

for (const file of files) {
  const slug = file.replace(".html", "");
  const html = fs.readFileSync(path.join(HTML_DIR, file), "utf8");
  const data = parseHtml(html, slug);
  brands.push(data);
  console.log(`  ✓ ${slug} — ${data.faqItems.length} FAQ, ${data.quickFacts.length} facts, ${data.chargingCards.length} charging`);
}

brands.sort((a, b) => a.slug.localeCompare(b.slug));

// Generate TypeScript
let ts = `// Auto-generated from brand hub HTML pages — do not edit manually
// Run: node extract-brand-hub-data.cjs

export interface BrandHubData {
  slug: string;
  brandName: string;
  tagline: string;
  heroStats: { number: string; label: string }[];
  aboutTitle: string;
  aboutParagraphs: string[];
  quickFacts: { label: string; value: string }[];
  officialUrl: string;
  chargingCards: { icon: string; title: string; description: string; highlight?: string }[];
  faqItems: { question: string; answer: string }[];
  crossLinks: { slug: string; name: string }[];
}

export const BRAND_HUB_DATA: Record<string, BrandHubData> = {\n`;

for (const brand of brands) {
  ts += `  "${brand.slug}": ${JSON.stringify(brand, null, 4).replace(/\n/g, "\n  ")},\n`;
}

ts += `};\n`;

fs.writeFileSync(OUTPUT, ts, "utf8");
console.log(`\nWrote ${brands.length} brands to ${OUTPUT}`);
