import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/api/books', bookController.getBooks);
//router.post('/api/books', bookController.createBook);
//router.put('/api/books/:id', bookController.updateBook);
//router.delete('/api/books/:id', bookController.deleteBook);

export default router;
