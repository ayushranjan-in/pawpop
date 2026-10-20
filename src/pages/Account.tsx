import { useState } from 'react'
import type { AppState } from '../App'
import { MATCHES, RECOMMENDATIONS, STARTER_DOG, STARTER_PERSON, type DogProfile } from '../data'
import { Chips, DogAvatar, Field, ProfileCard } from '../ui'

const TABS = ['Overview', 'Profile', 'Group', 'Recommendations', 'Share'] as const
type Tab = (typeof TABS)[number]
const CATEGORIES = ['Sitter', 'Groomer', 'Daycare', 'Place'] as const

const UPCOMING_POPS = [
  { day: 'Sat, Oct 31', time: '9:00 to 9:45 a.m.', place: 'Church hall, W 114th St', going: ['Pepper', 'Mochi', 'Olive'], booked: true },
  { day: 'Sat, Nov 7', time: '9:00 to 9:45 a.m.', place: 'Church hall, W 114th St', going: ['Pepper', 'Olive'], booked: false },
  { day: 'Tue, Nov 10', time: '7:00 to 7:45 p.m.', place: 'School yard, W 109th St', going: ['Mochi'], booked: false },
]

export function Account({ dog, person }: AppState) {
  // Visitors who jump straight here see the sample member.
  const d: DogProfile = dog.name ? dog : STARTER_DOG
  const p = person.name ? person : STARTER_PERSON
  const verified: DogProfile = { ...d, avoids: d.avoids ? `${d.avoids} (calm big dogs are fine)` : d.avoids }
  const [tab, setTab] = useState<Tab>('Overview')
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('Sitter')
  const [asked, setAsked] = useState<string | null>(null)
  const [booked, setBooked] = useState<string[]>(['Sat, Oct 31'])
  const [share, setShare] = useState({ name: '', role: 'Sitter', email: '' })
  const [sent, setSent] = useState(false)

  return (
    <div className="account">
      <div className="account-head">
        <div className="container account-head-inner">
          <DogAvatar name={d.name} size={72} />
          <div>
            <h1>{d.name}</h1>
            <div className="muted">
              with {p.name} · {p.neighborhood || 'Morningside Heights'} · <span className="verified-pill">✓ Verified Oct 24</span>
            </div>
          </div>
        </div>
        <div className="container tabs">
          {TABS.map((t) => (
            <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="container account-body">
        {tab === 'Overview' && (
          <div className="overview-grid">
            <div className="panel dark">
              <span className="panel-label">Next Pop</span>
              <h2>Saturday, Oct 31 · 9:00 a.m.</h2>
              <p>Church hall, W 114th St · with Pepper, Mochi, and Olive</p>
              <div className="stamps">
                <span className="mini-stamp">First Sniff</span>
                <span className="mini-stamp">Pop 1</span>
                <span className="mini-stamp empty">Pop 2</span>
                <span className="mini-stamp empty">Pop 3</span>
              </div>
            </div>
            <div className="panel">
              <span className="panel-label">From the First Sniff</span>
              <p className="host-quote">
                "{d.name} is calm and curious and plays best with small or calm dogs. Fine with big dogs if they are calm. Lovely sniff-and-chase with
                Pepper."
              </p>
              <span className="muted">Dana R., PawPop host, CPDT-KA</span>
            </div>
            <button className="panel action" onClick={() => setTab('Recommendations')}>
              <span className="action-icon">⭐</span>
              <b>Find a sitter or groomer</b>
              <span>From owners of dogs like {d.name}</span>
            </button>
            <button className="panel action" onClick={() => setTab('Share')}>
              <span className="action-icon">🔗</span>
              <b>Share {d.name}'s profile</b>
              <span>With a walker, sitter, groomer, or landlord</span>
            </button>
          </div>
        )}

        {tab === 'Profile' && (
          <div className="two-col">
            <ProfileCard dog={verified} verified />
            <div className="panel">
              <span className="panel-label">Host's correction</span>
              <p>"Fine with big dogs if they are calm." You approved this change on Oct 24.</p>
              <span className="panel-label">Notes from people who cared for {d.name}</span>
              <ul className="notes">
                <li>
                  <b>Rosa T., sitter · Oct 12</b>
                  <span>Calm all weekend. Ate well. Nervous of the building's freight elevator; we took the stairs.</span>
                </li>
                <li>
                  <b>Little Paws Grooming · Sep 30</b>
                  <span>Hand-dried instead of the dryer. No stress.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {tab === 'Group' && (
          <div className="two-col">
            <div>
              <h2>{d.name}'s group</h2>
              <p className="muted">These dogs played well with {d.name} at the First Sniff. Their owners agreed to stay in touch.</p>
              <div className="friend-list">
                {MATCHES.map((f) => (
                  <div key={f.dog} className="friend">
                    <DogAvatar name={f.dog} size={48} />
                    <div>
                      <b>
                        {f.dog} <span className="muted">with {f.owner}</span>
                      </b>
                      <div className="muted small-text">{f.breed}</div>
                      <div>{f.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>Upcoming Pops</h2>
              <p className="muted">45 minutes, the same small group, a host every time.</p>
              <div className="pop-list">
                {UPCOMING_POPS.map((pop) => {
                  const isBooked = booked.includes(pop.day)
                  return (
                    <div key={pop.day} className="pop">
                      <div>
                        <b>
                          {pop.day} · {pop.time}
                        </b>
                        <div className="muted small-text">{pop.place}</div>
                        <div className="small-text">Going: {pop.going.join(', ')}</div>
                      </div>
                      <button
                        className={`btn ${isBooked ? 'btn-ghost' : 'btn-primary'}`}
                        onClick={() => setBooked(isBooked ? booked.filter((b) => b !== pop.day) : [...booked, pop.day])}
                      >
                        {isBooked ? '✓ Booked' : 'Book'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {tab === 'Recommendations' && (
          <div>
            <h2>Recommended for dogs like {d.name}</h2>
            <p className="muted">
              Only from owners of {d.size.toLowerCase()}, {d.sociability.toLowerCase()} dogs within 10 blocks, who actually went. Businesses cannot
              pay to appear here.
            </p>
            <Chips options={CATEGORIES} value={category} onChange={setCategory} />
            <div className="rec-grid">
              {RECOMMENDATIONS.filter((r) => r.category === category).map((r) => (
                <div key={r.name} className="rec">
                  <div className="rec-top">
                    <b>{r.name}</b>
                    {r.checkedByHost && <span className="badge">Checked by a host</span>}
                  </div>
                  <div className="rec-detail">{r.detail}</div>
                  <div className="rec-proof">
                    <span>🐾 {r.fromDogs}</span>
                    <span>↺ {r.wouldReturn}</span>
                    <span>🕑 {r.lastUsed}</span>
                  </div>
                  <button className="btn btn-ghost" onClick={() => setAsked(r.name)}>
                    {asked === r.name ? '✓ Message sent to the owner' : 'Ask the owner how it went'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'Share' && (
          <div className="two-col">
            <div className="form-card">
              <div className="form-head">
                <div>
                  <h2>Share {d.name}'s profile</h2>
                  <p className="muted">They see {d.name}'s needs, food rules, fears, and past care notes. Never your address or schedule.</p>
                </div>
                <button type="button" className="fill-btn" onClick={() => setShare({ name: 'Rosa T.', role: 'Sitter', email: 'rosa.t@example.com' })}>
                  ✨ Fill with sample data
                </button>
              </div>
              <Field label="Who is it for?">
                <input value={share.name} placeholder="Rosa T." onChange={(e) => setShare({ ...share, name: e.target.value })} />
              </Field>
              <Field label="Their role">
                <Chips options={['Sitter', 'Walker', 'Groomer', 'Daycare', 'Landlord'] as const} value={share.role as 'Sitter'} onChange={(v) => setShare({ ...share, role: v })} />
              </Field>
              <Field label="Email or phone">
                <input value={share.email} placeholder="rosa.t@example.com" onChange={(e) => setShare({ ...share, email: e.target.value })} />
              </Field>
              <div className="form-foot">
                <span className="muted">The link expires after 30 days.</span>
                <button className="btn btn-primary" onClick={() => setSent(true)}>
                  {sent ? '✓ Sent' : 'Send profile'}
                </button>
              </div>
              {sent && (
                <div className="note">
                  Sent to {share.name || 'them'}. After caring for {d.name}, they can add a one-line note to the profile.
                </div>
              )}
            </div>
            <div className="panel center">
              <span className="panel-label">Or show this at the door</span>
              <div className="qr">
                {Array.from({ length: 81 }, (_, i) => (
                  <span key={i} className={(i * 7 + (i % 5) + (i % 3)) % 3 === 0 ? 'on' : ''} />
                ))}
              </div>
              <div className="link">pawpop.nyc/d/{d.name.toLowerCase()}-k7f2</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
