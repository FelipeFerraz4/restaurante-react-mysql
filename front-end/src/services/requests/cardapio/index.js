import db from '../../db.js';

export async function getItemCardapios() {
    try {
        const res = await db.get('/api/itemCardapio');
        return res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function newItemCardapios(itemCardapio) {
    try {
        console.log(itemCardapio);
        const res = await db.post('/api/itemCardapio', itemCardapio);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return 'Erro NewItemCardapio';
    }
}
export async function updateItemCardapios(item, id) {
    try {
        const res = await db.put(`/api/itemCardapio/${id}`, item);
        console.log(res);
        // return res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        console.log(error);
        return []
    }
}
export async function deleteItemCardapios() {
    try {
        const res = await db.get('/api/itemCardapio');
        console.log(res);
        return res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        console.log(error);
        return []
    }
}
