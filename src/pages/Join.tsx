import { useState } from 'react'
import { navigate, type AppState } from '../App'
import {
  FIRST_SNIFFS,
  NEED_OPTIONS,
  QUIET_POPS,
  STARTER_DOG,
  STARTER_PERSON,
  type DogProfile,
  type DogSociability,
  type PlayStyle,
} from '../data'
import { Chips, DogAvatar, Field, ProfileCard } from '../ui'

const STEPS = ['Your dog', 'About you', 'Review profile', 'Book First Sniff', 'Confirmed'] as const
type Step = (typeof STEPS)[number]

const SOCIABILITY: { value: DogSociability; text: string; sub: string }[] = [
  { value: 'Loves everyone', text: 'Loves every dog', sub: 'Plays with anyone, anytime' },
  { value: 'Picky', text: 'Picky', sub: 'Some dogs yes, some dogs no' },
  { value: 'Nervous', text: 'Nervous', sub: 'Uneasy around most dogs' },
  { value: 'Prefers no dogs', text: 'Prefers no dogs', sub: 'Happier with people only' },
]
const PLAY_STYLES: readonly PlayStyle[] = ['Chaser', 'Wrestler', 'Sniffer', 'Ball fanatic', 'Prefers people']

function FillButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="fill-btn" onClick={onClick}>
      ✨ Fill with sample data
    </button>
  )
}

