import User from '../models/User.js';

class adminController {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json({ message: 'getUsers error' });
        }
    }

    async deleteUserById(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    message: 'User ID to be deleted was not provided in params',
                });
            }

            const user = await User.findByIdAndDelete(id).select(
                'username roles bookings'
            );

            res.status(200).json(user);
        } catch (e) {
            res.status(500).json({
                message: 'Something went wrong',
                ...e,
            });
        }
    }
}

export default new adminController();
