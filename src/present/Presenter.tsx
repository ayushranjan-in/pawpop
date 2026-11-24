import { useCallback, useEffect, useRef, useState } from 'react'
import { navigate } from '../App'
import { scrollTo, sleep, waitFor } from './engine'
import { STEPS, type SiteStep } from './steps'
import './present.css'

// Presentation mode: Next, Next, Next. Each site step plays (navigates, clicks
// real controls with the halo on them, types its caption), then loops a small
// animation until the presenter moves on. Nothing advances on a timer.
// Keys: Right, Space, Enter, PageDown = next; Left, PageUp = back; Esc = exit.
// Pressing Next while a step is still playing finishes that step at once.

type Phase = 'playing' | 'idle'

export function Presenter({ onExit, resetDemo }: { onExit: () => void; resetDemo: () => void }) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('playing')
  const [caption, setCaption] = useState('')
  const [halo, setHalo] = useState<DOMRect | null>(null)
  const haloEl = useRef<HTMLElement | null>(null)
  const fast = useRef(false)
  const run = useRef(0)

  const step = STEPS[index]

  // Keep the halo glued to its element while the page scrolls or animates.
  useEffect(() => {
    let raf = 0
    const tick = () => {
      const el = haloEl.current
      setHalo(el && document.body.contains(el) ? el.getBoundingClientRect() : null)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Play the current step.
  useEffect(() => {
    const id = ++run.current
    const alive = () => run.current === id
    const wait = (ms: number) => (fast.current ? Promise.resolve() : sleep(ms))
    fast.current = false
    setPhase('playing')
    setCaption('')
    haloEl.current = null

    const play = async () => {
      if (step.kind === 'slide') {
        await wait(700)
        if (alive()) setPhase('idle')
        return
      }
      const s: SiteStep = step
      if (s.resetDemo) resetDemo()
      if (s.route) {
        navigate(s.route)
        await sleep(350)
      }
      const typeCaption = (async () => {
        for (let i = 1; i <= s.say.length; i++) {
          if (!alive()) return
          if (fast.current) break
          setCaption(s.say.slice(0, i))
          await sleep(14)
        }
        if (alive()) setCaption(s.say)
      })()
      for (const action of s.actions ?? []) {
        if (!alive()) return
        if ('run' in action) {
          await action.run()
          continue
        }
        const el = await waitFor(action.click, action.text, 3000)
        if (!el || !alive()) continue
        haloEl.current = el
        scrollTo(el)
        await wait(750)
        if (!alive()) return
        el.click()
        await wait(650)
      }
      const target = await waitFor(s.target, s.targetText, 3000)
      if (!alive()) return
      if (target) {
        haloEl.current = target
        scrollTo(target)
      }
      await typeCaption
      if (alive()) setPhase('idle')
    }
    void play()
    return () => {
      run.current++
      haloEl.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // Once a step has played, loop its animation until the presenter moves on.
  useEffect(() => {
    if (phase !== 'idle' || step.kind !== 'site' || !step.loop) return
    let stopped = false
    void step.loop({ stopped: () => stopped })
    return () => {
      stopped = true
      document.querySelectorAll('.tour-glint').forEach((el) => el.classList.remove('tour-glint'))
    }
  }, [phase, step])

  const next = useCallback(() => {
    if (phase === 'playing') {
      fast.current = true
      return
    }
    if (index < STEPS.length - 1) setIndex(index + 1)
    else onExit()
  }, [phase, index, onExit])

  const back = useCallback(() => {
    if (index > 0) setIndex(index - 1)
  }, [index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', 'Enter', ' '].includes(e.key)) {
        e.preventDefault()
        next()
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        back()
      } else if (e.key === 'Escape') onExit()
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [next, back, onExit])

  const progress = (
    <div className="pr-dots">
      {STEPS.map((s, i) => (
        <span key={i} className={`${i === index ? 'on' : ''} ${i < index ? 'done' : ''} ${s.kind}`} />
      ))}
    </div>
  )

  const controls = (
    <div className="pr-controls">
      <button className="pr-back" onClick={back} disabled={index === 0} aria-label="Back">
        ←
      </button>
      <span className="pr-count">
        {index + 1} / {STEPS.length}
      </span>
      <button className={`pr-next ${phase === 'idle' ? 'ready' : ''}`} onClick={next}>
        {index === STEPS.length - 1 ? 'Finish' : 'Next →'}
      </button>
    </div>
  )

  if (step.kind === 'slide') {
    return (
      <div className={`pr-slide layout-${step.layout ?? 'text'} ${phase}`} key={index}>
        <div className="pr-slide-inner">
          <h1 className="pr-slide-title">{step.title}</h1>
          <div className="pr-slide-body">{step.body}</div>
        </div>
        <div className="pr-bar">
          {progress}
          {controls}
        </div>
      </div>
    )
  }

  return (
    <>
      {halo && (
        <div
          className={`pr-halo ${phase === 'idle' ? 'breathe' : ''}`}
          style={{ top: halo.top - 6, left: halo.left - 6, width: halo.width + 12, height: halo.height + 12 }}
        />
      )}
      <div className="pr-card">
        <div className="pr-card-title">{step.title}</div>
        <div className="pr-card-say">
          {caption}
          {phase === 'playing' && <span className="pr-caret" />}
        </div>
        <div className="pr-bar inline">
          {progress}
          {controls}
        </div>
      </div>
    </>
  )
}

