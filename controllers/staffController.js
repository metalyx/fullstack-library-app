import Booking from '../models/Booking.js';
import User from '../models/User.js';

class staffController {
    async getUsers(req, res) {
        try {
            const users = await User.find().select('username roles bookings');

            const depthUsersPromises = users.map(async (user) => {
                const promises = user.bookings.map(async (bookingId) => {
                    const booking = await Booking.findById(bookingId);
                    return booking;
                });

                const bookings = await Promise.all(promises);
                return {
                    ...user._doc,
                    bookings,
                };
            });

            const depthUsers = await Promise.all(depthUsersPromises);

            res.status(200).json(depthUsers);
        } catch (e) {
            res.status(400).json({ message: 'getUsers error' });
        }
    }
}

export default new staffController();
