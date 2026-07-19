/**
 * fix-brand-footers.cjs
 * Replaces inline <footer>...</footer> elements in brand pages with <Footer /> component.
 */
const fs = require("fs");
const path = require("path");

const BRANDS = [
  "tesla","bmw","ford","kia","volvo","byd","nio","rivian","lucid",
  "mercedes","porsche","hyundai","genesis","volkswagen","audi","polestar",
  "cadillac","chevrolet","jaguar","vinfast","xiaomi","xpeng","zeekr","li-auto"
];

let updated = 0;

for (const brand of BRANDS) {
  const filePath = path.join(__dirname, "app", "cars", brand, "page.tsx");
  let content = fs.readFileSync(filePath, "utf8");

  // 1. Add Footer import if not present
  if (!content.includes('import Footer')) {
    // Add after last import
    const importRegex = /^import .+$/gm;
    let lastEnd = 0;
    let m;
    while ((m = importRegex.exec(content)) !== null) {
      lastEnd = m.index + m[0].length;
    }
    if (lastEnd > 0) {
      content = content.slice(0, lastEnd) + '\nimport Footer from "../../components/Footer";' + content.slice(lastEnd);
    }
  }

  // 2. Replace inline <footer ...>...</footer> with <Footer />
  // Match the footer block - it could span multiple lines
  const footerRegex = /\n?\s*<footer[\s\S]*?<\/footer>/;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, '\n      <Footer />');
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`  ✓ ${brand}`);
    updated++;
  } else {
    console.log(`  ○ ${brand} — no inline footer found`);
  }
}

console.log(`\nDone: ${updated} pages updated`);
