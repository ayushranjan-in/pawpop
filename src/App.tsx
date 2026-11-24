import { useEffect, useState } from 'react'
import { EMPTY_OWNER, EMPTY_PET, type Booking, type Owner, type Pet } from './data'
import { Book } from './pages/Book'
import { Account, type AccountTab } from './pages/Account'
import { Presenter } from './present/Presenter'

// The site is the app an owner keeps: it opens on the pet's page (the sample
// member, Maya and Miso), and "New pet" books the First Sniff where a plan is made.
// Hash routes keep it static, and every part has its own address so a live demo
// can jump straight back to any moment: #/account/plan, #/account/calendar,
// #/account/vet, #/book. #/present opens presentation mode on top.
export type Route = '/book' | `/account/${AccountTab}`

const ACCOUNT_TABS: AccountTab[] = ['plan', 'calendar', 'vet']

function readRoute(): Route {
  const hash = window.location.hash.replace('#', '')
  if (hash === '/book') return hash
  const tab = hash.startsWith('/account/') ? hash.slice('/account/'.length) : ''
  return ACCOUNT_TABS.includes(tab as AccountTab) ? (`/account/${tab}` as Route) : '/account/plan'
}

export function navigate(route: Route) {
  window.location.hash = route
  window.setTimeout(() => window.scrollTo({ top: 0 }), 30)
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
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => navigate('/account/plan')}>
            <span className="brand-mark">🐾</span> PawPop
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/book')}>
            New pet
          </button>
        </div>
      </header>
      <div className="page" key={inAccount ? '/account' : route}>
        {route === '/book' && <Book {...state} />}
        {inAccount && <Account {...state} tab={route.slice('/account/'.length) as AccountTab} />}
      </div>
      <footer className="footer">
        <div className="container footer-note">
          Prototype for Columbia University, User-Centric Innovation (TMGT PS5133). People, pets, prices and partners are illustrative.{' '}
          <button className="footer-present" onClick={() => setPresenting(true)}>
            Present
          </button>
        </div>
      </footer>
      {presenting && <Presenter onExit={() => setPresenting(false)} resetDemo={resetDemo} />}
    </>
  )
}
