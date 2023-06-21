import Router from 'express';
import staffController from '../controllers/staffController.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
const router = new Router();

router.get(
    '/users',
    roleMiddleware(['LIBRARIAN', 'ADMIN']),
    staffController.getUsers
);

export default router;
