import { Button, Icon, Tag, ThemeScope } from '@screentime/cheddar-ds'
import { useEffect, useState } from 'react'
import { ABOUT_ASSETS } from '../assets'
import { IconButton } from '../components/IconButton'
import { MarketingNav, SiteFooter } from '../components/MarketingLayout'

const VALUES: Array<{
  title: string
  body: string
  tone: 'green' | 'magenta' | 'blue'
}> = [
  {
    title: 'Start with a goal',
    body: 'Purpose comes before transactions. Every saving journey begins with something meaningful.',
    tone: 'green',
  },
  {
    title: 'Make progress visible',
    body: 'Confidence grows when effort can be seen, celebrated, and repeated.',
    tone: 'magenta',
  },
  {
    title: 'Build trust together',
    body: 'Teens lead the journey while parents offer context, encouragement, and support.',
    tone: 'blue',
  },
]

const MILESTONES = [
  { year: '2022', body: 'A generation grows up without saving tools', arrow: false },
  { year: '2023', body: 'An idea forms around goal-first saving', arrow: true },
  { year: '2024', body: 'Early prototypes test habits and progress', arrow: false },
  { year: '2025', body: 'Parents are brought into the experience', arrow: true },
  { year: '2026', body: 'Cheddar launches to build lifelong money habits', arrow: false },
]

const OPEN_ROLES = [
  { title: 'Senior Frontend Engineer', details: 'Full-time · Seattle, WA' },
  { title: 'Product Design Intern', details: 'Part-time · Seattle, WA' },
  { title: 'Customer Success Manager', details: 'Contract · Remote' },
]

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)

  useEffect(() => {
    document.title = 'About Cheddar'
  }, [])

  return (
    <main className="marketing-page about-page">
      <ThemeScope brand="purple" as="header" className="about-hero">
        <img className="about-hero__wave" src={ABOUT_ASSETS.heroWave} alt="" aria-hidden />
        <MarketingNav tone="purple" />
        <div className="about-hero__content">
          <h1>About Cheddar</h1>
          <div className="about-hero__controls">
            <IconButton
              icon="arrow-left"
              label="Previous principle"
              tone="lavender"
              onClick={() => setActiveValue((value) => (value - 1 + VALUES.length) % VALUES.length)}
            />
            <IconButton
              icon="arrow-right"
              label="Next principle"
              tone="lavender"
              onClick={() => setActiveValue((value) => (value + 1) % VALUES.length)}
            />
          </div>
        </div>
        <div className="about-hero__card-viewport">
          <div className="about-hero__card-stage">
            <div className={`about-hero__cards about-hero__cards--active-${activeValue}`}>
              {VALUES.map((value, index) => (
                <article className={`about-hero-card about-hero-card--${value.tone}`} key={value.title}>
                  <h2>{value.title}</h2>
                  <div className="about-hero-card__number">
                    <img src={ABOUT_ASSETS.valueShapes[index]} alt="" aria-hidden />
                    <strong>{index + 1}</strong>
                  </div>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ThemeScope>

      <section className="figma-mission">
        <img className="figma-mission__sparkle figma-mission__sparkle--left" src={ABOUT_ASSETS.sparkle} alt="" aria-hidden />
        <img className="figma-mission__sparkle figma-mission__sparkle--top" src={ABOUT_ASSETS.sparkle} alt="" aria-hidden />
        <img className="figma-mission__sparkle figma-mission__sparkle--small" src={ABOUT_ASSETS.sparkle} alt="" aria-hidden />
        <div className="figma-mission__copy">
          <h2>Our mission</h2>
          <p>
            A smarter way for teens to save and parents to support. Cheddar gives teens the tools
            to set goals, track progress, and build real habits, while parents stay in the loop
            with visibility and optional support.
          </p>
        </div>
      </section>

      <section className="figma-timeline">
        <ThemeScope brand="blue" scheme="dark" className="figma-timeline__card">
          <img className="figma-timeline__shape figma-timeline__shape--top" src={ABOUT_ASSETS.timelineShapeTop} alt="" aria-hidden />
          <img className="figma-timeline__shape figma-timeline__shape--bottom" src={ABOUT_ASSETS.timelineShapeBottom} alt="" aria-hidden />
          <h2>How it started</h2>
          <ol className="figma-timeline__rail">
            {MILESTONES.map((milestone) => (
              <li key={milestone.year}>
                <div className={`figma-timeline__node ${milestone.arrow ? 'figma-timeline__node--arrow' : ''}`}>
                  <img
                    src={milestone.arrow ? ABOUT_ASSETS.timelineArrow : ABOUT_ASSETS.timelineNode}
                    alt=""
                    aria-hidden
                  />
                  <strong>{milestone.year}</strong>
                </div>
                <p>{milestone.body}</p>
                <img className="figma-timeline__divider" src={ABOUT_ASSETS.timelineDivider} alt="" aria-hidden />
              </li>
            ))}
          </ol>
        </ThemeScope>
      </section>

      <ThemeScope brand="magenta" as="section" className="about-careers page-section">
        <div className="page-shell about-careers__grid">
          <div className="about-careers__copy">
            <Tag label="Join the team" color="magenta" dismissible={false} />
            <h2 id="careers">Help build what comes next.</h2>
            <p>We’re a small team making financial confidence more accessible, useful, and fun.</p>
            <a href="mailto:careers@cheddar.com">Send an open application</a>
          </div>
          <div className="about-careers__roles">
            {OPEN_ROLES.map((role) => (
              <article className="career-row" key={role.title}>
                <div>
                  <span className="career-row__icon" aria-hidden>
                    <Icon name="sparkle" />
                  </span>
                  <span><strong>{role.title}</strong><small>{role.details}</small></span>
                </div>
                <Button
                  label="View role"
                  variant="primary"
                  size="small"
                  onClick={() => {
                    window.location.href = `mailto:careers@cheddar.com?subject=${encodeURIComponent(role.title)}`
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </ThemeScope>

      <SiteFooter />
    </main>
  )
}
