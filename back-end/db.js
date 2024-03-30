import mysql from 'mysql';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from './exemploEnv.js';

// export const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysqlroot',
//     database: 'restaurante'
// });

export const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});
// export const db = mysql.createConnection({
//     host: process.env.REACT_APP_HOST,
//     user: process.env.REACT_APP_USER,
//     password: process.env.REACT_APP_PASSWORD,
//     database: process.env.REACT_APP_DATABASE
// });
// export const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        // Lide com o erro de conexão de forma adequada
    } else {
        console.log('Conexão bem sucedida ao banco de dados');
    }
});