import { navigate } from '../App'
import { CALENDAR, POP_UP_DAYS, POSTED_PRICES, SAMPLE_PET, VET_TECH, VET_VISIT, money } from '../data'
import { PetPhoto, PlanCard } from '../ui'

export function Landing() {
  const next = POP_UP_DAYS[0]
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">New York City · dogs and cats</span>
            <h1>Just adopted? Your pet's first vet visit is on us.</h1>
            <p className="lead">
              A free 30-minute First Sniff with a licensed vet tech at the next pop-up day, in your pet's first 30 days. The cheapest care gets done that day,
              and you leave with a plan for what the next 12 months will cost.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/book')}>
                Book a free First Sniff
              </button>
              <button className="text-link" onClick={() => navigate('/', 'pop-up-days')}>
                See the pop-up days ↓
              </button>
            </div>
          </div>
          <div className="next-day">
            <div className="next-day-photo">
              <img src="/img/miso.jpg" alt="A happy young beagle mix looking at the camera" />
            </div>
            <div className="next-day-card">
              <span className="kicker">Next pop-up day</span>
              <b className="next-day-date">{next.day}</b>
              <span>{next.hours}</span>
              <span>
                {next.place}, {next.address}
              </span>
              <span className="muted">{next.withWho}</span>
              <span className="spots">{next.spotsLeft} First Sniff spots left</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pop-up-days" className="section alt">
        <div className="container">
          <h2>Pop-up days this month</h2>
          <p className="lead small narrow">Every month, at a shelter or a partner clinic. Come with your pet's adoption papers.</p>
          <div className="popup-grid">
            {POP_UP_DAYS.map((d) => (
              <div key={d.id} className="popup-card">
                <div className="popup-date">
                  <b>{d.shortDay.split(', ')[1]}</b>
                  <span>{d.shortDay.split(',')[0]}</span>
                </div>
                <div className="popup-info">
                  <b>{d.place}</b>
                  <span>{d.address}</span>
                  <span className="muted small-text">{d.hours}</span>
                  <span className="muted small-text">{d.withWho}</span>
                </div>
                <button className="btn btn-ghost" onClick={() => navigate('/book')}>
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="section">
        <div className="container split">
          <div>
            <h2>You walk out with a plan.</h2>
            <p className="lead small">
              {VET_TECH.split(',')[0]} builds it with you during the visit: what the next year costs, month by month, and which costs come when. A week before
              each one, we text you.
            </p>
            <div className="mini-cal">
              {CALENDAR.upcoming.slice(0, 3).map((c) => (
                <div key={c.date} className="cal-item">
                  <span>
                    <b>{c.date}</b> · {c.what}
                  </span>
                  <span>{money(c.cost)}</span>
                </div>
              ))}
            </div>
          </div>
          <PlanCard pet={SAMPLE_PET} />
        </div>
      </section>

      <section id="big-bill" className="section alt">
        <div className="container">
          <h2>When a big bill comes</h2>
          <p className="lead small narrow">
            {SAMPLE_PET.name}, {VET_VISIT.petAgeThen}, {VET_VISIT.problem}. Here is what happened at the partner clinic on {VET_VISIT.date}.
          </p>
          <div className="steps four">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Budget before the exam</h3>
              <p>
                Maya showed her budget code, <b>{VET_VISIT.budgetCode}</b>, at the front desk. The clinic saw what she could pay today and per month. She never
                said a number out loud.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Options, with prices</h3>
              <p>
                The vet offered three ways to treat it, from {money(VET_VISIT.options[2].price)} to {money(VET_VISIT.options[1].price)}, and said what each
                one risks.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>A second look</h3>
              <p>An independent vet, not paid by the clinic, checked the X-ray and the estimate in 15 minutes.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h3>0% that stays 0%</h3>
              <p>
                {money(VET_VISIT.plan.fromCushion)} from her savings cushion, then {VET_VISIT.plan.payments} payments of {money(VET_VISIT.plan.perMonth)}.
                No interest, and none charged back later. The clinic was paid that day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="section">
        <div className="container split">
          <div>
            <h2>Prices, posted</h2>
            <p className="lead small">What partner clinics charge PawPop members, known before you walk in.</p>
          </div>
          <table className="price-table">
            <tbody>
              {POSTED_PRICES.map((p) => (
                <tr key={p.what}>
                  <td>{p.what}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <PetPhoto name={SAMPLE_PET.name} size={72} />
          <h2>
            The next pop-up day is {next.day}, at {next.place}.
          </h2>
          <p>Free in your pet's first 30 days.</p>
          <button className="btn btn-light btn-lg" onClick={() => navigate('/book')}>
            Book a free First Sniff
          </button>
        </div>
      </section>
    </>
  )
}
