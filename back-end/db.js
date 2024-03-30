import mysql from 'mysql';

export const db = mysql.createConnection({
    host: process.env.REACT_APP_DB_HOST,
    user: process.env.REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: process.env.REACT_APP_DB_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        // Lide com o erro de conexão de forma adequada
    } else {
        console.log('Conexão bem sucedida ao banco de dados');
    }
});