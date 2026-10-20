import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import logo from './assets/sumatu-logo.jpg'

const translations = {
  en: {
    navServices:'Services', navAbout:'About', navApproach:'Our Approach', navContact:"Let's Talk",
    heroEyebrow:'HOSPITALITY TRAINING · CONSULTING · STAFFING', heroTitle:'Elevating hospitality.', heroAccent:'Empowering people.',
    heroText:'We help hospitality businesses build stronger teams, sharper operations and memorable guest experiences through practical expertise and people-first solutions.',
    startConversation:'Start a conversation', exploreServices:'Explore our services', excellence:'Hospitality excellence, delivered.', people:'PEOPLE', first:'FIRST',
    trust:['Built around people','Operationally focused','Guest experience obsessed','Results driven'],
    aboutLabel:'01 / WHO WE ARE', aboutTitle:'Hospitality is more than a service.', aboutAccent:"It's an experience.",
    aboutP1:'Sumatu International brings together hospitality training, consulting and staffing to help businesses perform at their best.',
    aboutP2:'From developing people to improving day-to-day operations, we focus on practical solutions that make a visible difference — for your team, your guests and your business.',
    servicesLabel:'02 / WHAT WE DO', servicesTitle:'Three disciplines.', servicesAccent:'One hospitality partner.',
    servicesIntro:'{t.servicesIntro}',
    services:[
      {title:'Hospitality Training',text:'Practical, standards-driven training that builds confident teams and consistently exceptional guest experiences.',tags:['Service Excellence','Leadership','Operations']},
      {title:'Consulting',text:'Hands-on operational guidance to strengthen performance, improve standards and create sustainable hospitality businesses.',tags:['Operations','Standards','Performance']},
      {title:'Staffing',text:'Connect your operation with capable hospitality professionals who fit your culture, standards and service goals.',tags:['Recruitment','Placement','Talent']}
    ],
    standard:'THE SUMATU STANDARD', standardText:['Better people.','Better operations.','Better stays.'],
    approachLabel:'03 / OUR APPROACH', approachTitle:'Practical thinking.', approachAccent:'Human impact.',
    approachText:'Hospitality works when people have the tools, standards and confidence to do their best work. Our approach is collaborative, practical and designed around the realities of your operation.',
    stats:['People-first approach','Practical expertise','Service-led thinking','Long-term partnerships'],
    differenceLabel:'04 / THE DIFFERENCE', differenceTitle:"We don't just improve service.", differenceAccent:'We build the people behind it.', workWith:'Work with Sumatu',
    contactLabel:"05 / LET'S CONNECT", contactTitle:'Ready to raise', contactAccent:'the standard?',
    contactText:"{t.contactText}",
    email:'EMAIL', phone:'PHONE', name:'Name', namePlaceholder:'Your name', workEmail:'Work email', help:'How can we help?',
    messagePlaceholder:'Tell us about your training, consulting or staffing needs...', send:'Send enquiry ↗', sent:'Message ready to send ✓',
    success:'{t.success}',
    footerLine:'Hospitality Training · Consulting · Staffing', footerApproach:'Approach', footerContact:'Contact', rights:'All rights reserved.',
    menu:'Toggle navigation', language:'Website language'
  },
  de: {
    navServices:'Leistungen', navAbout:'Über uns', navApproach:'Unser Ansatz', navContact:'Kontakt aufnehmen',
    heroEyebrow:'HOTELLERIE-TRAINING · BERATUNG · PERSONALVERMITTLUNG', heroTitle:'Gastfreundschaft auf höchstem Niveau.', heroAccent:'Menschen stärken.',
    heroText:'Wir unterstützen Unternehmen im Gastgewerbe dabei, stärkere Teams, effizientere Abläufe und unvergessliche Gästeerlebnisse zu schaffen – mit praxisnaher Expertise und Lösungen, bei denen Menschen im Mittelpunkt stehen.',
    startConversation:'Gespräch beginnen', exploreServices:'Leistungen entdecken', excellence:'Exzellenz in der Gastfreundschaft.', people:'MENSCHEN', first:'ZUERST',
    trust:['Menschen im Mittelpunkt','Fokus auf Betriebsabläufe','Begeisternde Gästeerlebnisse','Ergebnisorientiert'],
    aboutLabel:'01 / ÜBER UNS', aboutTitle:'Gastfreundschaft ist mehr als eine Dienstleistung.', aboutAccent:'Sie ist ein Erlebnis.',
    aboutP1:'Sumatu International vereint Schulungen, Beratung und Personalvermittlung für das Gastgewerbe, damit Unternehmen ihr volles Potenzial entfalten können.',
    aboutP2:'Von der Mitarbeiterentwicklung bis zur Optimierung täglicher Abläufe setzen wir auf praxisnahe Lösungen, die für Ihr Team, Ihre Gäste und Ihr Unternehmen spürbare Verbesserungen bringen.',
    servicesLabel:'02 / UNSERE LEISTUNGEN', servicesTitle:'Drei Fachbereiche.', servicesAccent:'Ein Partner für Gastfreundschaft.',
    servicesIntro:'Von der Personalauswahl bis zu Ihren Servicestandards stärken wir jeden Abschnitt der Gästereise.',
    services:[
      {title:'Schulungen im Gastgewerbe',text:'Praxisorientierte Schulungen mit klaren Standards, die Teams stärken und dauerhaft herausragende Gästeerlebnisse ermöglichen.',tags:['Servicequalität','Führung','Betriebsabläufe']},
      {title:'Beratung',text:'Praxisnahe betriebliche Beratung, um Leistung und Standards zu verbessern und nachhaltige Unternehmen im Gastgewerbe aufzubauen.',tags:['Betriebsabläufe','Standards','Leistung']},
      {title:'Personalvermittlung',text:'Wir bringen Sie mit qualifizierten Fachkräften zusammen, die zu Ihrer Unternehmenskultur, Ihren Standards und Ihren Servicezielen passen.',tags:['Rekrutierung','Vermittlung','Talente']}
    ],
    standard:'DER SUMATU-STANDARD', standardText:['Stärkere Teams.','Bessere Abläufe.','Schönere Aufenthalte.'],
    approachLabel:'03 / UNSER ANSATZ', approachTitle:'Praxisnah denken.', approachAccent:'Menschen bewegen.',
    approachText:'Gastfreundschaft gelingt, wenn Menschen die richtigen Werkzeuge, Standards und das Vertrauen haben, ihr Bestes zu geben. Unser Ansatz ist partnerschaftlich, praxisorientiert und auf die Anforderungen Ihres Betriebs abgestimmt.',
    stats:['Menschenorientierter Ansatz','Praxisnahe Expertise','Serviceorientiertes Denken','Langfristige Partnerschaften'],
    differenceLabel:'04 / UNSER UNTERSCHIED', differenceTitle:'Wir verbessern nicht nur den Service.', differenceAccent:'Wir stärken die Menschen dahinter.', workWith:'Mit Sumatu zusammenarbeiten',
    contactLabel:'05 / KONTAKT', contactTitle:'Bereit für höhere', contactAccent:'Standards?',
    contactText:'Erzählen Sie uns von Ihrem Unternehmen und Ihren Zielen. Wir kümmern uns um die nächsten Schritte.',
    email:'E-MAIL', phone:'TELEFON', name:'Name', namePlaceholder:'Ihr Name', workEmail:'Geschäftliche E-Mail', help:'Wie können wir helfen?',
    messagePlaceholder:'Erzählen Sie uns von Ihrem Bedarf an Schulungen, Beratung oder Personal...', send:'Anfrage senden ↗', sent:'Nachricht vorbereitet ✓',
    success:'Vielen Dank – Ihre Anfrage wurde erfasst. Verbinden Sie dieses Formular mit Ihrem E-Mail- oder CRM-System, um Nachrichten zu erhalten.',
    footerLine:'Schulungen · Beratung · Personalvermittlung', footerApproach:'Ansatz', footerContact:'Kontakt', rights:'Alle Rechte vorbehalten.',
    menu:'Navigation umschalten', language:'Sprache der Website'
  }
}

