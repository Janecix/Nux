import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  CloudCog,
  Menu,
  MoveUpRight,
  Network,
  ShieldCheck,
  X,
} from 'lucide-react'

const services = [
  {
    icon: CloudCog,
    title: 'Cloud operations',
    copy: 'Keep environments predictable, observable, and ready for the next release.',
  },
  {
    icon: ShieldCheck,
    title: 'Security foundations',
    copy: 'Turn sensible security practices into repeatable, maintainable systems.',
  },
  {
    icon: Network,
    title: 'Infrastructure rescue',
    copy: 'Get a second pair of senior eyes when things are fragile, noisy, or unclear.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      {/*
        THESIS: Nux makes senior systems support feel like a clear, calm control room—not a vague consultancy funnel.
        OWN-WORLD: Ink-black surfaces, blueprint lines, signal-mint controls, and warm amber incident markers.
        STORY: A stretched team sees the work Nux can absorb, recognizes a practical operating rhythm, and starts a conversation.
        FIRST VIEWPORT: Compact nav, oversized promise, service signal rail, and an illustrated infrastructure map share one frame.
        FORM: An operations-room landing page; the chosen structure leads with the mechanism instead of a generic hero card.
      */}
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#" aria-label="Nux home">
          <span className="wordmark-mark">N</span>
          <span>nux<span className="wordmark-dot">.</span></span>
        </a>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a className="nav-cta" href="mailto:hello@nux.solutions">
          Start a conversation <ArrowRight size={15} strokeWidth={2.4} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="status-line"><span className="status-dot" /> Systems support, without the theatre</p>
          <h1 id="hero-title">Your infrastructure deserves a <em>steady hand.</em></h1>
          <p className="hero-intro">
            Nux gives growing teams specialized sysadmin support that is clear, capable, and sized for real-world budgets.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@nux.solutions">
              Talk to Nux <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#services">
              See what we handle <MoveUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="network-board" aria-label="Illustration of a connected infrastructure network">
          <div className="board-topline">
            <span>NUX / OPERATIONS</span>
            <span className="board-state"><span className="state-dot" /> in view</span>
          </div>
          <div className="board-canvas">
            <div className="grid-lines" />
            <svg className="network-lines" viewBox="0 0 560 330" aria-hidden="true">
              <path d="M84 87 C156 87 151 170 220 170 S287 77 350 77 S413 145 476 145" />
              <path d="M84 87 C159 87 169 248 254 248 S349 210 476 145" />
              <path d="M220 170 C267 170 273 248 340 248 S407 145 476 145" />
            </svg>
            <div className="node node-origin"><span>origin</span><strong>edge-01</strong></div>
            <div className="node node-core"><span>core</span><strong>app-cluster</strong></div>
            <div className="node node-data"><span>data</span><strong>vault-02</strong></div>
            <div className="node node-edge"><span>edge</span><strong>region-eu</strong></div>
            <div className="board-note"><CircleHelp size={14} /> visibility is a feature</div>
          </div>
          <div className="board-footer">
            <span><i className="legend-mint" /> stable pathway</span>
            <span><i className="legend-amber" /> needs attention</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Nux service principles">
        <span>For teams who are</span>
        <strong>growing fast</strong>
        <span className="strip-divider">/</span>
        <strong>stretched thin</strong>
        <span className="strip-divider">/</span>
        <strong>done with guesswork</strong>
        <ChevronDown className="strip-arrow" size={18} />
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">The work</p>
          <h2 id="services-title">A practical layer of expertise, exactly where you need it.</h2>
          <p>From calm maintenance to complicated clean-up, Nux helps make the invisible parts of your business feel handled.</p>
        </div>
        <div className="service-list">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article className="service-row" key={title}>
              <span className="service-index">0{index + 1}</span>
              <Icon className="service-icon" size={25} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowRight className="service-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="approach-quote">
          <span className="quote-mark">“</span>
          <p>Good infrastructure should make the rest of the business feel lighter.</p>
        </div>
        <div className="approach-copy">
          <p className="section-kicker">The Nux approach</p>
          <h2 id="approach-title">Senior thinking. Smaller footprint.</h2>
          <p>We start with what is true today, make the next decision visible, and leave your team with systems they can actually own.</p>
          <ul>
            <li><Check size={16} /> No bloated teams or mystery retainers</li>
            <li><Check size={16} /> Clear language for technical decisions</li>
            <li><Check size={16} /> Support shaped around your operating reality</li>
          </ul>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <span className="footer-label">Ready when you are</span>
          <h2>Let’s make your systems<br /><span>the calm part.</span></h2>
        </div>
        <a className="button button-primary footer-button" href="mailto:hello@nux.solutions">
          hello@nux.solutions <MoveUpRight size={17} />
        </a>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Nux Solutions</span>
          <span>Specialized sysadmin services</span>
          <a href="mailto:hello@nux.solutions">Email us <ArrowRight size={14} /></a>
        </div>
      </footer>
    </main>
  )
}

export default App
