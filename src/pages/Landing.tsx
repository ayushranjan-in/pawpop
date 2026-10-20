import { navigate } from '../App'
import { RECOMMENDATIONS, STARTER_DOG } from '../data'
import { ProfileCard, photoUrl } from '../ui'

export function Landing() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <h1>The right company for your dog.</h1>
            <p className="lead">PawPop finds your dog a small group of dogs it gets along with, near home, and keeps a profile your sitter and groomer can read.</p>
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/join')}>
                Get started
              </button>
              <button className="text-link" onClick={() => navigate('/', 'how')}>
                How it works →
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src={photoUrl('1548199973-03cce0bbc87b', 1100)} alt="Two small dogs running together on a path" />
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Profile</h3>
              <p>Tell us how your dog plays, who it likes, what scares it, and what it eats. About ten minutes.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>First Sniff</h3>
              <p>A free 45-minute session with a few dogs and a certified trainer, near home. The trainer watches your dog play and verifies the profile.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Pops</h3>
              <p>Weekly play with the same small group of dogs that got along with yours. Dogs that prefer no company get a private slot.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="first-sniff" className="section alt">
        <div className="container split">
          <div>
            <h2>The profile, verified.</h2>
            <p className="lead small">
              Written in your dog's voice and checked in person at the First Sniff. Share it with a sitter, walker, groomer, or landlord, so they know your dog
              before they meet it.
            </p>
          </div>
          <ProfileCard dog={STARTER_DOG} verified verifiedNote="First Sniff · Oct 24" />
        </div>
      </section>

      <section id="recommendations" className="section">
        <div className="container">
          <h2>Recommendations</h2>
          <p className="lead small narrow">
            Sitters, groomers, daycares, and places used by owners of similar dogs nearby, with how it went. Businesses cannot pay to appear.
          </p>
          <div className="rec-grid">
            {RECOMMENDATIONS.slice(0, 3).map((r) => (
              <div key={r.name} className="rec">
                <div className="rec-cat">{r.category}</div>
                <b>{r.name}</b>
                <div className="rec-detail">{r.detail}</div>
                <div className="rec-proof">
                  <span>{r.fromDogs}</span>
                  <span>{r.wouldReturn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="section alt">
        <div className="container quiet-end">
          <p className="lead small">Now on the Upper West Side and in Morningside Heights.</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/join')}>
            Book a First Sniff
          </button>
        </div>
      </section>
    </>
  )
}
