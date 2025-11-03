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
          Sou desenvolvedor full-stack, sempre em busca de aprender e evoluir como profissional. Atuo no desenvolvimento de aplicações Web e Desktop utilizando <strong>JavaScript, Node.js, React, Vue.js, Python e C#</strong>, com experiência tanto no frontend quanto no backend. <br/><br/>

          Tenho experiência com <strong>APIs REST</strong>, <strong>arquitetura moderna</strong>, versionamento com <strong>Git</strong>, metodologias ágeis como <strong>Scrum</strong> e deploy em <strong>Google Cloud</strong>. <br/><br/>

          Meu objetivo é contruir soluções eficiente com foco em código limpo, boa lógica e performance, sempre aprendendo e melhorando a cada projeto.
        </p>
        
        <Link to="/projetos" className="home-btn">Ver meus projetos</Link>
        </div>
      </div>
    </main>
  )
}
