import "./Home.css"
import { Link } from "react-router-dom"
 
export default function Home() {
  return (
    <main className="home">
      <div className="home-container">
        <div className="home-image">
          <img
            src="/image.jpeg"
            alt="Erick Bonfati"
          />
        </div>
        <div className="home-text">
          <h1>Erick Bonfati</h1>
          <p>
            Sou desenvolvedor fullstack em constante aprendizado e com muita vontade de aprender. 
            Trabalho com tecnologias como JavaScript,
            Node.js, React, VueJs, Python e C#, desenvolvendo tanto o frontend quanto o backend
            de aplicações.
            Também possuo expertisse em criação de servidores em Nuvem com Google Cloud.
          </p>
          <Link to="/projetos" className="home-btn">Ver meus projetos</Link>
        </div>
      </div>
    </main>
  )
}
