import http from 'http';
import { URL } from 'url';

const fetch = async (url) => new Promise((resolve,reject)=>{
  const u = new URL(url);
  const opts = { hostname:u.hostname, port:u.port || 80, path:u.pathname+u.search, method:'GET' };
  const req = http.request(opts, res => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', d=>body+=d);
    res.on('end', ()=>resolve({ status: res.statusCode, text: async ()=>body }));
  });
  req.on('error', reject);
  req.end();
});

const extract = (html, name, regex) => {
  const m = html.match(regex);
  if (!m) return null;
  return m[1] ? m[1].trim().replace(/\s+/g,' ') : null;
};

const getMeta = (html) => ({
  title: extract(html, 'title', /<title[^>]*>([\s\S]*?)<\/title>/i),
  description: extract(html, 'description', /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),
  canonical: extract(html, 'canonical', /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i),
  ogTitle: extract(html, 'ogTitle', /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),
  ogDesc: extract(html, 'ogDesc', /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),
  ogImage: extract(html, 'ogImage', /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),
  twitter: extract(html, 'twitter', /<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']+)["'][^>]*>/i),
  ldjson: extract(html, 'ldjson', /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i),
  lang: extract(html, 'lang', /<html[^>]*lang=["']([^"']+)["'][^>]*>/i)
});

const pages = ['/', '/makaleler/kiracinin-haklari-nelerdir'];
// Allow overriding the host via environment variable or CLI arg (useful for preview on different ports)
const host = process.env.SEO_HOST || process.argv[2] || 'http://127.0.0.1:5174';

async function check() {
  const results = [];
  for (const p of pages) {
    const url = host + p;
    try {
      const res = await fetch(url);
      const text = await res.text();
      const meta = getMeta(text);
      results.push({ url, status: res.status, ...meta, hasLD: !!meta.ldjson });
    } catch (err) {
      results.push({ url, error: err.message });
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

check().catch(e=>{console.error(e); process.exit(1)})
