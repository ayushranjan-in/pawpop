import { useEffect, useState } from 'react'
import { EMPTY_DOG, EMPTY_PERSON, type DogProfile, type PersonProfile, type Session } from './data'
import { Landing } from './pages/Landing'
import { Join } from './pages/Join'
import { Account } from './pages/Account'

// Hash routes keep the site static: #/ landing, #/join sign-up, #/account the member area.
export type Route = '/' | '/join' | '/account'

function readRoute(): Route {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash === '/join' || hash === '/account' ? hash : '/'
}

export function navigate(route: Route, anchor?: string) {
  window.location.hash = route
  window.setTimeout(() => {
    if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0 })
  }, 30)
}

export type AppState = {
  dog: DogProfile
  setDog: (dog: DogProfile) => void
  person: PersonProfile
  setPerson: (person: PersonProfile) => void
  session: Session | null
  setSession: (session: Session) => void
}

export function App() {
  const [route, setRoute] = useState<Route>(readRoute)
  const [dog, setDog] = useState<DogProfile>(EMPTY_DOG)
  const [person, setPerson] = useState<PersonProfile>(EMPTY_PERSON)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const onHash = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const state: AppState = { dog, setDog, person, setPerson, session, setSession }

  return (
    <>
      <Nav route={route} />
      <div className="page" key={route}>
        {route === '/' && <Landing />}
        {route === '/join' && <Join {...state} />}
        {route === '/account' && <Account {...state} />}
      </div>
      <Footer />
    </>
  )
}

function Nav({ route }: { route: Route }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="brand" onClick={() => navigate('/')}>
          <span className="brand-mark">🐾</span> PawPop
        </button>
        {route !== '/account' ? (
          <nav className="nav-links">
            <button onClick={() => navigate('/', 'how')}>How it works</button>
            <button onClick={() => navigate('/', 'first-sniff')}>First Sniff</button>
            <button onClick={() => navigate('/', 'recommendations')}>Recommendations</button>
          </nav>
        ) : (
          <nav className="nav-links">
            <span className="nav-hello">Morningside Heights</span>
          </nav>
        )}
        <div className="nav-actions">
          <button className="link-btn" onClick={() => navigate('/account')}>
            Log in
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/join')}>
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand static">
            <span className="brand-mark">🐾</span> PawPop
          </div>
          <p>The right company for your dog. Upper West Side and Morningside Heights, New York.</p>
        </div>
        <div className="footer-cols">
          <div>
            <b>PawPop</b>
            <span>How it works</span>
            <span>First Sniff</span>
            <span>Quiet Pops</span>
          </div>
          <div>
            <b>For partners</b>
            <span>Host a Pop in your space</span>
            <span>Get checked by a host</span>
          </div>
          <div>
            <b>Trust</b>
            <span>No pay-for-rank</span>
            <span>Safety and hosts</span>
          </div>
        </div>
      </div>
      <div className="container footer-note">Prototype for Columbia University, User Centric Design and Innovation. All people, dogs, and places are illustrative.</div>
    </footer>
  )
}
