import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  const url = process.env.CHECK_URL || process.argv[2] || 'http://127.0.0.1:5174/makaleler/kiracinin-haklari-nelerdir';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(e => { console.error('goto error', e); process.exit(2); });

  // Wait for JSON-LD to be injected by the client
  await page.waitForSelector('#article-ldjson', { timeout: 10000 }).catch(() => {});

  // Wait until the injected JSON-LD contains an absolute image URL or url property
  await page.waitForFunction(() => {
    const s = document.querySelector('#article-ldjson');
    if (!s) return false;
    try { const j = JSON.parse(s.textContent); return (j.image && j.image.startsWith('https://')) || !!j.url; } catch(e) { return false }
  }, { timeout: 5000 }).catch(() => {});

  const data = await page.evaluate(async () => {
    const result = { ld: null, manifestEntry: null };
    const script = document.querySelector('#article-ldjson');
    if (script) {
      try { result.ld = JSON.parse(script.textContent); } catch(e) { result.ld = { parseError: e.message, raw: script.textContent } }
    }
    try {
      const res = await fetch('/images/makaleler/manifest.json');
      if (res.ok) {
        const m = await res.json();
        const featured = (result.ld && result.ld.image) ? result.ld.image.split('/').pop() : null;
        if (featured && m[featured]) result.manifestEntry = m[featured];
      }
    } catch(e) { result.manifestFetchError = e.message }
    return result;
  });

  console.log('article-ldjson:', JSON.stringify(data, null, 2));
  await browser.close();

  if (!data || !data.ld) {
    console.error('NO_ARTICLE_LDJSON');
    process.exit(3);
  }
  const ld = data.ld;
  if (ld['@type'] !== 'Article') {
    console.error('BAD_TYPE', ld['@type']);
    process.exit(4);
  }
  if (!ld.headline || !ld.description) {
    console.error('MISSING_HEADLINE_OR_DESC');
    process.exit(5);
  }
  if (!ld.image || !ld.url || !ld.image.startsWith('https://')) {
    console.error('MISSING_IMAGE_OR_URL');
    process.exit(6);
  }

  console.log('ARTICLE_LD_VERIFIED');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