export function Join({ dog, setDog, person, setPerson, session, setSession }: AppState) {
  const [step, setStep] = useState<Step>('Your dog')
  const index = STEPS.indexOf(step)
  const go = (s: Step) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const set = <K extends keyof DogProfile>(key: K, value: DogProfile[K]) => setDog({ ...dog, [key]: value })
  const quiet = dog.sociability === 'Prefers no dogs'
  const sessions = quiet ? QUIET_POPS : FIRST_SNIFFS
  const chosen = session ?? null

  return (
    <div className="join container">
      <div className="stepper">
        {STEPS.map((s, i) => (
          <div key={s} className={`stepper-item ${i < index ? 'done' : ''} ${i === index ? 'current' : ''}`}>
            <span className="stepper-dot">{i < index ? '✓' : i + 1}</span>
            <span className="stepper-label">{s}</span>
          </div>
        ))}
      </div>

      <div className={`join-grid ${step === 'Confirmed' ? 'single' : ''}`}>
        <div className="join-main">
          {step === 'Your dog' && (
            <div className="form-card">
              <div className="form-head">
                <div>
                  <h2>Tell us about your dog</h2>
                  <p className="muted">Be honest. Picky is normal, and it helps us find the right company.</p>
                </div>
                <FillButton onClick={() => setDog(STARTER_DOG)} />
              </div>

              <Field label="What is your dog like with other dogs?">
                <div className="option-grid">
                  {SOCIABILITY.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      className={`option ${dog.sociability === o.value ? 'selected' : ''}`}
                      onClick={() => set('sociability', o.value)}
                    >
                      <b>{o.text}</b>
                      <span>{o.sub}</span>
                    </button>
                  ))}
                </div>
              </Field>
              {quiet && <div className="note">We will book you a Quiet Pop: a private slot in the same space, no other dogs.</div>}

              <div className="row">
                <DogAvatar name={dog.name} size={60} />
                <Field label="Name">
                  <input value={dog.name} placeholder="Biscuit" onChange={(e) => set('name', e.target.value)} />
                </Field>
                <Field label="Breed or mix">
                  <input value={dog.breed} placeholder="Terrier mix" onChange={(e) => set('breed', e.target.value)} />
                </Field>
                <Field label="Age">
                  <input value={dog.age} placeholder="3 years" onChange={(e) => set('age', e.target.value)} />
                </Field>
              </div>
              <div className="row wrap">
                <Field label="Size">
                  <Chips options={['Small', 'Medium', 'Large'] as const} value={dog.size} onChange={(v) => set('size', v)} />
                </Field>
                <Field label="Sex">
                  <Chips options={['Female', 'Male'] as const} value={dog.sex} onChange={(v) => set('sex', v)} />
                </Field>
                <Field label="Energy">
                  <Chips options={['Low', 'Medium', 'High'] as const} value={dog.energy} onChange={(v) => set('energy', v)} />
                </Field>
              </div>
              <Field label="How does your dog play?">
                <Chips options={PLAY_STYLES} value={dog.playStyle} onChange={(v) => set('playStyle', v)} />
              </Field>
              <div className="row two">
                <Field label="Loves">
                  <input value={dog.loves} placeholder="small calm dogs and the grass by the river" onChange={(e) => set('loves', e.target.value)} />
                </Field>
                <Field label="Keep away from">
                  <input value={dog.avoids} placeholder="big bouncy dogs who rush at me" onChange={(e) => set('avoids', e.target.value)} />
                </Field>
              </div>
              <div className="row two">
                <Field label="Scared of">
                  <input value={dog.scaredOf} placeholder="elevators and loud trucks" onChange={(e) => set('scaredOf', e.target.value)} />
                </Field>
                <Field label="Food rules and allergies">
                  <input value={dog.food} placeholder="Chicken makes me itch." onChange={(e) => set('food', e.target.value)} />
                </Field>
              </div>
              <div className="form-foot">
                <span className="muted">Step 1 of 4</span>
                <button className="btn btn-primary" onClick={() => go('About you')}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 'About you' && (
            <div className="form-card">
              <div className="form-head">
                <div>
                  <h2>Now, about you</h2>
                  <p className="muted">So we can match times, places, and the kind of help you need.</p>
                </div>
                <FillButton onClick={() => setPerson(STARTER_PERSON)} />
              </div>
              <div className="row two">
                <Field label="First name">
                  <input value={person.name} placeholder="Maya" onChange={(e) => setPerson({ ...person, name: e.target.value })} />
                </Field>
                <Field label="Neighborhood">
                  <input value={person.neighborhood} placeholder="Morningside Heights" onChange={(e) => setPerson({ ...person, neighborhood: e.target.value })} />
                </Field>
              </div>
              <Field label="When is your dog home alone?" hint="Only you and your host see this.">
                <input value={person.aloneHours} placeholder="9 a.m. to 6 p.m. on weekdays" onChange={(e) => setPerson({ ...person, aloneHours: e.target.value })} />
              </Field>
              <Field label="What would help most?">
                <div className="chips">
                  {NEED_OPTIONS.map((need) => (
                    <button
                      key={need}
                      type="button"
                      className={`chip ${person.needs.includes(need) ? 'selected' : ''}`}
                      onClick={() =>
                        setPerson({
                          ...person,
                          needs: person.needs.includes(need) ? person.needs.filter((n) => n !== need) : [...person.needs, need],
                        })
                      }
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </Field>
              <div className="form-foot">
                <button className="btn btn-ghost" onClick={() => go('Your dog')}>
                  Back
                </button>
                <button className="btn btn-primary" onClick={() => go('Review profile')}>
                  See {dog.name || 'your dog'}'s profile
                </button>
              </div>
            </div>
          )}

          {step === 'Review profile' && (
            <div className="form-card">
              <h2>Here is {dog.name || 'your dog'}, in {dog.name ? `${dog.name}'s` : 'its'} own words</h2>
              <p className="muted">Anything sound wrong? Go back and edit. A host will verify it at the First Sniff.</p>
              <ProfileCard dog={dog} verified={false} />
              <div className="note">
                Until a host has met {dog.name || 'your dog'}, the profile is marked "not yet verified". Sitters and groomers you share it with will
                see that too.
              </div>
              <div className="form-foot">
                <button className="btn btn-ghost" onClick={() => go('About you')}>
                  Back
                </button>
                <button className="btn btn-primary" onClick={() => go('Book First Sniff')}>
                  Looks right
                </button>
              </div>
            </div>
          )}

          {step === 'Book First Sniff' && (
            <div className="form-card">
              <h2>{quiet ? 'Book a Quiet Pop' : 'Book a free First Sniff'}</h2>
              <p className="muted">
                {quiet
                  ? 'A private 30-minute slot with a host. No other dogs.'
                  : '45 minutes, 3 to 5 dogs, one certified host. Your dog meets one calm dog through a fence first.'}
              </p>
              <div className="session-list">
                {sessions.map((s) => (
                  <button key={s.id} type="button" className={`session ${chosen?.id === s.id ? 'selected' : ''}`} onClick={() => setSession(s)}>
                    <div className="session-date">
                      <b>{s.day.split(', ')[1]}</b>
                      <span>{s.day.split(',')[0]}</span>
                    </div>
                    <div className="session-info">
                      <b>{s.time}</b>
                      <span>{s.place}</span>
                      <span className="muted">
                        {s.distance} · Host {s.host}
                      </span>
                    </div>
                    <span className="spots">{s.spotsLeft} left</span>
                  </button>
                ))}
              </div>
              <div className="form-foot">
                <button className="btn btn-ghost" onClick={() => go('Review profile')}>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (!chosen) setSession(sessions[0])
                    go('Confirmed')
                  }}
                >
                  {chosen ? 'Confirm booking' : 'Book the first available'}
                </button>
              </div>
            </div>
          )}

          {step === 'Confirmed' && (
            <div className="form-card confirm">
              <div className="big-check">✓</div>
              <h2>
                You're booked, {person.name || 'friend'}. See you and {dog.name || 'your dog'} {(session ?? sessions[0]).day.split(',')[0]}.
              </h2>
              <div className="confirm-grid">
                <div className="kv-card">
                  <span>When</span>
                  <b>
                    {(session ?? sessions[0]).day}, {(session ?? sessions[0]).time}
                  </b>
                  <span>Where</span>
                  <b>{(session ?? sessions[0]).place}</b>
                  <span>Host</span>
                  <b>{(session ?? sessions[0]).host}</b>
                </div>
                <div className="kv-card">
                  <b>What to expect</b>
                  <ol>
                    <li>Your host greets you by name and reads {dog.name || 'your dog'}'s profile first.</li>
                    <li>One calm dog through a fence, then a few more, only if relaxed.</li>
                    <li>You stay the whole time.</li>
                    <li>Within an hour: the verified profile and the dogs that played well together.</li>
                  </ol>
                  <span className="muted">Bring a leash, water, and proof of rabies vaccination.</span>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/account')}>
                Fast-forward to after the First Sniff →
              </button>
            </div>
          )}
        </div>

        {step !== 'Confirmed' && (
          <aside className="join-side">
            <div className="side-label">Live preview</div>
            <ProfileCard dog={dog} verified={false} />
            <p className="muted small-text">This is what sitters, walkers, and groomers will see when you share the profile.</p>
          </aside>
        )}
      </div>
    </div>
  )
}
