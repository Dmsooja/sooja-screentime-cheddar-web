import { Button, Icon, Tag, ThemeScope } from '@screentime/cheddar-ds'
import type { IconName } from '@screentime/cheddar-ds'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DOWNLOAD_ASSETS } from '../assets'
import { MarketingNav, SiteFooter } from '../components/MarketingLayout'

const FEATURES: Array<{
  title: string
  body: string
  icon: IconName
  tone: 'green' | 'blue' | 'magenta' | 'purple'
}> = [
  {
    title: 'Goal-based savings',
    body: 'Kids choose what they want to save for. From new headphones to concert tickets, every goal becomes a visual journey.',
    icon: 'piggybank',
    tone: 'green',
  },
  {
    title: 'Visual tracking',
    body: 'See progress clearly and turn every deposit into momentum.',
    icon: 'chart',
    tone: 'blue',
  },
  {
    title: 'Parental controls',
    body: 'Give teens independence while keeping parents informed.',
    icon: 'profile',
    tone: 'magenta',
  },
  {
    title: 'Instant deposits',
    body: 'Move money into goals quickly, simply, and securely.',
    icon: 'deposit',
    tone: 'purple',
  },
]

const COMPARISON_ROWS = [
  'Goal-first savings system',
  'Visual progress tracking',
  'Streak-based habit rewards',
  'Milestone unlock moments',
  'Parent savings match',
  'Shared family goals',
  'AI-powered savings insights',
  'Behavioral nudges',
] as const

