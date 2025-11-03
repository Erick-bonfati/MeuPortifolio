import express from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.post("/send-email", async (req, res) => {
    const { nome, email, mensagem } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `NOVA MENSAGEM DE SEU PORTIFÓLIO: ${nome}`,
            html: `
                <h3>Nova mensagem recebida do seu portofólio!</h3>
                <p><strong>Nome: </strong> ${nome} </p>
                <p><strong>Email: </strong> ${email} </p>
                <p><strong>Mensagem: </strong> ${mensagem} </p>
                `
        })

        res.json({ success: true })
    } catch(erro) {
        res.status(500).json({ success: false })
    }
})

app.listen(4000, () => console.log("Servidor executando na porta 4000"))