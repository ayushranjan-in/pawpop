import type { ReactNode } from 'react'
import type { Route } from '../App'
import { sleep } from './engine'

// The stage demo, as data. Each site step drives the real website: it can go to
// a page, click real controls (each click lit by the halo first), and then loop
// a small animation until the presenter presses Next. A step's title is the date
// and place of the scene, so the time jumps of the story show on screen; the
// caption stays short and the presenter does the talking.

export type Action = { click: string; text?: string } | { run: () => Promise<void> | void }

export type LoopCtx = { stopped: () => boolean }

export type SiteStep = {
  kind: 'site'
  title: string
  say: string
  route?: Route
  resetDemo?: boolean
  actions?: Action[]
  target: string
  targetText?: string
  loop?: (ctx: LoopCtx) => Promise<void>
}

export type SlideStep = {
  kind: 'slide'
  title: string
  body: ReactNode
  layout?: 'title' | 'image' | 'text' | 'split'
}

export type Step = SiteStep | SlideStep

/** Moves a soft glow across each matching element in turn, forever (until stopped). */
function glint(selector: string, everyMs = 900) {
  return async ({ stopped }: LoopCtx) => {
    let i = 0
    while (!stopped()) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
      if (!els.length) return
      const el = els[i % els.length]
      el.classList.add('tour-glint')
      await sleep(everyMs)
      el.classList.remove('tour-glint')
      i++
    }
  }
}

export const STEPS: Step[] = [
  {
    kind: 'site',
    title: 'Nov 22 · ACC Manhattan',
    route: '/',
    target: '.hero-section h1',
    say: 'Maya just adopted Miso. She is 4 months old.',
  },
  {
    kind: 'site',
    title: 'Nov 22 · ACC Manhattan',
    target: '#pop-up-days .popup-card',
    say: 'The next pop-up day is Saturday, Dec 5, at the shelter.',
    loop: glint('#pop-up-days .popup-card', 900),
  },
  {
    kind: 'site',
    title: 'Booking',
    route: '/book',
    resetDemo: true,
    actions: [{ click: '.fill-btn' }],
    target: '.join-side .visit-card',
    say: 'Miso, from ACC Manhattan, adopted Nov 22. Her visit is free until Dec 22.',
    loop: glint('.join-side .facts dd', 900),
  },
  {
    kind: 'site',
    title: 'Booking',
    actions: [{ click: '.form-foot .btn-primary' }, { click: '.time-pill', text: '10:30' }],
    target: '.session.selected',
    say: 'Saturday, 10:30.',
    loop: glint('.session.selected .time-pill.on', 900),
  },
  {
    kind: 'site',
    title: 'Booking',
    actions: [{ click: '.form-foot .btn-primary' }, { click: '.fill-btn' }],
    target: '.form-card .chips',
    say: 'One question before the visit.',
    loop: glint('.form-card .chip', 700),
  },
  {
    kind: 'site',
    title: 'Booking',
    actions: [{ click: '.form-foot .btn-primary' }],
    target: '.confirm',
    say: 'Who Maya will meet, what to bring, and what happens in 30 minutes.',
    loop: glint('.kv-card ol li', 900),
  },
  {
    kind: 'site',
    title: 'Dec 5 · First Sniff at ACC Manhattan',
    actions: [{ click: '.confirm .btn-primary' }],
    target: '.plan-card',
    say: "Miso's cost plan: $2,185 for the year, $182 a month.",
    loop: glint('.plan-table tr', 700),
  },
  {
    kind: 'site',
    title: 'December · at home',
    actions: [{ click: '.tab', text: 'Calendar' }],
    target: '.cal-list',
    say: 'Every known cost, before it comes.',
    loop: glint('.cal-item', 900),
  },
  {
    kind: 'site',
    title: 'Mar 3 · Partner clinic',
    actions: [{ click: '.tab', text: 'Vet visit' }],
    target: '.code-big',
    say: 'Miso swallowed a sock.',
  },
  {
    kind: 'site',
    title: 'Mar 3 · Front desk',
    actions: [{ click: '.vet .btn-primary', text: 'Share my budget code' }],
    target: '.options',
    say: "Maya's budget reaches the clinic before the exam. Three options, with prices.",
    loop: glint('.opt', 900),
  },
  {
    kind: 'site',
    title: 'Mar 3 · Front desk',
    target: '.clinic-view',
    say: "The clinic's side of the same moment.",
    loop: glint('.clinic-view dd', 900),
  },
  {
    kind: 'site',
    title: 'Mar 3 · Second look',
    actions: [{ click: '.vet .btn-ghost', text: 'second look' }],
    target: '.vet .ok-note',
    say: 'An independent vet checks the X-ray and the estimate in 15 minutes.',
  },
  {
    kind: 'site',
    title: 'Mar 3 · Paying',
    actions: [{ click: '.vet .btn-primary', text: 'Go with option A' }],
    target: '.plan-total.pay',
    say: '$1,400: $120 today, then 8 payments of $160. $0 interest.',
    loop: glint('.plan-total.pay .line', 900),
  },
  {
    kind: 'site',
    title: 'Mar 3 · Paying',
    target: '.vet .compare',
    say: 'Next to a "0% for now" vet card.',
  },
  {
    kind: 'site',
    title: 'Mar 3 · Paying',
    actions: [{ click: '.vet .btn-primary', text: 'Confirm plan' }],
    target: '.done-panel',
    say: 'The clinic is paid today. Miso goes home tonight.',
  },
]
