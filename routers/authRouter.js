import Router from 'express';
const router = new Router();
import authController from '../controllers/authController.js';
import { check } from 'express-validator';
import authMiddleware from '../middleware/authMiddleware.js';

router.post(
    '/registration',
    [
        check('username', 'Username cannot be empty').notEmpty(),
        check(
            'password',
            'Password cannot be less than 4 characters length'
        ).isLength({ min: 4 }),
        roleMiddleware(['ADMIN']),
    ],
    authController.registration
);
router.post(
    '/login',
    [check('username', 'Username cannot be empty').notEmpty()],
    authController.login
);

router.get('/checkToken', authController.checkToken);

router.get('/getUserInfo', authMiddleware, authController.getUserInfo);

export default router;
