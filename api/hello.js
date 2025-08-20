export default function handle (res,req) {
    const nome = req.query.nome || 'Mundo';
    req.status(200).json({ message: `Olá, ${nome}!` });
}