import Router from 'express';
import adminController from '../controllers/adminController.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
const router = new Router();

router.get('/users', roleMiddleware(['ADMIN']), adminController.getUsers);

export default router;
