import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../../config/links.js'
import { Button } from '../ui/Button.jsx'

const navigation = [
  ['Atendimentos', '/#atendimentos'],
  ['Sobre Deise', '/#sobre'],
  ['Grupo VIP', '/#grupo-vip'],
  ['Dúvidas', '/#duvidas'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__content">
        <Link className="brand" to="/#inicio" aria-label="Deise Martins — voltar ao início">Deise Martins - Mestra Espiritual</Link>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation">
          <span className="sr-only">{open ? 'Fechar' : 'Abrir'} menu</span><span aria-hidden="true">☰</span>
        </button>
        {/* <nav className={`site-navigation ${open ? 'site-navigation--open' : ''}`} id="main-navigation" aria-label="Navegação principal">
          {navigation.map(([label, to]) => <Link to={to} key={to} onClick={() => setOpen(false)}>{label}</Link>)}
          <Button href={whatsappLink('Olá! Gostaria de agendar um atendimento e receber mais informações.')} className="header-cta" target="_blank" rel="noreferrer">Agendar</Button>
        </nav> */}
      </div>
    </header>
  )
}
