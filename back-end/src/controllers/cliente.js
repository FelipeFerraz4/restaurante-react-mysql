import { db } from '../../db.js';

export const getClientes = (req, res) => {
    try {
        const query = 'SELECT * FROM cliente';

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

export const getNameClient = (req, res) => {
    try {
        const query = 'Select cliente.id, pessoas.nome FROM restaurant.cliente INNER JOIN restaurant.pessoas ON cliente.id = pessoas.id;';

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