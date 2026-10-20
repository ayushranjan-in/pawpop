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
let n = 0
const shot = async (name) => {
  await page.waitForTimeout(500)
  const file = `snapshots/${String(++n).padStart(2, '0')}-${name}.png`
  await page.screenshot({ path: file, fullPage: true })
  console.log('saved', file)
}

await page.goto(base + '#/')
await page.waitForLoadState('networkidle')
await shot('landing')

await page.goto(base + '#/join')
await shot('join-dog-empty')
await page.getByText('Fill with sample data').click()
await shot('join-dog-filled')
await page.getByRole('button', { name: 'Continue' }).click()
await page.getByText('Fill with sample data').click()
await shot('join-you')
await page.getByRole('button', { name: /See .* profile/ }).click()
await shot('join-review')
await page.getByRole('button', { name: 'Looks right' }).click()
await shot('join-book')
await page.getByRole('button', { name: /Book the first available|Confirm booking/ }).click()
await shot('join-confirmed')
await page.getByRole('button', { name: /Fast-forward/ }).click()
await page.waitForLoadState('networkidle')
for (const tab of ['Overview', 'Profile', 'Group', 'Recommendations', 'Share']) {
  await page.locator('.tab', { hasText: tab }).click()
  await shot('account-' + tab.toLowerCase())
}
await browser.close()
