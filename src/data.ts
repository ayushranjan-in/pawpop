// The one journey the prototype shows: Maya adopts Miso, books a free First Sniff,
// leaves with a cost plan, and later faces a big vet bill. The people, pets, prices
// and partners are illustrative. The numbers match the six Solution V3 screens on
// the Week 10 Miro board (miro/week10-solution-v3.html), so change them in both places.

export type Species = 'Dog' | 'Cat'

export type Pet = {
  name: string
  species: Species
  age: string
  adoptedFrom: string
  /** ISO date, e.g. 2026-11-22 */
  adoptedOn: string
}

export type Owner = {
  name: string
  phone: string
  bigBillPlan: string
}

export type PopUpDay = {
  id: string
  day: string
  shortDay: string
  hours: string
  place: string
  address: string
  withWho: string
  times: string[]
}

export type Booking = { dayId: string; time: string }

export const ADOPTED_FROM = ['ACC Manhattan', 'Another ACC center', 'A rescue group', 'Somewhere else'] as const

/** What gets done on the spot at First Sniff. New York City licenses dogs, not cats. */
export const doneOnTheSpot = (species: Species) => (species === 'Dog' ? 'Core vaccines, microchip and license' : 'Core vaccines and microchip')
export const BIG_BILL_PLANS = ['Savings', 'Pet insurance', 'A credit card', 'Not sure yet'] as const

export const EMPTY_PET: Pet = { name: '', species: 'Dog', age: '', adoptedFrom: '', adoptedOn: '' }
export const SAMPLE_PET: Pet = { name: 'Miso', species: 'Dog', age: '4 months', adoptedFrom: 'ACC Manhattan', adoptedOn: '2026-11-22' }

export const EMPTY_OWNER: Owner = { name: '', phone: '', bigBillPlan: '' }
export const SAMPLE_OWNER: Owner = { name: 'Maya', phone: '(646) 555-0142', bigBillPlan: 'Not sure yet' }

export const VET_TECH = 'Ana R., licensed vet tech'
export const FIRST_SNIFF_MINUTES = 30
export const FREE_WINDOW_DAYS = 30

export const POP_UP_DAYS: PopUpDay[] = [
  {
    id: 'dec5',
    day: 'Saturday, Dec 5',
    shortDay: 'Sat, Dec 5',
    hours: '10:00 a.m. to 1:00 p.m.',
    place: 'ACC Manhattan',
    address: '326 E 110th St',
    withWho: 'With the partner clinic team from Amsterdam Ave',
    times: ['10:00', '10:30', '11:00', '11:30', '12:00'],
  },
  {
    id: 'dec12',
    day: 'Saturday, Dec 12',
    shortDay: 'Sat, Dec 12',
    hours: '9:00 a.m. to 12:00 p.m.',
    place: 'Partner clinic',
    address: 'Amsterdam Ave at W 104th St',
    withWho: 'With two Manhattan rescue groups',
    times: ['9:00', '9:30', '10:00', '11:00'],
  },
  {
    id: 'dec20',
    day: 'Sunday, Dec 20',
    shortDay: 'Sun, Dec 20',
    hours: '11:00 a.m. to 2:00 p.m.',
    place: 'Partner clinic',
    address: 'Park Slope, Brooklyn',
    withWho: 'With a Brooklyn rescue group',
    times: ['11:00', '11:30', '12:30', '1:00'],
  },
]

export const SAMPLE_BOOKING: Booking = { dayId: 'dec5', time: '10:30' }

export type PlanLine = { item: string; cost: string; done?: boolean }

export const PLAN = {
  madeOn: 'Dec 5',
  yearTotal: 2185,
  monthly: 182,
  lines: [
    { item: 'Core vaccines', cost: 'done', done: true },
    { item: 'Food and supplies', cost: '$95 / mo' },
    { item: 'Flea, tick and heartworm', cost: '$25 / mo' },
    { item: 'Spay at partner clinic, Jan 12', cost: '$120' },
    { item: 'Vaccine boosters', cost: '$60' },
    { item: 'Check-up at 1 year', cost: '$85' },
    { item: 'Emergency cushion', cost: '$40 / mo' },
  ] satisfies PlanLine[],
  lifetimeNote: 'Over a lifetime, dogs cost $22,000-61,000.',
}

export const CALENDAR = {
  month: 'December',
  spent: 131,
  upcoming: [
    { date: 'Dec 19', what: 'Booster shot', cost: 30 },
    { date: 'Jan 12', what: 'Spay at partner clinic', cost: 120 },
    { date: 'Feb 1', what: 'Flea and tick refill', cost: 25 },
    { date: 'Nov 2027', what: '1-year check-up', cost: 85 },
  ],
  cushionSaved: 120,
  cushionGoal: 500,
}

export const POSTED_PRICES = [
  { what: 'Spay or neuter', price: '$120' },
  { what: 'Vaccine booster', price: '$30' },
  { what: 'Check-up', price: '$85' },
  { what: 'Flea, tick and heartworm', price: '$25 / mo' },
]

export type VetOption = { id: 'A' | 'B' | 'C'; what: string; price: number; note: string }

export const VET_VISIT = {
  date: 'Mar 3',
  place: 'Partner clinic',
  petAgeThen: '7 months',
  problem: 'swallowed a sock',
  budgetCode: 'PP-4821',
  options: [
    { id: 'A', what: 'Remove it with a scope', price: 1400, note: 'No surgery, home tonight · $160/mo for 8 months' },
    { id: 'B', what: 'Surgery, 1 night', price: 2900, note: "If the scope can't reach it" },
    { id: 'C', what: 'Fluids, X-ray in 12 h', price: 450, note: 'Only if the vet thinks it can pass' },
  ] satisfies VetOption[],
  secondLook: {
    who: 'An independent vet, not paid by this clinic, checked the X-ray and the estimate in 15 minutes.',
    verdict: 'Option A is a sound first step',
    detail: 'The sock is still in the stomach, where a scope can reach it. Surgery is only needed if the scope fails. Waiting is not advised for a sock this size.',
    estimate: 'Prices are in the normal range for NYC clinics.',
  },
  plan: {
    fromCushion: 120,
    payments: 8,
    perMonth: 160,
    interest: 0,
    firstPayment: 'Apr 3',
    compare: 'Miss the deadline, and interest of about 27-33% is charged on the whole bill, back to today.',
  },
}

export const money = (n: number) => `$${n.toLocaleString('en-US')}`

/** "2026-11-22" -> "Nov 22" (read as a calendar date, no time zone shift). */
export function shortDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return ''
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

/** The last day of the free First Sniff window: the adoption date plus 30 days. */
export function freeUntil(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return ''
  return new Date(y, m - 1, d + FREE_WINDOW_DAYS).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
