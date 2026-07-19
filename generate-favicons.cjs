const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Colors from the site theme
const BG = "#0f172a";
const GREEN = "#10B981";

/**
 * Generate an SVG favicon with a bold "H" lettermark
 * and a subtle lightning-bolt accent on the crossbar.
 * size = viewBox dimension (square)
 */
function makeSvg(size) {
  // Scale everything relative to a 512-unit canvas
  const s = size;

  // Rounded-rect background
  const r = Math.round(s * 0.15); // corner radius

  // "H" letter dimensions
  const pad = Math.round(s * 0.18);       // padding from edge
  const stemW = Math.round(s * 0.18);     // stem width
  const crossH = Math.round(s * 0.16);    // crossbar height

  const leftX = pad;
  const rightX = s - pad - stemW;
  const topY = pad;
  const botY = s - pad;
  const crossY = Math.round((s - crossH) / 2);

  // Lightning bolt notch on the crossbar — a small zigzag cut
  const midX = Math.round(s / 2);
  const zOff = Math.round(s * 0.04); // zigzag horizontal offset
  const zDip = Math.round(s * 0.04); // zigzag vertical depth

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" rx="${r}" ry="${r}" fill="${BG}"/>
  <!-- Left stem -->
  <rect x="${leftX}" y="${topY}" width="${stemW}" height="${botY - topY}" rx="${Math.round(stemW * 0.15)}" fill="${GREEN}"/>
  <!-- Right stem -->
  <rect x="${rightX}" y="${topY}" width="${stemW}" height="${botY - topY}" rx="${Math.round(stemW * 0.15)}" fill="${GREEN}"/>
  <!-- Crossbar with lightning-bolt notch -->
  <path d="
    M ${leftX + stemW} ${crossY}
    L ${midX - zOff} ${crossY}
    L ${midX + zOff} ${crossY + crossH}
    L ${rightX} ${crossY + crossH}
    L ${rightX} ${crossY + crossH}
    L ${midX + zOff} ${crossY + crossH}
    L ${midX - zOff} ${crossY}
    L ${leftX + stemW} ${crossY}
    Z
  " fill="${GREEN}"/>
  <!-- Clean crossbar (simpler approach) -->
  <rect x="${leftX + stemW - 1}" y="${crossY}" width="${rightX - leftX - stemW + 2}" height="${crossH}" fill="${GREEN}"/>
  <!-- Lightning bolt overlay on crossbar -->
  <path d="
    M ${midX + zOff} ${crossY - zDip}
    L ${midX - zOff} ${crossY + Math.round(crossH * 0.55)}
    L ${midX + Math.round(zOff * 0.5)} ${crossY + Math.round(crossH * 0.45)}
    L ${midX - zOff} ${crossY + crossH + zDip}
    L ${midX + zOff} ${crossY + Math.round(crossH * 0.45)}
    L ${midX - Math.round(zOff * 0.5)} ${crossY + Math.round(crossH * 0.55)}
    Z
  " fill="${BG}" opacity="0.6"/>
</svg>`;
}

/**
 * Simpler, bolder version — just the "H" with a clean lightning-bolt
 * slash through the crossbar for EV vibes.
 */
function makeSvgClean(size) {
  const s = size;
  const r = Math.round(s * 0.16);

  // H geometry
  const pad = Math.round(s * 0.17);
  const stemW = Math.round(s * 0.19);
  const crossH = Math.round(s * 0.17);
  const stemR = Math.round(stemW * 0.12);

  const lx = pad;
  const rx = s - pad - stemW;
  const ty = pad;
  const by = s - pad;
  const cy = Math.round((s - crossH) / 2);

  // Lightning slash: a diagonal line cutting through the crossbar
  const boltW = Math.round(s * 0.035);
  const boltAngle = Math.round(s * 0.06);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" rx="${r}" ry="${r}" fill="${BG}"/>
  <!-- Left stem -->
  <rect x="${lx}" y="${ty}" width="${stemW}" height="${by - ty}" rx="${stemR}" fill="${GREEN}"/>
  <!-- Right stem -->
  <rect x="${rx}" y="${ty}" width="${stemW}" height="${by - ty}" rx="${stemR}" fill="${GREEN}"/>
  <!-- Crossbar -->
  <rect x="${lx + stemW - 1}" y="${cy}" width="${rx - lx - stemW + 2}" height="${crossH}" fill="${GREEN}"/>
  <!-- Lightning bolt slash through crossbar -->
  <polygon points="
    ${Math.round(s / 2) + boltAngle},${cy - Math.round(s * 0.03)}
    ${Math.round(s / 2) + boltAngle + boltW},${cy - Math.round(s * 0.03)}
    ${Math.round(s / 2) - boltAngle + boltW},${cy + crossH + Math.round(s * 0.03)}
    ${Math.round(s / 2) - boltAngle},${cy + crossH + Math.round(s * 0.03)}
  " fill="${BG}"/>
</svg>`;
}

async function main() {
  const appDir = path.join(__dirname, "app");

  // Generate the clean SVG at 512px as our master
  const svg512 = makeSvgClean(512);

  // Also save the SVG for reference
  fs.writeFileSync(path.join(appDir, "icon.svg"), makeSvgClean(512));
  console.log("Created: app/icon.svg");

  // Generate PNGs at required sizes
  const sizes = [
    { name: "apple-icon.png", size: 180 },
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(Buffer.from(svg512))
      .resize(size, size)
      .png()
      .toFile(path.join(appDir, name));
    console.log(`Created: app/${name} (${size}x${size})`);
  }

  // Generate favicon.ico — a 32x32 PNG renamed to .ico
  // For proper ICO, we'll create 16x16 and 32x32 PNGs and combine them
  const png16 = await sharp(Buffer.from(makeSvgClean(64)))
    .resize(16, 16)
    .png()
    .toBuffer();

  const png32 = await sharp(Buffer.from(makeSvgClean(128)))
    .resize(32, 32)
    .png()
    .toBuffer();

  // Build a proper ICO file with both sizes
  const ico = buildIco([
    { width: 16, height: 16, png: png16 },
    { width: 32, height: 32, png: png32 },
  ]);

  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);
  console.log("Created: app/favicon.ico (16x16 + 32x32)");

  console.log("\nDone! All favicon files generated.");
}

/**
 * Build a minimal ICO file from PNG buffers.
 * ICO format: 6-byte header, then directory entries, then image data.
 */
function buildIco(images) {
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  let dataOffset = headerSize + dirEntrySize * numImages;

  // ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);          // reserved
  header.writeUInt16LE(1, 2);          // type: 1 = ICO
  header.writeUInt16LE(numImages, 4);  // number of images

  const dirEntries = [];
  const imageBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);   // width (0 = 256)
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);  // height
    entry.writeUInt8(0, 2);             // color palette
    entry.writeUInt8(0, 3);             // reserved
    entry.writeUInt16LE(1, 4);          // color planes
    entry.writeUInt16LE(32, 6);         // bits per pixel
    entry.writeUInt32LE(img.png.length, 8);   // image size
    entry.writeUInt32LE(dataOffset, 12);       // data offset

    dirEntries.push(entry);
    imageBuffers.push(img.png);
    dataOffset += img.png.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

main().catch(console.error);
