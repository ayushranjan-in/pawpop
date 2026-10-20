import type { ReactNode } from 'react'
import type { DogProfile } from './data'
import { dogVoice } from './voice'

export function Chips<T extends string>({ options, value, onChange }: { options: readonly T[]; value: T; onChange: (v: T) => void }) {
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

// Sample dogs have stock photos (Unsplash); any other name gets its initial.
const PHOTOS: Record<string, string> = {
  Biscuit: '1583511655857-d19b40a7a54e',
  Pepper: '1543466835-00a7907e9de1',
  Mochi: '1517849845537-4d257902454a',
  Olive: '1587300003388-59208cc962cb',
}
export const photoUrl = (id: string, w = 400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export function DogAvatar({ name, size = 56 }: { name: string; size?: number }) {
  const photo = PHOTOS[name]
  if (photo) return <img className="avatar" src={photoUrl(photo, size * 2)} alt={name} style={{ width: size, height: size }} />
  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.42 }}>
      {name.slice(0, 1).toUpperCase() || '?'}
    </div>
  )
}

export function ProfileCard({ dog, verified, verifiedNote }: { dog: DogProfile; verified: boolean; verifiedNote?: string }) {
  return (
    <div className={`passport ${verified ? 'verified' : ''}`}>
      <div className="passport-top">
        <DogAvatar name={dog.name} size={64} />
        <div>
          <div className="passport-name">{dog.name}</div>
          <div className="passport-meta">
            {dog.breed} · {dog.size} · {dog.sex} · {dog.energy} energy · {dog.playStyle}
          </div>
        </div>
        {verified ? (
          <div className="stamp">
            Verified
            <small>{verifiedNote ?? 'First Sniff · Oct 24'}</small>
          </div>
        ) : (
          <div className="stamp pending">Not yet verified</div>
        )}
      </div>
      <ul className="voice">
        {dogVoice(dog).map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}
