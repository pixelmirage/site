import fs from 'fs';
import path from 'path';

const distIndex = 'dist/index.html';
const articlesDir = 'public/makaleler';
const manifestPath = 'public/images/makaleler/manifest.json';
const siteBase = 'https://mertkagancetin.com';

function extractTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}
function extractFirstParagraph(md) {
  const parts = md.split(/\n\s*\n/);
  for (const p of parts) {
    const t = p.trim();
    if (!t) continue;
    if (/^#/.test(t)) continue;
    if (/^!\[/.test(t)) continue;
    return t.replace(/\n+/g,' ').replace(/\s+/g,' ').slice(0, 200).trim();
  }
  return null;
}
function extractFirstImage(md) {
  const m = md.match(/!\[[^\]]*\]\(([^)]+)\)/);
  return m ? m[1] : null;
}

async function prerender() {
  if (!fs.existsSync(distIndex)) {
    console.error('dist/index.html not found — build first');
    process.exit(1);
  }
  const template = fs.readFileSync(distIndex, 'utf8');
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath,'utf8')); } catch(e){ }
  }
  const files = fs.readdirSync(articlesDir).filter(f=>f.endsWith('.md'));
  for (const f of files) {
    const slug = path.basename(f, '.md');
    const md = fs.readFileSync(path.join(articlesDir,f),'utf8');
    const title = extractTitle(md) || 'Makale';
    const desc = extractFirstParagraph(md) || title;
    const img = extractFirstImage(md);
    let imageUrl = siteBase + '/logo.png';
    if (img) {
      // normalize path
      const clean = img.startsWith('/') ? img.slice(1) : img;
      const key = '/' + clean.replace(/^images\//,'');
      // manifest keys are basenames? try multiple ways
      const base = path.basename(clean);
      if (manifest[base] && manifest[base].largestWebp) imageUrl = siteBase + manifest[base].largestWebp;
      else if (manifest[clean] && manifest[clean].largestWebp) imageUrl = siteBase + manifest[clean].largestWebp;
      else if (clean.startsWith('images/') && fs.existsSync('public/'+clean)) imageUrl = siteBase + '/' + clean;
    }

    const pageMeta = `    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(desc)}">
    <meta property="og:image" content="${imageUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${imageUrl}">
    <link rel="canonical" href="${siteBase}/makaleler/${slug}">

    <script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': title,
  'description': desc,
  'image': imageUrl,
  'url': siteBase + '/makaleler/' + slug
}, null, 2)}
    </script>
`;

    // Replace site-level og/twitter/canonical tags so article pages show article-specific values
    let cleaned = template
      .replace(/<meta[^>]*property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}">`)
      .replace(/<meta[^>]*property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(desc)}">`)
      .replace(/<meta[^>]*property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${imageUrl}">`)
      .replace(/<meta[^>]*name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${imageUrl}">`)
      .replace(/<meta[^>]*name=["']twitter:card["'][^>]*>/i, `<meta name="twitter:card" content="summary_large_image">`)
      .replace(/<link[^>]*rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${siteBase}/makaleler/${slug}">`);

    // Ensure article meta appear early in <head> (insert right after opening <head>)
    const headInsert = pageMeta + '  <script id="article-ldjson" type="application/ld+json">\n' + JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': desc,
      'image': imageUrl,
      'url': siteBase + '/makaleler/' + slug
    }, null, 2) + '\n  </script>\n';

    // Simple and robust insertion: insert article meta right after the literal '<head>' tag
    const out = cleaned.replace('<head>', '<head>\n' + headInsert);
    const outDir = path.join('dist','makaleler',slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir,'index.html'), out, 'utf8');
    console.log('Prerendered', slug, '->', path.join(outDir,'index.html'));
  }
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

prerender().catch(e=>{ console.error(e); process.exit(1); });
