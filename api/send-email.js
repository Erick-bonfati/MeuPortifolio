import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" })
  }

  const { nome, email, mensagem } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem do portfólio - ${nome}`,
      html: `
        <h3>Nova mensagem recebida</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ success: false })
  }
}
