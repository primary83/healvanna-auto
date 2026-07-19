/**
 * Add RelatedDeals component to all blog posts.
 * Inserts before the closing </main> tag.
 * Maps each blog slug to relevant deal categories.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "app", "blog");

// Map blog slug keywords to deal service categories
function inferDealCategories(slug) {
  const s = slug.toLowerCase();
  const cats = [];

  if (s.includes("oil") || s.includes("maintenance") || s.includes("ev-maintenance")) cats.push("oil change", "maintenance");
  if (s.includes("ceramic") || s.includes("coating") || s.includes("detailing") || s.includes("detail") || s.includes("wax") || s.includes("polish") || s.includes("swirl") || s.includes("water-spot") || s.includes("tire-shine") || s.includes("clay-bar") || s.includes("interior-detailing") || s.includes("car-wash")) cats.push("detailing");
  if (s.includes("wrap") || s.includes("vinyl") || s.includes("ppf") || s.includes("paint-protection")) cats.push("detailing");
  if (s.includes("brake") || s.includes("braking")) cats.push("brakes");
  if (s.includes("tire") && !s.includes("tire-shine")) cats.push("tires");
  if (s.includes("battery") || s.includes("ev-") || s.includes("electric") || s.includes("charging") || s.includes("tesla") || s.includes("rivian") || s.includes("lucid") || s.includes("hybrid") || s.includes("ioniq") || s.includes("equinox")) cats.push("EV service");
  if (s.includes("paint") || s.includes("scratch") || s.includes("headlight")) cats.push("paint");
  if (s.includes("body-shop") || s.includes("collision") || s.includes("accident") || s.includes("dent")) cats.push("body work");
  if (s.includes("glass") || s.includes("windshield")) cats.push("auto glass");
  if (s.includes("ac-") || s.includes("ac ")) cats.push("AC service");
  if (s.includes("inspection")) cats.push("inspection");
  if (s.includes("alignment")) cats.push("alignment");
  if (s.includes("window-tint")) cats.push("detailing");
  if (s.includes("dashcam") || s.includes("parking-lot")) cats.push("maintenance");
  if (s.includes("road-trip") || s.includes("winter-car")) cats.push("maintenance");

  // Default fallback for EV articles
  if (cats.length === 0 && (s.includes("ev") || s.includes("electric"))) cats.push("EV service", "maintenance");
  // Default fallback
  if (cats.length === 0) cats.push("oil change", "detailing");

  return [...new Set(cats)]; // dedupe
}

const slugDirs = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== "category")
  .map(d => d.name);

let updated = 0;
let skipped = 0;

for (const slug of slugDirs) {
  const pagePath = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) {
    skipped++;
    continue;
  }

  let content = fs.readFileSync(pagePath, "utf-8");

  // Skip if already has RelatedDeals
  if (content.includes("RelatedDeals")) {
    skipped++;
    continue;
  }

  const cats = inferDealCategories(slug);
  const catsStr = cats.map(c => `"${c}"`).join(", ");

  // Add import
  if (!content.includes("import RelatedDeals")) {
    // Insert import after last existing import
    const lastImportIdx = content.lastIndexOf("import ");
    if (lastImportIdx >= 0) {
      const lineEnd = content.indexOf("\n", lastImportIdx);
      content = content.slice(0, lineEnd + 1) +
        `import RelatedDeals from "../../components/RelatedDeals";\n` +
        content.slice(lineEnd + 1);
    }
  }

  // Insert RelatedDeals before closing </main>
  const mainCloseIdx = content.lastIndexOf("</main>");
  if (mainCloseIdx >= 0) {
    const indent = "      ";
    const component = `\n${indent}{/* Related Deals */}\n${indent}<section className="px-4 pb-12">\n${indent}  <div className="max-w-4xl mx-auto">\n${indent}    <RelatedDeals serviceCategories={[${catsStr}]} />\n${indent}  </div>\n${indent}</section>\n${indent}`;
    content = content.slice(0, mainCloseIdx) + component + content.slice(mainCloseIdx);
    fs.writeFileSync(pagePath, content);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`RelatedDeals added to ${updated} blog posts. Skipped: ${skipped}.`);
