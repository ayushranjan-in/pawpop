import { navigate } from '../App'
import { POP_UP_DAYS, POSTED_PRICES, SAMPLE_PET, VET_TECH, VET_VISIT, money } from '../data'
import { PlanCard } from '../ui'

// The opening sentence is the project description on the Week 10 Miro board, word for word.
export function Landing() {
  return (
    <>
      <section id="plan" className="hero-section">
        <div className="container hero-grid">
          <div>
            <h1>PawPop helps new dog and cat owners in NYC see and handle what their pet will really cost.</h1>
            <p className="lead">Owners guess a dog costs about $8,000 over its life. The real cost is $22,000-61,000.</p>
            <p className="lead">
              In your pet's first 30 days, {VET_TECH.split(',')[0]}, a licensed vet tech, builds your pet's cost plan with you at a free 30-minute session
              called First Sniff. When a big bill comes later, the clinic already knows your budget and offers options and a true 0% plan.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/book')}>
                Get your pet's cost plan
              </button>
              <button className="text-link" onClick={() => navigate('/', 'big-bill')}>
                What happens with a big bill ↓
              </button>
            </div>
          </div>
          <PlanCard pet={SAMPLE_PET} />
        </div>
      </section>

      <section id="big-bill" className="section alt">
        <div className="container">
          <h2>When a big bill comes</h2>
          <p className="lead small narrow">
            {SAMPLE_PET.name}, {VET_VISIT.petAgeThen}, {VET_VISIT.problem}. This is what happened at the partner clinic on {VET_VISIT.date}.
          </p>
          <div className="steps four">
            <div className="step">
              <div className="step-num">1</div>
              <h3>The clinic sees the budget first</h3>
              <p>
                Maya showed her budget code, <b>{VET_VISIT.budgetCode}</b>, at the front desk. The clinic saw what she could pay today and per month, so she
                never had to say a number out loud.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Options with prices</h3>
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
              <h3>A 0% plan</h3>
              <p>
                {money(VET_VISIT.plan.fromCushion)} came from her savings cushion, then {VET_VISIT.plan.payments} payments of{' '}
                {money(VET_VISIT.plan.perMonth)}. There is no interest, and none is charged back later. The clinic was paid that day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pop-up-days" className="section">
        <div className="container">
          <h2>How to start: First Sniff at a pop-up day</h2>
          <p className="lead small narrow">
            First Sniff is free in your pet's first 30 days. It takes 30 minutes with a licensed vet tech, at a monthly pop-up day at a shelter or a partner
            clinic. Bring the adoption papers.
          </p>
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

      <section id="prices" className="section alt">
        <div className="container split">
          <div>
            <h2>Member prices at partner clinics</h2>
            <p className="lead small">Every price is posted before you walk in.</p>
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
    </>
  )
}
