// Walks presentation mode end to end in Brave (never Playwright's bundled
// Chromium): waits for each step to finish playing, screenshots it at 16:9,
// presses Next. Fails loudly if a step never finishes. Output: presentation-shots/.
// Usage: node scripts/present-walk.mjs [base-url] [--clean]
import { chromium } from 'playwright-core'
import { existsSync, mkdirSync } from 'node:fs'

const bravePath = [
  process.env.BRAVE_PATH,
  'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/usr/bin/brave-browser',
].find((p) => p && existsSync(p))
if (!bravePath) {
  console.error('Brave not found. Set BRAVE_PATH to the Brave executable.')
  process.exit(1)
}

const clean = process.argv.includes('--clean')
const base = process.argv.find((a) => a.startsWith('http')) ?? 'http://127.0.0.1:5173/'
const outDir = 'presentation-shots'
mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch({ executablePath: bravePath, headless: true })
// --size=1366x768 checks a laptop screen; the default is a 1600x900 projector.
const [width, height] = (process.argv.find((a) => a.startsWith('--size='))?.slice(7) ?? '1600x900').split('x').map(Number)
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1.5 })
await page.goto(base + '#/present')
await page.waitForLoadState('networkidle')

let step = 0
for (;;) {
  step++
  const ready = await page.waitForSelector('.pr-next.ready', { timeout: 20000 }).catch(() => null)
  if (!ready) {
    console.error(`step ${step}: never finished playing`)
    await page.screenshot({ path: `${outDir}/FAILED-${step}.png` })
    process.exitCode = 1
    break
  }
  await page.waitForTimeout(1400)
  // A site step lights its target with the halo; no halo means the target never appeared.
  if ((await page.$('.pr-card')) && !(await page.$('.pr-halo'))) {
    console.error(`step ${step}: its target never appeared (no halo)`)
    process.exitCode = 1
  }
  // --clean: hide the presenter card so the screenshot shows only the site (and the halo).
  if (clean) await page.addStyleTag({ content: '.pr-card{visibility:hidden!important}' })
  const count = await page.textContent('.pr-count')
  const file = `${outDir}/${clean ? 'clean-' : ''}${String(step).padStart(2, '0')}.png`
  await page.screenshot({ path: file })
  console.log('saved', file, count?.trim())
  const label = await page.textContent('.pr-next')
  if (label?.includes('Finish')) break
  if (clean) await page.addStyleTag({ content: '.pr-card{visibility:visible!important}' })
  await page.click('.pr-next')
  await page.waitForTimeout(150)
}
await browser.close()
