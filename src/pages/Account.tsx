import { useState } from 'react'
import { navigate, type AppState } from '../App'
import { CALENDAR, PLAN, POP_UP_DAYS, SAMPLE_BOOKING, SAMPLE_OWNER, SAMPLE_PET, VET_TECH, VET_VISIT, doneOnTheSpot, money, type VetOption } from '../data'
import { PetPhoto, PlanCard } from '../ui'

export type AccountTab = 'plan' | 'calendar' | 'vet'

const TABS: { id: AccountTab; label: string }[] = [
  { id: 'plan', label: 'Plan' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'vet', label: 'Vet visit' },
]

export function Account({ pet, owner, booking, tab }: AppState & { tab: AccountTab }) {
  // Visitors who come straight here see the sample member.
  const p = pet.name ? pet : SAMPLE_PET
  const o = owner.name ? owner : SAMPLE_OWNER
  const day = POP_UP_DAYS.find((d) => d.id === (booking ?? SAMPLE_BOOKING).dayId) ?? POP_UP_DAYS[0]

  return (
    <div className="account">
      <div className="account-head">
        <div className="container account-head-inner">
          <PetPhoto name={p.name} size={72} />
          <div>
            <h1>{p.name}</h1>
            <div className="muted">
              {/* The vet visit happens months later, so the age from the adoption papers is left out there. */}
              {[p.species, tab === 'vet' ? '' : p.age].filter(Boolean).join(' · ')} · with {o.name} · <span className="verified-pill">✓ First Sniff, {PLAN.madeOn}</span>{' '}
              <span className="code-pill">Budget code {VET_VISIT.budgetCode}</span>
            </div>
          </div>
        </div>
        <div className="container tabs">
          {TABS.map((t) => (
            <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(`/account/${t.id}`)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container account-body">
        {tab === 'plan' && (
          <div className="two-col">
            <PlanCard pet={p} />
            <div className="side-stack">
              <div className="panel">
                <span className="panel-label">Made at First Sniff</span>
                <p>
                  With {VET_TECH}, at {day.place}, {PLAN.madeOn}. {doneOnTheSpot(p.species)} were done during the visit.
                </p>
              </div>
              <div className="panel">
                <span className="panel-label">Insurance or savings</span>
                <p>
                  You chose a savings cushion: <b>$40 a month</b> toward a $500 goal, set up before any illness could count as pre-existing.
                </p>
              </div>
              <div className="panel">
                <span className="panel-label">Booked</span>
                <p>
                  Spay at the partner clinic, <b>Jan 12</b>, $120. Member price, posted.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === 'calendar' && (
          <div className="two-col">
            <div>
              <h2>Costs coming up</h2>
              <p className="muted">Every cost we already know about, with its date. We text you a week before each one.</p>
              <div className="panel budget-panel">
                <div className="line">
                  <span>{CALENDAR.month}</span>
                  <span>
                    <b>{money(CALENDAR.spent)}</b> of {money(PLAN.monthly)}
                  </span>
                </div>
                <div className="budget-bar">
                  <i style={{ width: `${Math.round((CALENDAR.spent / PLAN.monthly) * 100)}%` }} />
                </div>
              </div>
              <div className="cal-list">
                {CALENDAR.upcoming.map((c) => (
                  <div key={c.date} className="cal-item">
                    <span>
                      <b>{c.date}</b> · {c.what}
                    </span>
                    <span>{money(c.cost)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="side-stack">
              <div className="panel cushion">
                <span className="panel-label">Emergency cushion</span>
                <b className="cushion-amount">
                  {money(CALENDAR.cushionSaved)} <span className="muted">saved of your {money(CALENDAR.cushionGoal)} goal</span>
                </b>
                <div className="budget-bar">
                  <i style={{ width: `${Math.round((CALENDAR.cushionSaved / CALENDAR.cushionGoal) * 100)}%` }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'vet' && <VetVisit petName={p.name} petSpecies={p.species} ownerName={o.name} />}
      </div>
    </div>
  )
}

type Stage = 'arrive' | 'options' | 'second' | 'plan' | 'done'
const STAGES: { id: Stage; label: string }[] = [
  { id: 'arrive', label: 'Front desk' },
  { id: 'options', label: 'Options' },
  { id: 'second', label: 'Second look' },
  { id: 'plan', label: 'Pay' },
]

function VetVisit({ petName, petSpecies, ownerName }: { petName: string; petSpecies: string; ownerName: string }) {
  const [stage, setStage] = useState<Stage>('arrive')
  const [picked, setPicked] = useState<VetOption>(VET_VISIT.options[0])
  const stageIndex = STAGES.findIndex((s) => s.id === stage)
  const plan = VET_VISIT.plan
  const perMonth = Math.ceil((picked.price - plan.fromCushion) / plan.payments)

  return (
    <div className="vet">
      <div className="vet-head">
        <span className="kicker">
          {VET_VISIT.date} · {VET_VISIT.place}
        </span>
        <h2>
          {petName} {VET_VISIT.problem}
        </h2>
        <div className="stage-line">
          {STAGES.map((s, i) => (
            <span key={s.id} className={`stage ${i < stageIndex || stage === 'done' ? 'done' : ''} ${s.id === stage ? 'current' : ''}`}>
              {s.label}
            </span>
          ))}
        </div>
      </div>

      {stage === 'arrive' && (
        <div className="two-col">
          <div className="panel">
            <span className="panel-label">At the front desk</span>
            <p>The clinic asks how you would like to handle the cost before the vet examines {petName}.</p>
            <div className="code-big">{VET_VISIT.budgetCode}</div>
            <button className="btn btn-primary" onClick={() => setStage('options')}>
              Share my budget code
            </button>
          </div>
        </div>
      )}

      {stage === 'options' && (
        <div className="two-col">
          <div>
            <div className="ok-note">
              Your budget code <b>{VET_VISIT.budgetCode}</b> is shared with the clinic. You don't have to say a number out loud.
            </div>
            <h3 className="vet-sub">Options that fit your budget</h3>
            <div className="options">
              {VET_VISIT.options.map((opt) => (
                <button key={opt.id} type="button" className={`opt ${picked.id === opt.id ? 'pick' : ''}`} onClick={() => setPicked(opt)}>
                  <span className="line">
                    <b>
                      {opt.id} · {opt.what}
                    </b>
                    <b>{money(opt.price)}</b>
                  </span>
                  <span className="muted small-text">{opt.note}</span>
                </button>
              ))}
            </div>
            <div className="vet-actions">
              <button className="btn btn-ghost" onClick={() => setStage('second')}>
                Ask for a second look
              </button>
              <button className="btn btn-primary" onClick={() => setStage('plan')}>
                Go with option {picked.id}
              </button>
            </div>
          </div>
          <div className="panel clinic-view">
            <span className="panel-label">What the front desk sees</span>
            <b>PawPop member · {VET_VISIT.budgetCode}</b>
            <span>
              {petName} · {petSpecies.toLowerCase()} · {VET_VISIT.petAgeThen} · {ownerName}
            </span>
            <dl className="facts">
              <dt>Today</dt>
              <dd>Up to {money(plan.fromCushion)} from the cushion</dd>
              <dt>Monthly</dt>
              <dd>
                Up to {money(plan.perMonth)} for {plan.payments} months, 0%
              </dd>
              <dt>Clinic paid</dt>
              <dd>In full, on the day of care</dd>
            </dl>
          </div>
        </div>
      )}

      {stage === 'second' && (
        <div className="two-col">
          <div className="panel">
            <span className="panel-label">Second look</span>
            <p className="muted">{VET_VISIT.secondLook.who}</p>
            <div className="ok-note">
              <b className="green">{VET_VISIT.secondLook.verdict}</b>
              <p>{VET_VISIT.secondLook.detail}</p>
            </div>
            <div className="card-plain">
              <b>The estimate</b>
              <span>{VET_VISIT.secondLook.estimate}</span>
            </div>
            <div className="vet-actions">
              <button className="text-link" onClick={() => setStage('options')}>
                Back to the options
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPicked(VET_VISIT.options[0])
                  setStage('plan')
                }}
              >
                Go with option A
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === 'plan' && (
        <div className="two-col">
          <div className="panel">
            <span className="panel-label">PawPop Plan</span>
            <p className="muted">
              Option {picked.id} · {picked.what.toLowerCase()} · {money(picked.price)}
            </p>
            <div className="plan-total pay">
              <div className="line">
                <span>From your cushion today</span>
                <b>{money(plan.fromCushion)}</b>
              </div>
              <div className="line">
                <span>{plan.payments} monthly payments</span>
                <b>{money(perMonth)}</b>
              </div>
              <div className="line">
                <span>Interest</span>
                <b>{money(plan.interest)}</b>
              </div>
            </div>
            <ul className="checks">
              <li>0% interest, and no interest charged back, ever</li>
              <li>Sized to the {money(PLAN.monthly)} budget set at First Sniff</li>
              <li>The clinic is paid in full today</li>
            </ul>
            <button className="btn btn-primary" onClick={() => setStage('done')}>
              Confirm plan
            </button>
          </div>
          <div className="panel compare">
            <span className="panel-label">Compare: "0% for now" vet cards</span>
            <p>{plan.compare}</p>
          </div>
        </div>
      )}

      {stage === 'done' && (
        <div className="panel center done-panel">
          <div className="big-check">✓</div>
          <h3>Done. The clinic has been paid.</h3>
          <p>
            First payment: {plan.firstPayment}, {money(perMonth)}.{picked.id === 'A' && ` ${petName} goes home tonight.`}
          </p>
          <button className="text-link" onClick={() => setStage('arrive')}>
            Replay the visit
          </button>
        </div>
      )}
    </div>
  )
}
