import User from '../models/User.js';

class staffController {
    async getUsers(req, res) {
        try {
            const users = await User.find().select('username roles bookings');
            res.status(200).json(users);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'getUsers error' });
        }
    }
}

export default new staffController();
