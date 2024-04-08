import express from 'express';
import { addItemCardapio, deleteItemCardapio, getItemCardapios, getItemPreferred, updateItemCardapio } from '../controllers/cardapio.js';

const router = express.Router()

router.get('/', getItemCardapios);
router.post('/', addItemCardapio);
router.put('/:id', updateItemCardapio);
router.delete('/:id', deleteItemCardapio);
router.get('/preferred', getItemPreferred);

export default router;