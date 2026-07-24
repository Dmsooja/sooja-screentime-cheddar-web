import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AppDownloadPage from './pages/AppDownloadPage'
import HomePage from './pages/HomePage'

function RouteEffects() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
        return
      }
      window.scrollTo({ top: 0 })
    })
  }, [hash, pathname])

  return null
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<AppDownloadPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
