/**
 * add-brand-hub-sections.cjs
 * Adds BrandHubSections import and component to each brand's page.tsx
 */
const fs = require("fs");
const path = require("path");

const BRANDS = [
  "acura","audi","bmw","byd","cadillac","chevrolet","dodge","fiat","ford",
  "genesis","gmc","honda","hyundai","jaguar","kia","lexus","li-auto","lucid",
  "mercedes","mini","nio","nissan","polestar","porsche","rivian","subaru",
  "tesla","toyota","vinfast","volkswagen","volvo","xiaomi","xpeng","zeekr"
];

let updated = 0;
let skipped = 0;

for (const brand of BRANDS) {
  const filePath = path.join(__dirname, "app", "cars", brand, "page.tsx");

  if (!fs.existsSync(filePath)) {
    console.log(`  ✗ ${brand} — page.tsx not found`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // Skip if already has BrandHubSections
  if (content.includes("BrandHubSections")) {
    console.log(`  ○ ${brand} — already has BrandHubSections`);
    skipped++;
    continue;
  }

  // 1. Add import
  // Find the last import line and add after it
  const importLine = `import BrandHubSections from "../../components/BrandHubSections";`;

  // Find the best place to insert import
  const importRegex = /^import .+$/gm;
  let lastImportEnd = 0;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    lastImportEnd = match.index + match[0].length;
  }

  if (lastImportEnd > 0) {
    content = content.slice(0, lastImportEnd) + "\n" + importLine + content.slice(lastImportEnd);
  } else {
    // No imports found, add at top after "use client"
    content = content.replace(/"use client";/, `"use client";\n\n${importLine}`);
  }

  // 2. Insert <BrandHubSections brandSlug="..." /> before footer or </main>
  const component = `\n      <BrandHubSections brandSlug="${brand}" />\n`;

  // Try to insert before <footer (inline footer)
  const footerIdx = content.lastIndexOf("<footer");
  const mainCloseIdx = content.lastIndexOf("</main>");

  if (footerIdx > 0 && footerIdx < mainCloseIdx) {
    // Find the start of the line containing <footer
    let lineStart = footerIdx;
    while (lineStart > 0 && content[lineStart - 1] !== "\n") lineStart--;
    content = content.slice(0, lineStart) + component + "\n" + content.slice(lineStart);
  } else if (mainCloseIdx > 0) {
    // Insert before </main>
    let lineStart = mainCloseIdx;
    while (lineStart > 0 && content[lineStart - 1] !== "\n") lineStart--;
    content = content.slice(0, lineStart) + component + "\n" + content.slice(lineStart);
  } else {
    console.log(`  ✗ ${brand} — could not find insertion point`);
    skipped++;
    continue;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`  ✓ ${brand}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
