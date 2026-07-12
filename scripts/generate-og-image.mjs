/**
 * Generates a 1200×630 social-preview image from the rendered Cover Page.
 *
 * Usage: node scripts/generate-og-image.mjs
 *
 * 1. Starts the Vite dev server
 * 2. Launches headless Chrome
 * 3. Captures the Cover Page section at 1200×630
 * 4. Saves to public/og-cover.png
 */

import { createServer } from "vite";
import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUTPUT = resolve(ROOT, "public", "og-cover.png");

// Ensure public/ exists
mkdirSync(resolve(ROOT, "public"), { recursive: true });

// ── Start Vite dev server ──────────────────────────────────────────
const server = await createServer({
  root: ROOT,
  server: { port: 0 }, // pick any free port
  logLevel: "silent",
});
await server.listen();
const url = server.resolvedUrls.local[0];
console.log(`Vite dev server running at ${url}`);

// ── Launch headless Chrome ─────────────────────────────────────────
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();

  // 1200×630 is the standard social-preview aspect ratio (1.91:1)
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

  // Skip entrance animations for a clean static screenshot
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);

  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

  // Wait for fonts to render and layout to settle
  await page.evaluate(() => document.fonts.ready);
  // Extra tick for the reduced-motion instant render
  await new Promise((r) => setTimeout(r, 300));

  // Hide the navbar (tagged with data-chrome) so the preview shows only
  // the Cover Page content — the same way print styles do
  await page.addStyleTag({
    content: `
      [data-chrome] { display: none !important; }
      body { margin: 0; padding: 0; }
    `,
  });

  // Capture the full viewport
  await page.screenshot({ path: OUTPUT, type: "png" });

  console.log(`Saved OG image → ${OUTPUT}`);
} finally {
  await browser.close();
  await server.close();
}
