import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-area">

        {/* Logo / nome */}
        <div className="logo">Erick.dev</div>

        {/* Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>

        {/* Redes sociais */}
        <div className="header-social">
          <a href="https://www.linkedin.com/in/erick-bonfati" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/erick-bonfati" target="_blank">
            <img src="/icons/github.svg" alt="GitHub"/>
          </a>
          <a href="/Curriculo-Erick-Bonfati-FullStack.pdf" download>
            <img src="/icons/curriculo.svg" alt="Currículo"/>
          </a>
        </div>

      </nav>
    </header>
  )
}
