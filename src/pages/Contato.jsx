import "./Contato.css"
import { enviaForm } from "../components/Contato"

export default function Contato() {
  return (
    <main className="contact">
      <div className="contact-container">
        <h1>Entrar em contato 📬</h1>
        <p>Fique à vontade para enviar uma mensagem. Retornarei o mais breve possível!</p>

        <form className="contact-form" onSubmit={enviaForm}>
          <div className="form-group">
            <input name="nome" type="text" placeholder="Seu nome" required /> 
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Seu e-mail" required />
          </div>
          <div className="form-group">
            <textarea name="mensagem" type="text" placeholder="Sua mensagem" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Enviar mensagem</button>
        </form>
      </div>
    </main>
  )
}
