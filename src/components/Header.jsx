import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li className="li-links"><Link to="/">Home</Link></li>
          <li className="li-links"><Link to="/projetos">Projetos</Link></li>           
          <li className="li-links"><Link to="/contato">Contato</Link></li> 
        </ul>
      </nav>  
    </header>
  )
}