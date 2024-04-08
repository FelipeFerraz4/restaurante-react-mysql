import express from 'express';
import { getClientes, getNameClient } from '../controllers/cliente.js';

const router = express.Router()

router.get('/', getClientes);
router.get('/name', getNameClient);

export default router;