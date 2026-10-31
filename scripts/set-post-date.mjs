#!/usr/bin/env node
// Set a blog post's publish date to its go-live day (Europe/Istanbul).
// Usage: node scripts/set-post-date.mjs <slug> [YYYY-MM-DD]
// Run on the PR branch right before squash-merging; commit and push, then merge.
// Rewrites the frontmatter `date` and `dateModified` fields, which drive the visible
// date, BlogPosting datePublished/dateModified, og times and sitemap lastmod.
import fs from "node:fs";
const [slug, given] = process.argv.slice(2);
if (!slug) { console.error("usage: node scripts/set-post-date.mjs <slug> [YYYY-MM-DD]"); process.exit(1); }
const day = given || new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) { console.error("bad date: " + day); process.exit(1); }
const file = ["ictihat", "blog"].map((d) => `src/content/${d}/${slug}.mdx`).find((f) => fs.existsSync(f));
if (!file) { console.error("post not found: " + slug); process.exit(1); }
let s = fs.readFileSync(file, "utf8");
const end = s.indexOf("\n---", 3);
let fm = s.slice(0, end), body = s.slice(end);
const set = (k) => { const re = new RegExp(`^${k}:.*$`, "m"); fm = re.test(fm) ? fm.replace(re, `${k}: "${day}"`) : fm + `\n${k}: "${day}"`; };
set("date"); set("dateModified");
fs.writeFileSync(file, fm + body);
console.log(`${file}: date/dateModified = ${day}`);
