/**
 * Connect all email/newsletter forms to Formspree endpoint.
 * Replaces dummy handleSubscribe functions with real Formspree POST calls.
 */
const fs = require("fs");
const path = require("path");

const FORMSPREE = "https://formspree.io/f/xjggywyr";

// Pattern 1: Multi-line handleSubscribe (guides)
// const handleSubscribe = (e: React.FormEvent) => {
//   e.preventDefault();
//   setSubscribed(true);
//   setEmail("");
// };
const PATTERN_MULTILINE = /const handleSubscribe = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\);\s*setSubscribed\(true\);\s*setEmail\(""\);\s*\};/g;

// Pattern 2: Single-line handleSubscribe
// const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); setSubscribed(true); setEmail(""); };
const PATTERN_SINGLELINE = /const handleSubscribe = \(e: React\.FormEvent\) => \{ e\.preventDefault\(\); setSubscribed\(true\); setEmail\(""\); \};/g;

const REPLACEMENT = `const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch("${FORMSPREE}", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter Signup" }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      // Silently fail - show success anyway for UX
      setSubscribed(true);
      setEmail("");
    }
  };`;

// Walk directory tree
function walk(dir, ext) {
  let results = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, f.name);
    if (f.isDirectory()) results.push(...walk(fp, ext));
    else if (f.name.endsWith(ext)) results.push(fp);
  }
  return results;
}

const guideFiles = walk("app/guides", ".tsx");
let updated = 0;

for (const file of guideFiles) {
  let content = fs.readFileSync(file, "utf-8");
  const before = content;
  content = content.replace(PATTERN_MULTILINE, REPLACEMENT);
  content = content.replace(PATTERN_SINGLELINE, REPLACEMENT);
  if (content !== before) {
    fs.writeFileSync(file, content);
    console.log(`Updated: ${file}`);
    updated++;
  }
}

console.log(`\nUpdated ${updated} guide files.`);
