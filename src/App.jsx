import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import { RecalibrationPage } from './pages/RecalibrationPage.jsx'
import { DandelionPage } from './pages/DandelionPage.jsx'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle, { passive: true })
    toggle()
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  if (!visible) return null

  return <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">↑</button>
}

function ServicePageScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.startsWith('/servicos/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ServicePageScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/recalibracao" element={<RecalibrationPage />} />
        <Route path="/servicos/dente-de-leao" element={<DandelionPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
