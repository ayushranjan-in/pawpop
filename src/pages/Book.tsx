import { useState } from 'react'
import { navigate, type AppState } from '../App'
import {
  ADOPTED_FROM,
  BIG_BILL_PLANS,
  FIRST_SNIFF_MINUTES,
  FREE_WINDOW_DAYS,
  POP_UP_DAYS,
  SAMPLE_BOOKING,
  SAMPLE_OWNER,
  SAMPLE_PET,
  VET_TECH,
  doneOnTheSpot,
  freeUntil,
  shortDate,
  type Pet,
} from '../data'
import { Chips, Field, FillButton, PetPhoto } from '../ui'

const STEPS = ['Your pet', 'Pick a time', 'About you', 'Booked'] as const
type Step = (typeof STEPS)[number]

export function Book({ pet, setPet, owner, setOwner, booking, setBooking }: AppState) {
  const [step, setStep] = useState<Step>('Your pet')
  const index = STEPS.indexOf(step)
  const go = (s: Step) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const set = <K extends keyof Pet>(key: K, value: Pet[K]) => setPet({ ...pet, [key]: value })
  const name = pet.name.trim() || 'your pet'
  const chosen = booking ?? SAMPLE_BOOKING
  const day = POP_UP_DAYS.find((d) => d.id === chosen.dayId) ?? POP_UP_DAYS[0]
  const endTime = addMinutes(chosen.time, FIRST_SNIFF_MINUTES)

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

      <div className={`join-grid ${step === 'Booked' ? 'single' : ''}`}>
        <div className="join-main">
          {step === 'Your pet' && (
            <div className="form-card">
              <div className="form-head">
                <div>
                  <h2>Tell us about your pet</h2>
                  <p className="muted">First Sniff is free in a pet's first {FREE_WINDOW_DAYS} days after adoption.</p>
                </div>
                <FillButton onClick={() => setPet(SAMPLE_PET)} />
              </div>
              <Field label="Dog or cat">
                <Chips options={['Dog', 'Cat'] as const} value={pet.species} onChange={(v) => set('species', v)} />
              </Field>
              <div className="row two">
                <Field label="Name">
                  <input value={pet.name} placeholder="Miso" onChange={(e) => set('name', e.target.value)} />
                </Field>
                <Field label="Age">
                  <input value={pet.age} placeholder="4 months" onChange={(e) => set('age', e.target.value)} />
                </Field>
              </div>
              <Field label="Adopted from">
                <Chips options={ADOPTED_FROM} value={pet.adoptedFrom as (typeof ADOPTED_FROM)[number] | ''} onChange={(v) => set('adoptedFrom', v)} />
              </Field>
              <Field label="Adoption day" hint={pet.adoptedOn ? `Free First Sniff until ${freeUntil(pet.adoptedOn)}.` : undefined}>
                <input type="date" value={pet.adoptedOn} onChange={(e) => set('adoptedOn', e.target.value)} />
              </Field>
              <div className="form-foot">
                <span className="muted">Step 1 of 3</span>
                <button className="btn btn-primary" onClick={() => go('Pick a time')}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 'Pick a time' && (
            <div className="form-card">
              <h2>Pick a time</h2>
              <p className="muted">
                {FIRST_SNIFF_MINUTES} minutes with {VET_TECH}. The partner clinic's team is there too.
              </p>
              <div className="session-list">
                {POP_UP_DAYS.map((d) => (
                  <div key={d.id} className={`session ${booking?.dayId === d.id ? 'selected' : ''}`}>
                    <div className="session-date">
                      <b>{d.shortDay.split(', ')[1]}</b>
                      <span>{d.shortDay.split(',')[0]}</span>
                    </div>
                    <div className="session-info">
                      <b>
                        {d.place}, {d.address}
                      </b>
                      <span className="muted">{d.withWho}</span>
                      <div className="time-pills">
                        {d.times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            className={`time-pill ${booking?.dayId === d.id && booking.time === t ? 'on' : ''}`}
                            onClick={() => setBooking({ dayId: d.id, time: t })}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-foot">
                <button className="btn btn-ghost" onClick={() => go('Your pet')}>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (!booking) setBooking(SAMPLE_BOOKING)
                    go('About you')
                  }}
                >
                  {booking ? 'Continue' : 'Take the first good slot'}
                </button>
              </div>
            </div>
          )}

          {step === 'About you' && (
            <div className="form-card">
              <div className="form-head">
                <div>
                  <h2>About you</h2>
                  <p className="muted">We text you the day before, and a week before every cost in your plan.</p>
                </div>
                <FillButton onClick={() => setOwner(SAMPLE_OWNER)} />
              </div>
              <div className="row two">
                <Field label="First name">
                  <input value={owner.name} placeholder="Maya" onChange={(e) => setOwner({ ...owner, name: e.target.value })} />
                </Field>
                <Field label="Mobile number">
                  <input value={owner.phone} placeholder="(646) 555-0142" onChange={(e) => setOwner({ ...owner, phone: e.target.value })} />
                </Field>
              </div>
              <Field label="If a $2,000 vet bill came tomorrow, how would you pay it?" hint={`${VET_TECH.split(',')[0]} goes through it with you at the visit.`}>
                <Chips options={BIG_BILL_PLANS} value={owner.bigBillPlan as (typeof BIG_BILL_PLANS)[number] | ''} onChange={(v) => setOwner({ ...owner, bigBillPlan: v })} />
              </Field>
              <div className="form-foot">
                <button className="btn btn-ghost" onClick={() => go('Pick a time')}>
                  Back
                </button>
                <button className="btn btn-primary" onClick={() => go('Booked')}>
                  Book {name}'s First Sniff
                </button>
              </div>
            </div>
          )}

          {step === 'Booked' && (
            <div className="form-card confirm">
              <div className="big-check">✓</div>
              <h2>
                You're booked, {owner.name || 'friend'}. See you and {name} on {day.day.split(',')[0]}.
              </h2>
              <div className="confirm-grid">
                <div className="kv-card">
                  <span>When</span>
                  <b>
                    {day.day}, {chosen.time} to {endTime}
                  </b>
                  <span>Where</span>
                  <b>
                    {day.place}, {day.address}
                  </b>
                  <span>Who</span>
                  <b>{VET_TECH}</b>
                  <span>Cost</span>
                  <b>$0</b>
                </div>
                <div className="kv-card">
                  <b>In {FIRST_SNIFF_MINUTES} minutes</b>
                  <ol>
                    <li>Ana weighs and checks {name}.</li>
                    <li>{doneOnTheSpot(pet.species)}, done on the spot.</li>
                    <li>You build {name}'s cost plan for the next 12 months together.</li>
                    <li>You choose insurance or savings before any illness counts as pre-existing.</li>
                    <li>You meet the partner clinic that sees {name} next.</li>
                  </ol>
                  <span className="muted">Bring: the adoption papers, any vaccine record, and a leash or carrier.</span>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/account/plan')}>
                Skip ahead to {day.shortDay.split(', ')[1]}, after the visit →
              </button>
            </div>
          )}
        </div>

        {step !== 'Booked' && (
          <aside className="join-side">
            <div className="side-label">Your visit</div>
            <div className="visit-card">
              <div className="visit-top">
                <PetPhoto name={pet.name} size={56} />
                <div>
                  <b className="visit-name">{pet.name || 'Your pet'}</b>
                  <div className="muted small-text">{[pet.species, pet.age].filter(Boolean).join(' · ')}</div>
                </div>
              </div>
              <dl className="facts">
                <dt>Adopted</dt>
                <dd>{[pet.adoptedFrom, pet.adoptedOn && shortDate(pet.adoptedOn)].filter(Boolean).join(', ') || '-'}</dd>
                <dt>Free until</dt>
                <dd>{pet.adoptedOn ? freeUntil(pet.adoptedOn) : '-'}</dd>
                <dt>First Sniff</dt>
                <dd>{booking ? `${day.shortDay}, ${booking.time} · ${day.place}` : 'Not booked yet'}</dd>
              </dl>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

/** "10:30" + 30 -> "11:00" (12-hour clock, no a.m./p.m.). */
function addMinutes(time: string, minutes: number): string {
  const [h, m] = time.split(':').map(Number)
  const total = h * 60 + m + minutes
  const hour = Math.floor(total / 60)
  return `${hour > 12 ? hour - 12 : hour}:${String(total % 60).padStart(2, '0')}`
}
