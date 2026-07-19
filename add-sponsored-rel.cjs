/**
 * Add rel="sponsored" to external links in car model pages and other pages.
 * Targets <a> tags with href to manufacturer websites that lack rel="sponsored".
 */
const fs = require("fs");
const path = require("path");

function walk(dir, ext) {
  let results = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, f.name);
    if (f.isDirectory()) results.push(...walk(fp, ext));
    else if (f.name.endsWith(ext)) results.push(fp);
  }
  return results;
}

// External domains that should get sponsored
const SPONSORED_DOMAINS = [
  "bmwusa.com", "mercedes-benz.com", "porsche.com", "tesla.com",
  "rivian.com", "nissan.com", "honda.com", "subaru.com", "toyota.com",
  "fiatusa.com", "dodge.com", "gmc.com", "lexus.com", "acura.com",
  "miniusa.com", "hyundaiusa.com", "kia.com", "lucidmotors.com",
  "byd.com", "nioev.com", "lixiang.com", "xpeng.com", "xiaomi.com",
  "zeekr.com", "volvocars.com", "polestar.com", "genesis.com",
  "cadillac.com", "chevrolet.com", "ford.com", "volkswagen.com",
  "audiusa.com", "firestonecompleteautocare.com", "meineke.com",
  "jiffylube.com", "jiffylubeflorida.com", "nhtsa.gov",
  "vinfast.com", "genesismotorsusa.com",
];

let updated = 0;
let totalLinks = 0;

const carFiles = walk("app/cars", ".tsx");
const recallFiles = walk("app/recalls", ".tsx");
const allFiles = [...carFiles, ...recallFiles];

for (const file of allFiles) {
  let content = fs.readFileSync(file, "utf-8");
  const before = content;

  // Match <a ... href="https://..." ... rel="noopener noreferrer" ...> without "sponsored"
  // Replace rel="noopener noreferrer" with rel="noopener noreferrer sponsored"
  content = content.replace(
    /(<a\s[^>]*href="https?:\/\/[^"]*"[^>]*)\brel="noopener noreferrer"([^>]*>)/g,
    (match, prefix, suffix) => {
      // Check if href is to a sponsored domain
      const hrefMatch = match.match(/href="(https?:\/\/[^"]*)"/);
      if (!hrefMatch) return match;
      const href = hrefMatch[1];
      const isSponsored = SPONSORED_DOMAINS.some(d => href.includes(d));
      if (!isSponsored) return match;
      if (match.includes("sponsored")) return match; // already has it
      totalLinks++;
      return `${prefix}rel="noopener noreferrer sponsored"${suffix}`;
    }
  );

  if (content !== before) {
    fs.writeFileSync(file, content);
    console.log(`Updated: ${file}`);
    updated++;
  }
}

console.log(`\nUpdated ${updated} files, ${totalLinks} links tagged as sponsored.`);
