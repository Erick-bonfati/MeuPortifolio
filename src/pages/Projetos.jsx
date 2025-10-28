import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projetos.css";

export default function Projetos() {
  return (
    <main className="container">
      <h1 className="title">Meus Projetos</h1>
      <section className="grid">
        {projects.map(p => (
          <article key={p.id} className="card">
            <h2 className="card-title">{p.titulo}</h2>
            <img src={p.imagem} alt={p.titulo} className="card-img" />
            <p className="card-resumo">{p.resumo}</p>
            <Link to={`/projetos/${p.slug}`} className="btn">
              Continuar lendo
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}