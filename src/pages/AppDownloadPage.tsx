import { Button, ThemeScope } from '@screentime/cheddar-ds'
import { useEffect, useRef } from 'react'
import { APP_DOWNLOAD_ASSETS, AppDownloadHeroShape, AppUpdateBlob } from '../assets'
import { IconButton } from '../components/IconButton'
import { MarketingNav, SiteFooter } from '../components/MarketingLayout'

const UPDATES = [
  {
    image: APP_DOWNLOAD_ASSETS.spend,
    title: 'Smart spending overview',
    description: 'See where your money goes — clear categories, real-time totals.',
  },
  {
    image: APP_DOWNLOAD_ASSETS.chart,
    title: 'Interactive insights',
    description: 'Explore your spending with dynamic, visual breakdowns.',
  },
  {
    image: APP_DOWNLOAD_ASSETS.piggy,
    title: 'Custom saver profiles',
    description: 'Personalize your experience with avatars and streak identities.',
  },
  {
    image: APP_DOWNLOAD_ASSETS.wallet,
    title: 'Digital wallet access',
    description: 'Save, transfer, and track funds — all in one secure place.',
  },
] as const

function openStore(store: 'apple' | 'google') {
  const url =
    store === 'apple'
      ? 'https://apps.apple.com/us/genre/ios/id36'
      : 'https://play.google.com/store/apps'
  window.location.assign(url)
}

export default function AppDownloadPage() {
  const updatesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'Cheddar — Download the app'
  }, [])

  const scrollUpdates = (direction: -1 | 1) => {
    updatesRef.current?.scrollBy({
      left: direction * Math.min(420, window.innerWidth * 0.8),
      behavior: 'smooth',
    })
  }

  return (
    <main className="marketing-page app-download-page">
      <ThemeScope brand="green" as="header" className="app-download-hero">
        <AppDownloadHeroShape className="app-download-hero__shape" />
        <MarketingNav tone="green" />
        <div className="app-download-hero__objects" aria-hidden>
          <img className="app-download-hero__headphones" src={APP_DOWNLOAD_ASSETS.headphones} alt="" />
          <img className="app-download-hero__camera" src={APP_DOWNLOAD_ASSETS.camera} alt="" />
          <img className="app-download-hero__skateboard" src={APP_DOWNLOAD_ASSETS.skateboard} alt="" />
          <img className="app-download-hero__sneaker" src={APP_DOWNLOAD_ASSETS.sneaker} alt="" />
        </div>
        <div className="app-download-hero__content">
          <h1>Download the app</h1>
          <p>
            Download Cheddar and start saving in minutes. Watch your progress grow, unlock
            milestones, and build habits that stick.
          </p>
          <div className="app-download-hero__actions">
            <Button
              className="app-download-hero__button"
              label="Get it on iPhone"
              variant="primary"
              size="large"
              onClick={() => openStore('apple')}
            />
            <Button
              className="app-download-hero__button"
              label="Get it on Android"
              variant="primary"
              size="large"
              onClick={() => openStore('google')}
            />
          </div>
        </div>
      </ThemeScope>

      <section className="app-updates" aria-labelledby="app-updates-title">
        <div className="app-updates__head">
          <h2 id="app-updates-title">Latest updates</h2>
          <div className="app-updates__controls" aria-label="Browse updates">
            <IconButton
              icon="arrow-left"
              label="Previous updates"
              tone="magenta"
              onClick={() => scrollUpdates(-1)}
            />
            <IconButton
              icon="arrow-right"
              label="Next updates"
              tone="magenta"
              onClick={() => scrollUpdates(1)}
            />
          </div>
        </div>
        <div className="app-updates__grid" ref={updatesRef}>
          {UPDATES.map((update) => (
            <article className="app-update-card" key={update.title}>
              <div className="app-update-card__art">
                <AppUpdateBlob className="app-update-card__blob" />
                <img src={update.image} alt="" aria-hidden />
              </div>
              <h3>{update.title}</h3>
              <p>{update.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
