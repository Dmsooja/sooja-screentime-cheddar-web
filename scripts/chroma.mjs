import { readFileSync, writeFileSync } from 'node:fs'
import { PNG } from 'pngjs'

// Knock a solid backdrop colour out of the Figma node exports so the chrome
// objects float transparently over the token-driven section backgrounds.
const JOBS = [
  { file: 'camera', rgb: [176, 254, 0] },
  { file: 'headphones', rgb: [176, 254, 0] },
  { file: 'sneaker', rgb: [176, 254, 0] },
  { file: 'skateboard', rgb: [176, 254, 0] },
  { file: 'chart', rgb: [255, 145, 242] },
  { file: 'wallet', rgb: [255, 145, 242] },
]

const INNER = 55 // fully transparent below this colour distance
const OUTER = 115 // feather edge up to this distance

for (const { file, rgb } of JOBS) {
  const path = new URL(`../public/assets/${file}.png`, import.meta.url)
  const png = PNG.sync.read(readFileSync(path))
  const [tr, tg, tb] = rgb
  let cleared = 0

  for (let i = 0; i < png.data.length; i += 4) {
    const dr = png.data[i] - tr
    const dg = png.data[i + 1] - tg
    const db = png.data[i + 2] - tb
    const dist = Math.sqrt(dr * dr + dg * dg + db * db)

    if (dist <= INNER) {
      png.data[i + 3] = 0
      cleared++
    } else if (dist < OUTER) {
      const feather = (dist - INNER) / (OUTER - INNER)
      png.data[i + 3] = Math.round(png.data[i + 3] * feather)
    }
  }

  writeFileSync(path, PNG.sync.write(png))
  console.log(`${file}.png — cleared ${cleared} px`)
}
