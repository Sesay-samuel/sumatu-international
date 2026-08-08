import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import logo from './assets/sumatu-logo.jpg'

const services = [
  {
    number: '01',
    title: 'Hospitality Training',
    text: 'Practical, standards-driven training that builds confident teams and consistently exceptional guest experiences.',
    tags: ['Service Excellence', 'Leadership', 'Operations'],
  },
  {
    number: '02',
    title: 'Consulting',
    text: 'Hands-on operational guidance to strengthen performance, improve standards and create sustainable hospitality businesses.',
    tags: ['Operations', 'Standards', 'Performance'],
  },
  {
    number: '03',
    title: 'Staffing',
    text: 'Connect your operation with capable hospitality professionals who fit your culture, standards and service goals.',
    tags: ['Recruitment', 'Placement', 'Talent'],
  },
]

const stats = [
  ['01', 'People-first approach'],
  ['02', 'Practical expertise'],
  ['03', 'Service-led thinking'],
  ['04', 'Long-term partnerships'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sumatu International home">
          <img src={logo} alt="Sumatu International" />
        </a>

        <button
          className="menuButton"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#approach" onClick={closeMenu}>Our Approach</a>
          <a href="#contact" className="navCta" onClick={closeMenu}>Let's Talk <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroGlow"></div>
          <div className="heroCopy">
            <p className="eyebrow">HOSPITALITY TRAINING · CONSULTING · STAFFING</p>
            <h1>Elevating hospitality.<br /><em>Empowering people.</em></h1>
            <p className="heroText">
              We help hospitality businesses build stronger teams, sharper operations
              and memorable guest experiences through practical expertise and people-first solutions.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#contact">Start a conversation <span>↗</span></a>
              <a className="textLink" href="#services">Explore our services <span>↓</span></a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orb"></div>
            <div className="visualCard">
              <span>SUMATU</span>
              <strong>International</strong>
              <small>Hospitality excellence, delivered.</small>
            </div>
            <div className="floatingBadge">PEOPLE<br /><b>FIRST</b></div>
          </div>
        </section>

        <section className="trustBar">
          <span>Built around people</span>
          <span>Operationally focused</span>
          <span>Guest experience obsessed</span>
          <span>Results driven</span>
        </section>

        <section className="intro section" id="about">
          <div className="sectionLabel">01 / WHO WE ARE</div>
          <div className="introContent">
            <h2>Hospitality is more than a service. <span>It's an experience.</span></h2>
            <div>
              <p>
                Sumatu International brings together hospitality training, consulting and staffing
                to help businesses perform at their best.
              </p>
              <p>
                From developing people to improving day-to-day operations, we focus on practical
                solutions that make a visible difference — for your team, your guests and your business.
              </p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="sectionHeading">
            <div>
              <div className="sectionLabel">02 / WHAT WE DO</div>
              <h2>Three disciplines.<br /><span>One hospitality partner.</span></h2>
            </div>
            <p>From the people you hire to the standards you deliver, we help strengthen every part of the guest journey.</p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.number}>
                <div className="serviceTop">
                  <span>{service.number}</span>
                  <span className="arrow">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">
                  {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="approachImage">
            <div className="imageOverlay">
              <span>THE SUMATU STANDARD</span>
              <strong>Better people.<br />Better operations.<br />Better stays.</strong>
            </div>
          </div>
          <div className="approachCopy">
            <div className="sectionLabel">03 / OUR APPROACH</div>
            <h2>Practical thinking.<br /><span>Human impact.</span></h2>
            <p>
              Hospitality works when people have the tools, standards and confidence to do their
              best work. Our approach is collaborative, practical and designed around the realities
              of your operation.
            </p>
            <div className="stats">
              {stats.map(([num, text]) => (
                <div className="stat" key={num}><b>{num}</b><span>{text}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statementInner">
            <div className="sectionLabel">04 / THE DIFFERENCE</div>
            <h2>We don't just improve service.<br /><span>We build the people behind it.</span></h2>
            <a className="button light" href="#contact">Work with Sumatu <span>↗</span></a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contactIntro">
            <div className="sectionLabel">05 / LET'S CONNECT</div>
            <h2>Ready to raise<br /><span>the standard?</span></h2>
            <p>Tell us a little about your business and what you want to achieve. We'll take it from there.</p>
            <div className="contactDetails">
              <div><small>EMAIL</small><a href="mailto:hello@sumatuinternational.com">hello@sumatuinternational.com</a></div>
              <div><small>PHONE</small><a href="tel:+10000000000">+1 000 000 0000</a></div>
            </div>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Work email<input type="email" name="email" required placeholder="you@company.com" /></label>
            <label>How can we help?<textarea name="message" required placeholder="Tell us about your training, consulting or staffing needs..." rows="5"></textarea></label>
            <button className="button primary" type="submit">{submitted ? 'Message ready to send ✓' : 'Send enquiry ↗'}</button>
            {submitted && <p className="success">Thanks — your enquiry has been captured. Connect this form to your email/CRM endpoint to receive submissions.</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <img src={logo} alt="Sumatu International" />
          <p>Hospitality Training · Consulting · Staffing</p>
        </div>
        <div className="footerLinks">
          <a href="#services">Services</a><a href="#about">About</a><a href="#approach">Approach</a><a href="#contact">Contact</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Sumatu International. All rights reserved.</div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
