import db from '../../db.js';

export async function getClientes() {
    try {
        const res = await db.get('/api/cliente');
        console.log(res);
        return res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function getClienteName() {
    try {
        const res = await db.get('/api/cliente/name');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}