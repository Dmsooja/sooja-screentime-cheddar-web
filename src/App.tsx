import { Icon } from '@screentime/cheddar-ds'
import type { IconName } from '@screentime/cheddar-ds'
import { CHROME, CardBlob, FooterShape, HeroShape, Wordmark } from './assets'

const NAV_LINKS = ['Features', 'Resources', 'Reviews'] as const

type Update = {
  image?: string
  imageClass?: string
  title: string
  description: string
}

const UPDATES: Update[] = [
  {
    image: CHROME.spend,
    imageClass: 'card__obj card__obj--spend',
    title: 'Smart spending overview',
    description: 'See where your money goes — clear categories, real-time totals.',
  },
  {
    image: CHROME.chart,
    imageClass: 'card__obj card__obj--chart',
    title: 'Interactive insights',
    description: 'Explore your spending with dynamic, visual breakdowns.',
  },
  {
    image: CHROME.piggy,
    imageClass: 'card__obj card__obj--piggy',
    title: 'Custom saver profiles',
    description: 'Personalize your experience with avatars and streak identities.',
  },
  {
    image: CHROME.wallet,
    imageClass: 'card__obj card__obj--wallet',
    title: 'Digital wallet access',
    description: 'Save, transfer, and track funds — all in one secure place.',
  },
]

const FOOTER_COLUMNS = [
  { title: 'Product', links: ['Features', 'How it works', 'Pricing', 'FAQs'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
]

function Hero() {
  return (
    <header className="hero">
      <HeroShape className="hero__shape" />

      <div className="hero__objects" aria-hidden>
        <img className="hero__obj hero__obj--headphones" src={CHROME.headphones} alt="" />
        <img className="hero__obj hero__obj--camera" src={CHROME.camera} alt="" />
        <img className="hero__obj hero__obj--skateboard" src={CHROME.skateboard} alt="" />
        <img className="hero__obj hero__obj--sneaker" src={CHROME.sneaker} alt="" />
      </div>

      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#" aria-label="Cheddar home">
          <Wordmark className="nav__wordmark" />
        </a>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a className="nav__link" href="#">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a className="nav__link nav__link--dropdown" href="#">
              Download
              <Icon name="caret-down" className="nav__caret" aria-hidden />
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Download the app</h1>
          <p className="hero__subtitle">
            Download Cheddar and start saving in minutes. Watch your progress grow, unlock
            milestones, and build habits that stick.
          </p>
        </div>
        <div className="hero__buttons">
          <button className="app-button" type="button">
            Get it on iPhone
          </button>
          <button className="app-button" type="button">
            Get it on Android
          </button>
        </div>
      </div>
    </header>
  )
}

function Updates() {
  const arrows: { icon: IconName; label: string }[] = [
    { icon: 'arrow-left', label: 'Previous updates' },
    { icon: 'arrow-right', label: 'Next updates' },
  ]

  return (
    <section className="updates" aria-labelledby="updates-title">
      <div className="updates__head">
        <h2 className="updates__title" id="updates-title">
          Latest updates
        </h2>
        <div className="updates__arrows">
          {arrows.map((arrow) => (
            <button className="arrow-button" type="button" key={arrow.icon} aria-label={arrow.label}>
              <Icon name={arrow.icon} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <div className="updates__cards">
        {UPDATES.map((update) => (
          <article className="card" key={update.title}>
            <div className="card__asset">
              <CardBlob className="card__blob" />
              {update.image ? (
                <img className={update.imageClass} src={update.image} alt="" aria-hidden />
              ) : null}
            </div>
            <div className="card__text">
              <h3 className="card__title">{update.title}</h3>
              <p className="card__desc">{update.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="footer">
      <FooterShape className="footer__shape" />
      <div className="footer__inner">
        <div className="footer__subscribe">
          <p className="footer__subscribe-label">Stay up to date</p>
          <form className="subscribe" onSubmit={(event) => event.preventDefault()}>
            <input
              className="subscribe__input"
              type="email"
              placeholder="name@email.com"
              aria-label="Email address"
            />
            <button className="subscribe__button" type="submit" aria-label="Subscribe">
              <Icon name="arrow-right" aria-hidden />
            </button>
          </form>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer__col" key={column.title}>
              <p className="footer__col-title">{column.title}</p>
              <ul className="footer__col-list">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="footer__link" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Updates />
      <SiteFooter />
    </div>
  )
}
