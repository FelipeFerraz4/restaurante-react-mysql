import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import itemCardapioRouter from './src/routes/cardapio.js';
import clienteRouter from './src/routes/clientes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/cliente', clienteRouter);
app.use('/api/itemCardapio', itemCardapioRouter);

app.listen(process.env.REACT_APP_SERVER_PORT);