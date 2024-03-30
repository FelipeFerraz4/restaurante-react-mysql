import db from '../../db.js';

export async function getClientes() {
    try {
        const res = await db.get('/');
        return res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        console.log(error);
        return []
    }
}