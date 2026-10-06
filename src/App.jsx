import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import {
  education,
  experience,
  profile,
  projects,
  skills,
  softSkills,
  stats,
} from './data.js'
import './App.css'

const year = new Date().getFullYear()

const navLinks = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
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
  }, [])
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
    navLinks.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function ThemeToggle() {
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
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  )
}

function Nav() {
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
          <span className="nav__name">{profile.firstName}</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
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
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="status reveal">
            <span className="status__dot" /> Software Developer @ Kitsomboon
          </p>
          <h1 className="hero__title reveal">
            Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>.
            <br />I build systems end to end.
          </h1>
          <p className="hero__lead reveal">{profile.tagline}</p>
          <div className="hero__cta reveal">
            <a href="#projects" className="btn btn--primary">
              View my work <Icon name="arrow" size={18} />
            </a>
            <a href={profile.resume} className="btn btn--ghost" download>
              <Icon name="download" size={18} /> Download résumé
            </a>
          </div>
          <dl className="stats reveal">
            {stats.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual reveal">
          <div className="portrait">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
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
                {'\n'}  name: <i className="s">&apos;{profile.name}&apos;</i>,
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
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="01" eyebrow="About me" title="From requirements to production." />
        <div className="about">
          <p className="about__text reveal">{profile.about}</p>
          <div className="about__cards">
            <div className="info-card reveal">
              <span className="info-card__icon"><Icon name="cap" /></span>
              <div>
                <p className="info-card__label">Education</p>
                <p className="info-card__title">{education.degree}</p>
                <p className="info-card__sub">{education.school}, {education.location}</p>
              </div>
            </div>
            <div className="info-card reveal">
              <span className="info-card__icon"><Icon name="pin" /></span>
              <div>
                <p className="info-card__label">Based in</p>
                <p className="info-card__title">{profile.location}</p>
                <p className="info-card__sub">Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="02" eyebrow="Experience" title="Where I work." />
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
              <li key={r.title} className="duty">
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
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead index="03" eyebrow="Selected projects" title="Things I've built." />
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.title} className="project reveal" style={{ '--d': `${i * 80}ms` }}>
              <div className="project__top">
                <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__tags">
                  {p.badge && <span className="pill pill--accent">{p.badge}</span>}
                  {p.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p className="project__summary">{p.summary}</p>
              <div className="project__role">
                <span>Role</span>
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
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index="04" eyebrow="Skills" title="My toolkit." />
        <div className="skills">
          {skills.map((s, i) => (
            <div key={s.group} className="skill-card reveal" style={{ '--d': `${i * 60}ms` }}>
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
              <h3>Beyond code</h3>
            </div>
            <ul className="soft">
              {softSkills.map((s) => (
                <li key={s}>
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
    <button type="button" className="icon-btn icon-btn--sm" onClick={copy} aria-label={`Copy ${value}`}>
      <Icon name={copied ? 'check' : 'copy'} size={16} />
    </button>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <p className="eyebrow">05 — Contact</p>
          <h2>
            Have a project in mind?
            <br />
            <span className="gradient-text">Let&apos;s build it together.</span>
          </h2>
          <p className="contact__lead">
            I&apos;m always happy to talk about new opportunities, interesting systems, or how I can help your team ship.
          </p>
          <div className="contact__links">
            <div className="contact__item">
              <a href={`mailto:${profile.email}`}>
                <span className="duty__icon"><Icon name="mail" /></span>
                <span>
                  <small>Email</small>
                  {profile.email}
                </span>
              </a>
              <CopyButton value={profile.email} />
            </div>
            <div className="contact__item">
              <a href={`tel:${profile.phoneHref}`}>
                <span className="duty__icon"><Icon name="phone" /></span>
                <span>
                  <small>Phone</small>
                  {profile.phone}
                </span>
              </a>
              <CopyButton value={profile.phone} />
            </div>
          </div>
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
            Say hello <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  useReveal()
  return (
    <>
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
          <p>© {year} {profile.name}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
