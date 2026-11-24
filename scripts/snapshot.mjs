// Walks the demo site through the Brave browser (never Playwright's bundled
// Chromium) and screenshots each page. Usage: npm run snapshot [url].
// Output goes to snapshots/ (gitignored).
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

const base = process.argv[2] ?? 'http://127.0.0.1:5173/'
mkdirSync('snapshots', { recursive: true })
const browser = await chromium.launch({ executablePath: bravePath, headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('response', (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`))
let n = 0
const shot = async (name) => {
  await page.waitForTimeout(500)
  const file = `snapshots/${String(++n).padStart(2, '0')}-${name}.png`
  await page.screenshot({ path: file, fullPage: true })
  console.log('saved', file)
}
const next = () => page.locator('.form-foot .btn-primary').click()

await page.goto(base + '#/')
await page.waitForLoadState('networkidle')
await shot('home')

await page.goto(base + '#/book')
await shot('book-pet-empty')
await page.getByText('Fill with sample data').click()
await shot('book-pet-filled')
await next()
await page.locator('.time-pill', { hasText: '10:30' }).first().click()
await shot('book-time')
await next()
await page.getByText('Fill with sample data').click()
await shot('book-you')
await next()
await shot('book-confirmed')
await page.locator('.confirm .btn-primary').click()
await page.waitForLoadState('networkidle')
await shot('account-plan')
await page.locator('.tab', { hasText: 'Calendar' }).click()
await shot('account-calendar')
await page.locator('.tab', { hasText: 'Vet visit' }).click()
await shot('vet-front-desk')
await page.getByRole('button', { name: 'Share my budget code' }).click()
await shot('vet-options')
await page.getByRole('button', { name: 'Ask for a second look' }).click()
await shot('vet-second-look')
await page.getByRole('button', { name: 'Go with option A' }).click()
await shot('vet-plan')
await page.getByRole('button', { name: 'Confirm plan' }).click()
await shot('vet-done')

// Phone width, for the home page and the vet visit.
await page.setViewportSize({ width: 390, height: 844 })
await page.goto(base + '#/')
await shot('phone-home')
await page.goto(base + '#/account/vet')
await page.getByRole('button', { name: 'Share my budget code' }).click()
await shot('phone-vet-options')

await browser.close()
if (errors.length) {
  console.error('Page errors:\n' + errors.join('\n'))
  process.exit(1)
}
