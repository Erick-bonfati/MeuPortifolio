import { useParams, Link } from "react-router-dom"
import { projects  } from "../data/projects"
import "./Projetos.css"

export default function ProjetoDetalhe() {
    const { slug } = useParams();
    const projeto = projects.find(projeto => projeto.slug === slug)

    if(!projeto) {
        return (
            <main className="container">
             <h1 className="title">Projeto não encontrado</h1>
            <Link to="/projetos" className="btn">Voltar</Link>
      </main>
        )
    }

    return (
        <main className="container">
            <h1 className="title">{projeto.titulo}</h1>
            <img src={projeto.imagem} alt={projeto.titulo} className="detail-img" />
            <p className="detail-texto">{projeto.conteudo}</p>
            {projeto.links && projeto.links.length > 0 && (
                <div>
                    <h3>Links úteis:</h3>
                    {projeto.links.map((link, i) => (
                        <p key={i}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.label}
                            </a>
                        </p>
                    ))}
                </div>
            )}
            <Link to="/projetos" className="btn">Voltar</Link>
        </main>
    )
}