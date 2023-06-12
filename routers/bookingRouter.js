import Router from 'express';
import bookingController from '../controllers/bookingController.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
const router = new Router();

router.post(
    '/create',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.createBooking
);
router.get(
    '/',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.getAllBookings
);
router.post(
    '/cancell',
    roleMiddleware(['ADMIN', 'LIBRARIAN']),
    bookingController.cancellBooking
);

export default router;
