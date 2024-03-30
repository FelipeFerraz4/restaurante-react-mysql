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