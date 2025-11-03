import toast from "react-hot-toast"

export async function enviaForm(e) {
    e.preventDefault()

    const { nome, email, mensagem } = e.target.elements;

    const data = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value
    }

    const envio = toast.loading("Enviando sua mensagem...")
    try {
        const req = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
        })

        if(!req.ok) throw new Error();

        toast.success("Mensagem enviada com sucesso!", { id: envio })
        e.target.reset();
    } catch {
        toast.error("Erro ao enviar sua mensagem", { id: envio })
    }
    
}