function getInitialLanguage() {
  try { return localStorage.getItem('sumatu-language') === 'de' ? 'de' : 'en' } catch { return 'en' }
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const t = translations[language]
  const changeLanguage = (next) => {
    setLanguage(next)
    setMenuOpen(false)
    try { localStorage.setItem('sumatu-language', next) } catch { /* Storage may be disabled */ }
    document.documentElement.lang = next
    document.title = next === 'de' ? 'Sumatu International | Exzellenz im Gastgewerbe' : 'Sumatu International | Hospitality Excellence'
  }
  React.useEffect(() => { document.documentElement.lang = language; document.title = language === 'de' ? 'Sumatu International | Exzellenz im Gastgewerbe' : 'Sumatu International | Hospitality Excellence' }, [language])
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

        <div className="languageSwitcher" role="group" aria-label={t.language}>
          <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === 'de' ? 'active' : ''} aria-pressed={language === 'de'} onClick={() => changeLanguage('de')}>DE</button>
        </div>
        <button
          className="menuButton"
          aria-label={t.menu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#services" onClick={closeMenu}>{t.navServices}</a>
          <a href="#about" onClick={closeMenu}>{t.navAbout}</a>
          <a href="#approach" onClick={closeMenu}>{t.navApproach}</a>
          <a href="#contact" className="navCta" onClick={closeMenu}>{t.navContact} <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroGlow"></div>
          <div className="heroCopy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}<br /><em>{t.heroAccent}</em></h1>
            <p className="heroText">
              {t.heroText}
            </p>
            <div className="heroActions">
              <a className="button primary" href="#contact">{t.startConversation} <span>↗</span></a>
              <a className="textLink" href="#services">{t.exploreServices} <span>↓</span></a>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orb"></div>
            <div className="visualCard">
              <span>SUMATU</span>
              <strong>International</strong>
              <small>{t.excellence}</small>
            </div>
            <div className="floatingBadge">{t.people}<br /><b>{t.first}</b></div>
          </div>
        </section>

        <section className="trustBar">
          {t.trust.map((item) => <span key={item}>{item}</span>)}
        </section>

        <section className="intro section" id="about">
          <div className="sectionLabel">{t.aboutLabel}</div>
          <div className="introContent">
            <h2>{t.aboutTitle} <span>{t.aboutAccent}</span></h2>
            <div>
              <p>
                {t.aboutP1}
              </p>
              <p>
                {t.aboutP2}
              </p>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="sectionHeading">
            <div>
              <div className="sectionLabel">{t.servicesLabel}</div>
              <h2>{t.servicesTitle}<br /><span>{t.servicesAccent}</span></h2>
            </div>
            <p>{t.servicesIntro}</p>
          </div>

          <div className="serviceGrid">
            {t.services.map((service, index) => (
              <article className="serviceCard" key={index}>
                <div className="serviceTop">
                  <span>{String(index + 1).padStart(2, "0")}</span>
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
              <span>{t.standard}</span>
              <strong>{t.standardText[0]}<br />{t.standardText[1]}<br />{t.standardText[2]}</strong>
            </div>
          </div>
          <div className="approachCopy">
            <div className="sectionLabel">{t.approachLabel}</div>
            <h2>{t.approachTitle}<br /><span>{t.approachAccent}</span></h2>
            <p>
              {t.approachText}
            </p>
            <div className="stats">
              {t.stats.map((text, index) => (
                <div className="stat" key={index}><b>{String(index + 1).padStart(2, "0")}</b><span>{text}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statementInner">
            <div className="sectionLabel">{t.differenceLabel}</div>
            <h2>{t.differenceTitle}<br /><span>{t.differenceAccent}</span></h2>
            <a className="button light" href="#contact">{t.workWith} <span>↗</span></a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contactIntro">
            <div className="sectionLabel">{t.contactLabel}</div>
            <h2>{t.contactTitle}<br /><span>{t.contactAccent}</span></h2>
            <p>{t.contactText}</p>
            <div className="contactDetails">
              <div><small>{t.email}</small><a href="mailto:hello@sumatuinternational.com">hello@sumatuinternational.com</a></div>
              <div><small>{t.phone}</small><a href="tel:+10000000000">+1 000 000 0000</a></div>
            </div>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <label>{t.name}<input name="name" required placeholder={t.namePlaceholder} /></label>
            <label>{t.workEmail}<input type="email" name="email" required placeholder="you@company.com" /></label>
            <label>{t.help}<textarea name="message" required placeholder={t.messagePlaceholder} rows="5"></textarea></label>
            <button className="button primary" type="submit">{submitted ? t.sent : t.send}</button>
            {submitted && <p className="success">{t.success}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <img src={logo} alt="Sumatu International" />
          <p>{t.footerLine}</p>
        </div>
        <div className="footerLinks">
          <a href="#services">{t.navServices}</a><a href="#about">{t.navAbout}</a><a href="#approach">{t.footerApproach}</a><a href="#contact">{t.footerContact}</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Sumatu International. {t.rights}</div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
