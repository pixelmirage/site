import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  const url = 'http://localhost:5174/makaleler/kiracinin-haklari-nelerdir';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 }).catch(e => { console.error('goto error', e); process.exit(2); });

  // Wait for article to render
  await page.waitForSelector('.article-prose', { timeout: 10000 }).catch(() => {});

  const result = await page.evaluate(() => {
    const res = { preloaded: false, featured: false, featuredLoading: null, articleImages: [] };
    // check preload
    const preload = document.querySelector('link[rel="preload"][as="image"]');
    if (preload && preload.href) res.preloaded = preload.href;

    // featured
    const featuredContainer = document.querySelector('.container .bg-white > div > div');
    // safer: find first picture in page
    const featuredPicture = document.querySelector('.container picture');
    if (featuredPicture) {
      res.featured = true;
      const img = featuredPicture.querySelector('img');
      if (img) res.featuredLoading = img.getAttribute('loading') || null;
    }

    // article images
    const imgs = Array.from(document.querySelectorAll('.article-prose img'));
    for (const i of imgs) {
      res.articleImages.push({ src: i.getAttribute('src'), loading: i.getAttribute('loading') });
    }

    return res;
  });

  console.log(JSON.stringify(result, null, 2));
  await browser.close();

  // Basic checks
  if (!result.featured) {
    console.error('FEATURED_IMAGE_NOT_OPTIMIZED');
    process.exit(3);
  }
  if (result.featuredLoading !== 'eager') {
    console.error('FEATURED_NOT_EAGER');
    process.exit(4);
  }
  const lazyMissing = result.articleImages.some(i => i.loading !== 'lazy');
  if (lazyMissing) {
    console.error('SOME_ARTICLE_IMAGES_NOT_LAZY');
    process.exit(5);
  }

  console.log('VERIFICATION_PASSED');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
