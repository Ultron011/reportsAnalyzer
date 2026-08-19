// Generates two brand assets via Gemini 3 Pro Image: a favicon/app mark and an
// OG/social preview image. Both are strictly non-lifestyle / non-photographic —
// abstract, geometric or typographic only, per the design guidelines' ban on
// generated lifestyle imagery on brand surfaces.
//
// Usage: npm run generate-assets  (reads GEMINI_API_KEY from .env)

import 'dotenv/config'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'generated')

const API_KEY = process.env.GEMINI_API_KEY
// Note: gemini-3-pro-image is only exposed under the v1beta API surface,
// not v1 — confirmed via GET .../v1beta/models against this API key.
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image:generateContent'

const PALETTE_NOTE =
  'Palette: deep navy/charcoal (#0b1526), a teal/cyan accent (#0d84c4), a warm orange secondary ' +
  'accent (#f0740c), and white/light-gray surfaces (#f6f8fb). No gradients beyond subtle tone ' +
  'shifts. Strictly abstract, geometric or typographic — no photography, no illustrated people, ' +
  'no lifestyle imagery, no stock-photo aesthetic, no faces.'

const ASSETS = [
  {
    name: 'brand-mark',
    file: 'brand-mark.png',
    prompt:
      'Design a small abstract geometric brand mark / logo, square canvas, for a product called ' +
      '"Reports Analyzer". Must read clearly at 32-40 pixels in a website header: bold, simple, ' +
      'high-contrast geometric shapes only (for example an abstracted document outline crossed with ' +
      'a transform arrow, built from a few rounded rectangles and one clean arrow or checkmark) — ' +
      'no text, no letters, no photography, no people. ' +
      PALETTE_NOTE +
      ' Use the teal/cyan accent as the dominant mark colour with a touch of the orange accent, on a ' +
      'transparent or solid navy background. Flat design, no drop shadows, no gradients, centered ' +
      'composition with generous margin.',
  },
  {
    name: 'favicon-source',
    file: 'favicon-source.png',
    prompt:
      'Design a small abstract geometric app icon mark, square canvas, for a product called ' +
      '"Reports Analyzer". The mark should read clearly at 32x32 pixels: bold, simple, high-contrast ' +
      'geometric shapes only (for example an abstracted open-document or arrow-transform motif built ' +
      'from rectangles and a simple arrow) — no text, no letters, no photography, no people. ' +
      PALETTE_NOTE +
      ' Flat design, no drop shadows, no gradients, centered composition with generous margin, ' +
      'solid deep navy background with the teal/cyan accent as the mark colour.',
  },
  {
    name: 'og-image',
    file: 'og-image.png',
    prompt:
      'Design a 1200x630 pixel social media preview card (Open Graph image) for a product called ' +
      '"Reports Analyzer". Typographic and abstract only: large confident bold grotesk sans-serif ' +
      'headline text reading exactly "Reports Analyzer" plus a short line beneath it reading ' +
      '"Understand your medical report." Include a small abstract geometric motif (simple rounded ' +
      'rectangles and an arrow suggesting transformation from a dense technical table into plain ' +
      'text) as a supporting graphic element, not a literal illustration. No photography, no people, ' +
      'no stock imagery. ' +
      PALETTE_NOTE +
      ' Generous negative space, calm and professional composition, solid deep navy background with ' +
      'white headline text, the teal/cyan accent on the supporting motif, and one small orange accent ' +
      'shape.',
  },
  {
    name: 'hero-ribbon-flow',
    file: 'hero-ribbon-flow.png',
    prompt:
      'Design a 1920x1200 pixel abstract light-blue background for a premium healthcare data product ' +
      'hero section, full-bleed, usable behind a two-column layout (headline left, card right). Base ' +
      'is a soft near-white to pale sky-blue gradient (#f8fbfe to #eaf4fc), NOT dark. Overlay two or ' +
      'three long, smooth, softly curved ribbon-like ribbons of translucent color sweeping ' +
      'diagonally across the right two-thirds of the frame, in graduated tones of blue and teal ' +
      '(#c9e6f7, #8fc4e8, #0d84c4 at low opacity), suggesting flowing, resolving data streams, with ' +
      'soft blurred edges, no hard lines. NO text, no letters, no logos, no photography, no ' +
      'illustrated people, no faces, no literal document or paper icon, no medical symbols, no ' +
      'bandage or pill shapes. Pure abstract flowing color composition. Left third of the frame must ' +
      'stay light and low-contrast enough that dark navy headline text reads clearly over it. Calm, ' +
      'premium, cinematic but restrained, no noise or grain.',
  },
]

async function generateAsset({ name, file, prompt }) {
  if (!API_KEY) {
    console.error(`[${name}] FAILED: GEMINI_API_KEY is not set in .env`)
    return false
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
      }),
    })

    if (!res.ok) {
      const body = await res.text().catch(() => '')
      console.error(`[${name}] FAILED: HTTP ${res.status} ${res.statusText}\n${body.slice(0, 500)}`)
      return false
    }

    const data = await res.json()
    const parts = data?.candidates?.[0]?.content?.parts ?? []
    const imagePart = parts.find((p) => p.inlineData?.data)

    if (!imagePart) {
      console.error(`[${name}] FAILED: no inline image data in response`)
      console.error(JSON.stringify(data).slice(0, 800))
      return false
    }

    const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
    const outPath = path.join(OUT_DIR, file)
    await writeFile(outPath, buffer)
    console.log(`[${name}] OK: wrote ${outPath} (${buffer.length} bytes)`)
    return true
  } catch (err) {
    console.error(`[${name}] FAILED: ${err.message}`)
    return false
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  const only = process.argv[2]
  const targets = only ? ASSETS.filter((a) => a.name === only) : ASSETS

  const results = []
  for (const asset of targets) {
    // Sequential, so one failure's console output does not interleave with the next request.
    // eslint-disable-next-line no-await-in-loop
    results.push(await generateAsset(asset))
  }

  const okCount = results.filter(Boolean).length
  console.log(`\nDone: ${okCount}/${targets.length} assets generated.`)
  if (okCount < targets.length) {
    process.exitCode = 1
  }
}

main()
