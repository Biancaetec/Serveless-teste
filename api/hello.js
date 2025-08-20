export default function handler(res,req) {
    const nome = req.query.nome || "mundo";
    res.status(200).json({ mensagem: `Olá, ${nome}!` });
}