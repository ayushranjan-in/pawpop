// DOM helpers for the presenter: find elements by selector and visible text,
// wait for them to appear, and click them the way a person would (scroll into
// view first). Ported in spirit from NEWTRADER's guide.js, where the tour
// drives the real page instead of a parallel copy of it.

export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

/** First element matching `selector` whose text contains `text` (case-insensitive). */
export function find(selector: string, text?: string): HTMLElement | null {
  const all = Array.from(document.querySelectorAll<HTMLElement>(selector))
  if (!text) return all[0] ?? null
  const needle = text.toLowerCase()
  return all.find((el) => (el.textContent ?? '').toLowerCase().includes(needle)) ?? null
}

export async function waitFor(selector: string, text?: string, timeoutMs = 4000): Promise<HTMLElement | null> {
  const start = performance.now()
  for (;;) {
    const el = find(selector, text)
    if (el) return el
    if (performance.now() - start > timeoutMs) return null
    await sleep(80)
  }
}

export function scrollTo(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  const outOfView = r.top < 90 || r.bottom > window.innerHeight - 220
  if (outOfView) {
    const y = window.scrollY + r.top - Math.max(100, (window.innerHeight - 220 - r.height) / 2)
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
  }
}
