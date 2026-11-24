import type { ReactNode } from 'react'
import { PLAN, money, type Pet } from './data'

export function Chips<T extends string>({ options, value, onChange }: { options: readonly T[]; value: T | ''; onChange: (v: T) => void }) {
  return (
    <div className="chips">
      {options.map((option) => (
        <button key={option} type="button" className={`chip ${option === value ? 'selected' : ''}`} onClick={() => onChange(option)}>
          {option}
        </button>
      ))}
    </div>
  )
}

export function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  )
}

export function FillButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="fill-btn" onClick={onClick}>
      Fill with sample data
    </button>
  )
}

// Only the sample pet has a photo (served from public/img, so the demo needs no network).
const PHOTOS: Record<string, string> = { Miso: '/img/miso.jpg' }

export function PetPhoto({ name, size = 56 }: { name: string; size?: number }) {
  const photo = PHOTOS[name]
  if (photo) return <img className="avatar" src={photo} alt={name} style={{ width: size, height: size }} />
  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.42 }}>
      {name.slice(0, 1).toUpperCase() || '?'}
    </div>
  )
}

/** The 12-month cost plan a vet tech builds with the owner at First Sniff. */
export function PlanCard({ pet }: { pet: Pet }) {
  return (
    <div className="plan-card">
      <div className="plan-head">
        <h3>{pet.name || 'Your pet'}'s cost plan</h3>
        <span className="muted small-text">Made at First Sniff, {PLAN.madeOn}</span>
      </div>
      <div className="plan-total">
        <span className="plan-kicker">Next 12 months</span>
        <b>{money(PLAN.yearTotal)}</b>
        <span>
          Your monthly budget: <b>{money(PLAN.monthly)}</b>
        </span>
      </div>
      <table className="plan-table">
        <tbody>
          {PLAN.lines.map((line) => (
            <tr key={line.item}>
              <td>{line.item}</td>
              <td className={line.done ? 'done' : ''}>{line.done ? 'done ✓' : line.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {pet.species === 'Dog' && <p className="muted small-text">{PLAN.lifetimeNote}</p>}
    </div>
  )
}
