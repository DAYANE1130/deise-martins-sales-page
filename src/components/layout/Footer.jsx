import { links } from '../../config/links.js'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <p>© {new Date().getFullYear()} Deise Martins. Todos os direitos reservados.</p>
        <nav aria-label="Redes sociais">
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={links.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </nav>
      </div>
    </footer>
  )
}
