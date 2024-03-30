import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import clienteRouter from './src/routes/clientes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', clienteRouter);

app.listen(process.env.REACT_APP_SERVER_PORT);