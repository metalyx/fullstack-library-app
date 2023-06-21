import Router from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import booksController from '../controllers/booksController.js';

const router = new Router();

router.get('/', authMiddleware, booksController.getAllBooks);
router.get('/available', booksController.getAvailableBooks);
router.post(
    '/',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    booksController.createBook
);

export default router;
