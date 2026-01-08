import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  const url = process.env.CHECK_URL || process.argv[2] || 'http://127.0.0.1:5174/makaleler/kiracinin-haklari-nelerdir';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  const meta = await page.evaluate(() => {
    const get = sel => document.querySelector(sel)?.getAttribute('content') || null;
    return {
      ogImage: get('meta[property="og:image"]'),
      ogWidth: get('meta[property="og:image:width"]'),
      ogHeight: get('meta[property="og:image:height"]'),
      twitterCard: get('meta[name="twitter:card"]'),
      twitterImage: get('meta[name="twitter:image"]')
    };
  });

  console.log(meta);
  await browser.close();

  if (!meta.ogImage || !meta.twitterCard || !meta.twitterImage) {
    console.error('OG/TW_META_MISSING', meta);
    process.exit(2);
  }
  if (!meta.ogImage.startsWith('https://')) {
    console.error('OG_IMAGE_NOT_ABSOLUTE', meta.ogImage);
    process.exit(3);
  }
  console.log('OG_TW_VERIFIED');
  process.exit(0);
}

run().catch(e=>{ console.error(e); process.exit(1) });
