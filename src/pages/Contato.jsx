import "./Contato.css"

export default function Contato() {
  return (
    <main className="contact">
      <div className="contact-container">
        <h1>Entrar em contato 📬</h1>
        <p>Fique à vontade para enviar uma mensagem. Retornarei o mais breve possível!</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Seu nome" required /> 
          </div>
          <div className="form-group">
            <input type="email" placeholder="Seu e-mail" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Sua mensagem" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Enviar mensagem</button>
        </form>
      </div>
    </main>
  )
}
