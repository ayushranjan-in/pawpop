import { useEffect, useState } from 'react'
import { EMPTY_OWNER, EMPTY_PET, type Booking, type Owner, type Pet } from './data'
import { Landing } from './pages/Landing'
import { Book } from './pages/Book'
import { Account, type AccountTab } from './pages/Account'
import { Presenter } from './present/Presenter'

// Hash routes keep the site static. Every part of the member page has its own
// address, so a live demo can jump straight back to any moment:
// #/ home, #/book booking a First Sniff, #/account/plan, #/account/calendar,
// #/account/vet. #/present opens presentation mode on top of the site.
export type Route = '/' | '/book' | `/account/${AccountTab}`

const ACCOUNT_TABS: AccountTab[] = ['plan', 'calendar', 'vet']

function readRoute(): Route {
  const hash = window.location.hash.replace('#', '') || '/'
  if (hash === '/book') return hash
  if (hash === '/account') return '/account/plan'
  const tab = hash.startsWith('/account/') ? hash.slice('/account/'.length) : ''
  return ACCOUNT_TABS.includes(tab as AccountTab) ? (`/account/${tab}` as Route) : '/'
}

export function navigate(route: Route, anchor?: string) {
  window.location.hash = route
  window.setTimeout(() => {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0 })
  }, 30)
}

export type AppState = {
  pet: Pet
  setPet: (pet: Pet) => void
  owner: Owner
  setOwner: (owner: Owner) => void
  booking: Booking | null
  setBooking: (booking: Booking | null) => void
}

export function App() {
  const [route, setRoute] = useState<Route>(readRoute)
  const [pet, setPet] = useState<Pet>(EMPTY_PET)
  const [owner, setOwner] = useState<Owner>(EMPTY_OWNER)
  const [booking, setBooking] = useState<Booking | null>(null)
  const [presenting, setPresenting] = useState(() => window.location.hash === '#/present')

  useEffect(() => {
    const onHash = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const resetDemo = () => {
    setPet(EMPTY_PET)
    setOwner(EMPTY_OWNER)
    setBooking(null)
  }

  const state: AppState = { pet, setPet, owner, setOwner, booking, setBooking }
  const inAccount = route.startsWith('/account/')

  return (
    <>
      <Nav inAccount={inAccount} />
      <div className="page" key={inAccount ? '/account' : route}>
        {route === '/' && <Landing />}
        {route === '/book' && <Book {...state} />}
        {inAccount && <Account {...state} tab={route.slice('/account/'.length) as AccountTab} />}
      </div>
      <Footer onPresent={() => setPresenting(true)} />
      {presenting && <Presenter onExit={() => setPresenting(false)} resetDemo={resetDemo} />}
    </>
  )
}

function Nav({ inAccount }: { inAccount: boolean }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="brand" onClick={() => navigate('/')}>
          <span className="brand-mark">🐾</span> PawPop
        </button>
        <nav className="nav-links">
          {!inAccount && (
            <>
              <button onClick={() => navigate('/', 'plan')}>Cost plan</button>
              <button onClick={() => navigate('/', 'big-bill')}>Big vet bills</button>
              <button onClick={() => navigate('/', 'pop-up-days')}>First Sniff</button>
            </>
          )}
        </nav>
        <div className="nav-actions">
          <button className="link-btn" onClick={() => navigate('/account/plan')}>
            My pet
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/book')}>
            Get a cost plan
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer({ onPresent }: { onPresent: () => void }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand static">
            <span className="brand-mark">🐾</span> PawPop
          </div>
          <p>PawPop helps new dog and cat owners in NYC see and handle what their pet will really cost.</p>
        </div>
        <div className="footer-cols">
          <div>
            <b>For owners</b>
            <span>Pop-up days</span>
            <span>First Sniff</span>
            <span>PawPop Plan</span>
          </div>
          <div>
            <b>For partners</b>
            <span>Shelters and rescues</span>
            <span>Partner clinics</span>
          </div>
          <div>
            <b>Our promise</b>
            <span>Posted prices</span>
            <span>An independent second look</span>
            <span>No interest charged back</span>
          </div>
        </div>
      </div>
      <div className="container footer-note">
        Prototype for Columbia University, User-Centric Innovation (TMGT PS5133). People, pets, prices and partners are illustrative.{' '}
        <button className="footer-present" onClick={onPresent}>
          Present
        </button>
      </div>
    </footer>
  )
}
