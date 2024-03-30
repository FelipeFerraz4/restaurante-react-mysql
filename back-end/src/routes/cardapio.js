import express from 'express';
import { getItemCardapios } from '../controllers/cardapio.js';

const router = express.Router()

router.get('/', getItemCardapios);

export default router;