const REVIEWS = [
  {
    quote: 'The streaks keep me locked in. Missing a week feels worse than not saving at all.',
    name: 'Leo S.',
    location: 'San Diego, CA',
  },
  {
    quote: 'It’s the first time I’ve seen my teen excited about saving instead of just asking for things.',
    name: 'Priya N.',
    location: 'Brooklyn, NY',
  },
  {
    quote: 'Seeing my progress bar move actually made me want to keep saving. It feels like a game, but it’s real money.',
    name: 'Maya R.',
    location: 'Austin, TX',
  },
  {
    quote: 'I used to spend everything right away. Now I have three goals going at once and I’m actually hitting them.',
    name: 'Jordan K.',
    location: 'Portland, OR',
  },
  {
    quote: 'My daughter is more intentional with her spending now. She thinks before she buys.',
    name: 'Marcus B.',
    location: 'Atlanta, GA',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Cheddar — Save with purpose'
  }, [])

  return (
    <main className="marketing-page home-page">
      <ThemeScope brand="blue" scheme="dark" as="header" className="home-hero">
        <img className="home-hero__shape" src={DOWNLOAD_ASSETS.heroShape} alt="" aria-hidden />
        <MarketingNav tone="blue" />
        <div className="page-shell home-hero__grid">
          <div className="home-hero__content">
            <Tag label="Money habits for life" color="green" dismissible={false} />
            <h1>Dream bigger. Save smarter.</h1>
            <p>
              Cheddar helps teens turn goals into lasting money habits, with parents nearby when
              support matters.
            </p>
            <div className="button-row">
              <Button
                label="Download the app"
                variant="primary"
                size="large"
                onClick={() => navigate('/download')}
              />
              <Button
                label="Meet Cheddar"
                variant="secondary"
                size="large"
                onClick={() => navigate('/about')}
              />
            </div>
          </div>

          <div className="home-hero__visual" aria-label="Cheddar app preview">
            <div className="home-hero__orb" />
            <img
              className="home-hero__piggy"
              src={DOWNLOAD_ASSETS.piggyBank}
              alt="Chrome Cheddar piggy bank"
            />
            <div className="home-goal-card">
              <span>Concert tickets</span>
              <strong>$224</strong>
              <div><span /></div>
              <small>74% saved</small>
            </div>
          </div>
        </div>
      </ThemeScope>

      <section className="home-proof" aria-label="Cheddar highlights">
        <div className="page-shell home-proof__grid">
          <div><strong>4</strong><span>simple ways to build a habit</span></div>
          <div><strong>1</strong><span>shared view for every family</span></div>
          <div><strong>100%</strong><span>focused on progress, not pressure</span></div>
        </div>
      </section>

      <section className="figma-how page-section" id="features">
        <div className="page-shell">
          <h2>How it works</h2>
          <div className="figma-how__grid">
            {FEATURES.map((feature, index) => (
              <article
                className={`figma-how-card figma-how-card--${feature.tone} ${index === 0 ? 'figma-how-card--wide' : ''}`}
                key={feature.title}
              >
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
                <span className="figma-how-card__icon" aria-hidden><Icon name={feature.icon} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ThemeScope brand="magenta" as="section" className="family-section page-section">
        <div className="page-shell family-section__grid">
          <div className="family-section__copy">
            <Tag label="Better together" color="magenta" dismissible={false} />
            <h2>Independence for teens. Reassurance for parents.</h2>
            <p>
              Teens own their goals and progress. Parents get the context they need to celebrate,
              encourage, and help at the right moments.
            </p>
            <Button
              label="See why we built it"
              variant="primary"
              size="large"
              onClick={() => navigate('/about')}
            />
          </div>
          <div className="family-section__screens">
            {DOWNLOAD_ASSETS.screens.slice(1).map((screen, index) => (
              <img src={screen} alt={`Cheddar app screen ${index + 1}`} key={screen} />
            ))}
          </div>
        </div>
      </ThemeScope>

      <section className="figma-upsell">
        <ThemeScope brand="purple" className="figma-upsell__card">
          <div className="figma-upsell__shape" aria-hidden />
          <div className="figma-upsell__copy">
            <h2>Better saving starts here</h2>
            <p>
              Cheddar makes it easy for teens to grow their confidence and for parents to stay
              connected — all in one app.
            </p>
            <Button
              className="figma-upsell__button"
              label="Get started"
              variant="primary"
              size="large"
              onClick={() => navigate('/download')}
            />
          </div>
          <img src={DOWNLOAD_ASSETS.piggyBank} alt="Chrome Cheddar piggy bank" />
        </ThemeScope>
      </section>

      <ThemeScope brand="green" scheme="dark" as="section" className="figma-comparison">
        <div className="figma-comparison__table" role="table" aria-label="Why Cheddar wins">
          <div className="figma-comparison__header" role="row">
            <h2 role="columnheader">Why Cheddar wins</h2>
            <span role="columnheader">Cheddar</span>
            <span role="columnheader">Others</span>
          </div>
          {COMPARISON_ROWS.map((feature, index) => (
            <div className="figma-comparison__row" role="row" key={feature}>
              <span role="cell">{feature}</span>
              <span className="figma-comparison__yes" role="cell" aria-label="Included">
                <Icon name="check" />
              </span>
              <span className="figma-comparison__other" role="cell" aria-label={index < 2 ? 'Included' : 'Not included'}>
                {index < 2 ? <Icon name="check" /> : '○'}
              </span>
            </div>
          ))}
          <div className="figma-comparison__cta">
            <Button
              label="Get started"
              variant="primary"
              size="small"
              onClick={() => navigate('/download')}
            />
          </div>
        </div>
      </ThemeScope>

      <ThemeScope brand="magenta" scheme="dark" as="section" className="figma-reviews">
        <img
          className="figma-reviews__shapes"
          src={DOWNLOAD_ASSETS.reviewShapes}
          alt=""
          aria-hidden
        />
        <div className="figma-reviews__heading">
          <p>Real stories from real savers</p>
          <h2>Reviews</h2>
        </div>
        <div className="figma-reviews__viewport">
          <div className="figma-reviews__rail">
            {REVIEWS.map((review, index) => (
              <article className={`figma-review-card figma-review-card--${index + 1}`} key={review.name}>
                <img
                  className="figma-review-card__stars"
                  src={DOWNLOAD_ASSETS.reviewStars}
                  alt="Four stars"
                />
                <blockquote>{review.quote}</blockquote>
                <div className="figma-review-card__person">
                  <span className="figma-review-card__avatar" aria-hidden>
                    <Icon name="profile" />
                  </span>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Button
          className="figma-reviews__cta"
          label="Download the app"
          variant="primary"
          size="large"
          onClick={() => navigate('/download')}
        />
      </ThemeScope>

      <SiteFooter />
    </main>
  )
}
