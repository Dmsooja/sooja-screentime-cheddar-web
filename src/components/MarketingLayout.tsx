import { Logo, ThemeScope, Wordmark } from '@screentime/cheddar-ds'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SHARED_ASSETS } from '../assets'
import { IconButton } from './IconButton'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
] as const

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Download', href: '/download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/about#careers' },
      { label: 'Contact', href: 'mailto:hello@cheddar.com' },
    ],
  },
] as const

type MarketingNavProps = {
  tone: 'blue' | 'green' | 'purple'
}

export function MarketingNav({ tone }: MarketingNavProps) {
  return (
    <nav className={`marketing-nav marketing-nav--${tone}`} aria-label="Primary navigation">
      <Link className="marketing-nav__brand" to="/" aria-label="Cheddar home">
        <Wordmark />
      </Link>
      <ul className="marketing-nav__links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Link className="marketing-nav__download" to="/download">
            Download <span aria-hidden>➜</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubscribed(true)
  }

  return (
    <ThemeScope brand="purple" scheme="dark" as="footer" className="site-footer">
      <img className="site-footer__shape" src={SHARED_ASSETS.footerShape} alt="" aria-hidden />
      <div className="site-footer__inner">
        <div className="site-footer__subscribe" id="newsletter">
          <p aria-live="polite">{subscribed ? 'Thanks — you’re on the list.' : 'Stay up to date'}</p>
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input id="footer-email" type="email" placeholder="name@email.com" />
            <IconButton icon="arrow-right" label="Subscribe" type="submit" />
          </form>
        </div>

        <div className="site-footer__logo" aria-hidden>
          <Logo />
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p>{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="site-footer__legal">
        <Link to="/" aria-label="Cheddar home">
          <Wordmark />
        </Link>
        <span>All rights reserved</span>
      </div>
    </ThemeScope>
  )
}
