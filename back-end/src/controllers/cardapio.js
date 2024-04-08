import { db } from '../../db.js';

export const getItemCardapios = (req, res) => {
    try {
        const query = 'SELECT * FROM itemcardapio';

        db.query(query, (err, data) => {
            if(err){
                return res.json(err);
            }
            return res.status(200).json(data);
        })
    } catch (error) {
        console.log(error)
    }
}

export async function addItemCardapio(req, res) {
    try {
        const query = 'INSERT INTO itemcardapio(`nome`, `valor`, `categoria`, `status`, `descricao`) VALUES(?, ?, ?, ?, ?)';

        const values = [
            req.body.name,
            req.body.price,
            req.body.category,
            req.body.status,
            req.body.description
        ];

        db.query(query, [...values], (err) => {
            if(err){
                console.log(err);
                return res.json(err);
            }
            return res.status(201).json("item adicionado com sucesso");
        })
    } catch (error) {
        console.log(error)
    }
}

export async function updateItemCardapio(req, res) {
    try {
        console.log(req.body);
        console.log(req.params.id);
        const query = 'UPDATE itemcardapio SET `nome` = ?, `valor` = ?, `categoria` = ?, `status` = ?, `descricao` = ? WHERE `idItemCardapio` = ?';

        const values = [
            req.body.name,
            req.body.price,
            req.body.category,
            req.body.status,
            req.body.description
        ];

        db.query(query, [...values, req.params.id], (err) => {
            if(err){
                return res.json(err);
            }
            return res.status(201).json("item atualizado com sucesso");
        })
    } catch (error) {
        console.log(error)
    }    
}

export async function deleteItemCardapio(req, res) {
    try {
        const query = 'DELETE FROM itemcardapio WHERE `idItemCardapio` = ?';

        db.query(query, [req.params.id], (err) => {
            if(err){
                return res.json(err);
            }
            return res.status(200).json("item deletado com sucesso");
        })
    } catch (error) {
        console.log(error)
    }    
}