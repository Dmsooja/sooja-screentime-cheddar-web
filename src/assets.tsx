export const DOWNLOAD_ASSETS = {
  heroShape: '/assets/download/home-hero-shape.svg',
  heroPhoneFront: '/assets/download/hero-phone-front.png',
  heroPhoneBack: '/assets/download/hero-phone-back.png',
  heroCoin: '/assets/download/hero-coin.png',
  screens: [
    '/assets/download/screen-goal.png',
    '/assets/download/screen-detail.png',
    '/assets/download/screen-progress.png',
  ],
  piggyBank: '/assets/download/piggy-bank.png',
  reviewShapes: '/assets/download/reviews-shapes.svg',
  reviewStars: '/assets/download/review-stars.svg',
} as const

export const SHARED_ASSETS = {
  footerShape: '/assets/shared/footer-shape.svg',
} as const

export const ABOUT_ASSETS = {
  sparkle: '/assets/about/sparkle-transparent.png',
  heroWave: '/assets/about/hero-wave.svg',
  valueShapes: [
    '/assets/about/value-shape-green.svg',
    '/assets/about/value-shape-magenta.svg',
    '/assets/about/value-shape-blue.svg',
  ],
  timelineShapeBottom: '/assets/about/timeline-shape-bottom.svg',
  timelineShapeTop: '/assets/about/timeline-shape-top.svg',
  timelineNode: '/assets/about/timeline-node.svg',
  timelineArrow: '/assets/about/timeline-arrow.svg',
  timelineDivider: '/assets/about/timeline-divider.svg',
} as const

export const APP_DOWNLOAD_ASSETS = {
  headphones: '/assets/headphones.png',
  camera: '/assets/camera.png',
  sneaker: '/assets/sneaker.png',
  skateboard: '/assets/skateboard.png',
  spend: '/assets/spend.png',
  chart: '/assets/chart.png',
  wallet: '/assets/wallet.png',
  piggy: '/assets/piggy.png',
} as const

export function AppDownloadHeroShape({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 920"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="var(--token-color-green-600)"
        d="M1268.02 156.296C1601.33 221.032 1601.33 697.968 1268.02 762.704C1144.39 786.716 1047.72 883.387 1023.7 1007.02C958.968 1340.33 482.032 1340.33 417.296 1007.02C393.284 883.387 296.613 786.716 172.981 762.704C-160.327 697.968 -160.327 221.032 172.981 156.296C296.613 132.284 393.284 35.6131 417.296 -88.019C482.032 -421.327 958.968 -421.327 1023.7 -88.019C1047.72 35.6131 1144.39 132.284 1268.02 156.296Z"
      />
    </svg>
  )
}

export function AppUpdateBlob({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-32 -32 375 375"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="var(--token-color-brand-500)"
        d="M196.624 13.12C263.327 -31.8868 343.251 48.0371 298.244 114.74C281.55 139.482 281.55 171.882 298.244 196.624C343.251 263.327 263.327 343.251 196.624 298.244C171.882 281.55 139.482 281.55 114.74 298.244C48.0371 343.251 -31.8868 263.327 13.12 196.624C29.8141 171.882 29.8141 139.482 13.12 114.74C-31.8867 48.0371 48.0372 -31.8868 114.74 13.12C139.482 29.8141 171.882 29.8141 196.624 13.12Z"
      />
    </svg>
  )
}
