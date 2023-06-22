import Router from 'express';
import adminController from '../controllers/adminController.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
const router = new Router();

router.get('/users', roleMiddleware(['ADMIN']), adminController.getUsers);
router.delete(
    '/user/:id',
    roleMiddleware(['ADMIN']),
    adminController.deleteUserById
);

export default router;
