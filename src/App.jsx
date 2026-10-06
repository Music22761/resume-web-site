import { createContext, useContext, useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { contact, content } from './data.js'
import './App.css'

const year = new Date().getFullYear()

const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact']

const LangContext = createContext({ lang: 'en', t: content.en, setLang: () => {} })
const useLang = () => useContext(LangContext)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'th' || saved === 'en') return saved
  } catch {
    // storage unavailable — fall back to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('th') ? 'th' : 'en'
}

function useReveal(lang) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang])
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function ThemeToggle() {
  const { t } = useLang()
  const [theme, setTheme] = useState(() => {
    const set = document.documentElement.dataset.theme
    if (set) return set
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable — theme still applies for this visit
    }
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={theme === 'dark' ? t.ui.toLight : t.ui.toDark}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  )
}

function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
      aria-label={t.ui.switchLang}
      title={t.ui.switchLang}
    >
      <span className={lang === 'th' ? 'is-active' : ''}>TH</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}

function Nav() {
  const { t } = useLang()
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__mark">SC</span>
          <span className="nav__name">{contact.firstName}</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.ui.toggleMenu}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="status reveal">
            <span className="status__dot" /> {t.ui.status}
          </p>
          <h1 className="hero__title reveal">
            {t.ui.hello} <span className="gradient-text">{contact.firstName}</span>
            {t.ui.nameEnd}
            <br />
            {t.ui.headline}
          </h1>
          <p className="hero__lead reveal">{t.tagline}</p>
          <div className="hero__cta reveal">
            <a href="#projects" className="btn btn--primary">
              {t.ui.viewWork} <Icon name="arrow" size={18} />
            </a>
            <a href={contact.resume} className="btn btn--ghost" download>
              <Icon name="download" size={18} /> {t.ui.download}
            </a>
          </div>
          <dl className="stats reveal">
            {t.stats.map((s, i) => (
              <div key={i} className="stats__item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual reveal">
          <div className="portrait">
            {contact.photo ? (
              <img src={contact.photo} alt={`${t.ui.portraitAlt} ${contact.name}`} />
            ) : (
              <div className="portrait__empty" aria-hidden="true">
                <Icon name="user" size={72} />
              </div>
            )}
          </div>
          <div className="code-card" aria-hidden="true">
            <div className="code-card__bar">
              <span /><span /><span />
              <em>developer.ts</em>
            </div>
            <pre>
              <code>
                <i className="k">const</i> <i className="v">dev</i> = {'{'}
                {'\n'}  name: <i className="s">&apos;{contact.name}&apos;</i>,
                {'\n'}  stack: [<i className="s">&apos;Web&apos;</i>, <i className="s">&apos;Mobile&apos;</i>, <i className="s">&apos;API&apos;</i>],
                {'\n'}  runtime: <i className="s">&apos;Bun&apos;</i>,
                {'\n'}  ships: <i className="k">true</i>,
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHead({ index, eyebrow, title }) {
  return (
    <div className="section-head reveal">
      <span className="section-head__index">{index}</span>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function About() {
  const { t } = useLang()
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="01" eyebrow={t.ui.aboutEyebrow} title={t.ui.aboutTitle} />
        <div className="about">
          <p className="about__text reveal">{t.about}</p>
          <div className="about__cards">
            <div className="info-card reveal">
              <span className="info-card__icon"><Icon name="cap" /></span>
              <div>
                <p className="info-card__label">{t.ui.education}</p>
                <p className="info-card__title">{t.education.degree}</p>
                <p className="info-card__sub">{t.education.school}</p>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="info-card__icon"><Icon name="pin" /></span>
              <div>
                <p className="info-card__label">{t.ui.basedIn}</p>
                <p className="info-card__title">{t.ui.location}</p>
                <p className="info-card__sub">{t.ui.openTo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const { t } = useLang()
  const { experience } = t
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="02" eyebrow={t.ui.expEyebrow} title={t.ui.expTitle} />
        <article className="job reveal">
          <header className="job__head">
            <div>
              <h3>{experience.company}</h3>
              <p className="job__title">{experience.title}</p>
            </div>
            <span className="pill pill--live">
              <span className="status__dot" /> {experience.period}
            </span>
          </header>
          <ul className="job__grid">
            {experience.responsibilities.map((r) => (
              <li key={r.icon} className="duty">
                <span className="duty__icon"><Icon name={r.icon} /></span>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function Projects() {
  const { t } = useLang()
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead index="03" eyebrow={t.ui.projEyebrow} title={t.ui.projTitle} />
        <div className="projects">
          {t.projects.map((p, i) => (
            <article key={p.id} className="project reveal" style={{ '--d': `${i * 80}ms` }}>
              <div className="project__top">
                <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__tags">
                  {p.badge && <span className="pill pill--accent">{p.badge}</span>}
                  {p.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p className="project__summary">{p.summary}</p>
              <div className="project__role">
                <span>{t.ui.role}</span>
                <p>{p.role}</p>
              </div>
              <ul className="project__stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { t } = useLang()
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index="04" eyebrow={t.ui.skillsEyebrow} title={t.ui.skillsTitle} />
        <div className="skills">
          {t.skills.map((s, i) => (
            <div key={s.icon} className="skill-card reveal" style={{ '--d': `${i * 60}ms` }}>
              <div className="skill-card__head">
                <span className="duty__icon"><Icon name={s.icon} /></span>
                <h3>{s.group}</h3>
              </div>
              <ul className="chips">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="skill-card skill-card--wide reveal">
            <div className="skill-card__head">
              <span className="duty__icon"><Icon name="users" /></span>
              <h3>{t.ui.beyondCode}</h3>
            </div>
            <ul className="soft">
              {t.softSkills.map((s, i) => (
                <li key={i}>
                  <Icon name="check" size={16} /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CopyButton({ value }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard blocked — the link itself still works
    }
  }
  return (
    <button type="button" className="icon-btn icon-btn--sm" onClick={copy} aria-label={`${t.ui.copy} ${value}`}>
      <Icon name={copied ? 'check' : 'copy'} size={16} />
    </button>
  )
}

function Contact() {
  const { t } = useLang()
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="eyebrow">{t.ui.contactEyebrow}</p>
          <h2>
            {t.ui.contactTitle}
            <br />
            <span className="gradient-text">{t.ui.contactTitle2}</span>
          </h2>
          <p className="contact__lead">{t.ui.contactLead}</p>
          <div className="contact__links">
            <div className="contact__item">
              <a href={`mailto:${contact.email}`}>
                <span className="duty__icon"><Icon name="mail" /></span>
                <span>
                  <small>{t.ui.email}</small>
                  {contact.email}
                </span>
              </a>
              <CopyButton value={contact.email} />
            </div>
            <div className="contact__item">
              <a href={`tel:${contact.phoneHref}`}>
                <span className="duty__icon"><Icon name="phone" /></span>
                <span>
                  <small>{t.ui.phone}</small>
                  {contact.phone}
                </span>
              </a>
              <CopyButton value={contact.phone} />
            </div>
          </div>
          <a href={`mailto:${contact.email}`} className="btn btn--primary btn--lg">
            {t.ui.sayHello} <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [lang, setLangState] = useState(initialLang)
  const t = content[lang]

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      // storage unavailable — language still applies for this visit
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  useReveal(lang)

  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>© {year} {contact.name}</p>
          <a href="#top">{t.ui.backToTop}</a>
        </div>
      </footer>
    </LangContext.Provider>
  )
}

export default App
