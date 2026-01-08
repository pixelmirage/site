import sharp from 'sharp'
import { mkdirSync, readdirSync, writeFileSync } from 'fs'
import path from 'path'

const dir = path.resolve('./public/images/makaleler')
mkdirSync(dir, { recursive: true })

const widths = [400, 800, 1200, 1600]
const manifest = {}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return

  const basename = path.basename(file, ext)
  const srcPath = path.join(dir, file)

  try {
    const meta = await sharp(srcPath).metadata()
    const originalWidth = meta.width || null
    const originalHeight = meta.height || null

    const srcsetWebp = []
    const srcsetPng = []

    for (const w of widths) {
      const webpOut = path.join(dir, `${basename}-${w}.webp`)
      const pngOut = path.join(dir, `${basename}-${w}.png`)

      // Resize to width `w` but don't upscale
      await sharp(srcPath).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpOut)
      await sharp(srcPath).resize({ width: w, withoutEnlargement: true }).png({ quality: 85 }).toFile(pngOut)

      srcsetWebp.push(`/images/makaleler/${basename}-${w}.webp ${w}w`)
      srcsetPng.push(`/images/makaleler/${basename}-${w}.png ${w}w`)
    }

    // placeholder
    const placeholderOut = path.join(dir, `${basename}-placeholder.webp`)
    await sharp(srcPath).resize({ width: 20 }).webp({ quality: 40 }).toFile(placeholderOut)

    manifest[file] = {
      srcsetWebp: srcsetWebp.join(', '),
      srcsetPng: srcsetPng.join(', '),
      placeholder: `/images/makaleler/${basename}-placeholder.webp`,
      largestWebp: `/images/makaleler/${basename}-${Math.max(...widths)}.webp`,
      widths,
      width: originalWidth,
      height: originalHeight
    }

    console.log(`Processed ${file}`)
  } catch (err) {
    console.error(`Failed to process ${file}:`, err)
  }
}

async function run() {
  const files = readdirSync(dir)
  const candidates = files.filter(f => /\.(png|jpe?g|webp)$/i.test(f))

  for (const f of candidates) {
    // Skip placeholders or already generated variants to avoid loops
    if (/-\d+\.(png|webp)$/i.test(f) || /-placeholder\.webp$/i.test(f)) continue
    await processImage(f)
  }

  // Write manifest
  const manifestPath = path.join(dir, 'manifest.json')
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`Wrote manifest to ${manifestPath}`)
}

run().catch(err => { console.error(err); process.exit(1) })
