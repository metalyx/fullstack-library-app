import User from '../models/User.js';
import Role from '../models/Role.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    };

    return jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: '24h',
    });
};

class authController {
    async registration(req, res) {
        try {
            // Get errors from validation middleware
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Validation errors',
                    ...errors,
                });
            }

            let { username, password, roles } = req.body;

            const candidate = await User.findOne({ username });

            if (candidate) {
                return res.status(400).json({
                    message: 'User with this username already exists',
                });
            }

            // if roles array has not been provided -> set default value as USER
            if (!Array.isArray(roles) || roles.length === 0) {
                roles = ['USER'];
            }

            const hashedPassword = bcrypt.hashSync(password, 7);

            const searchRoles = roles.map((role) => ({
                value: role,
            }));

            const promises = searchRoles.map(async (role) => {
                const currentRole = await Role.find(role);

                return currentRole[0].value;
            });

            const userRoles = await Promise.all(promises);

            const user = new User({
                username,
                password: hashedPassword,
                roles: userRoles,
            });

            await user.save();

            res.status(201).json({ message: 'User successfully created.' });
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration error' });
        }
    }
    async login(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Validation errors',
                    ...errors,
                });
            }

            const { username, password } = req.body;

            const user = await User.findOne({ username });

            if (!user) {
                return res.status(400).json({
                    message: `User with username ${username} was not found.`,
                });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: 'Invalid password.' });
            }

            const token = generateAccessToken(user._id, user.roles);

            return res.json({ token });
        } catch (e) {
            res.status(400).json({ message: 'Login error' });
        }
    }
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json({ message: 'getUsers error' });
        }
    }
    async checkToken(req, res) {
        try {
            let token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                return res
                    .status(401)
                    .json({ error: 'Token was not provided' });
            }

            const verify = jwt.verify(token, process.env.SECRET_JWT);

            res.status(200).json({
                ...verify,
            });
        } catch (e) {
            res.status(401).json({ ...e });
        }
    }
    async getUserInfo(req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'No token' });
            }

            const { id } = jwt.verify(token, process.env.SECRET_JWT);

            const userInfo = await User.findById(id).select(
                'username roles booked'
            );

            res.status(200).json(userInfo);
        } catch (e) {
            return res.status(500).json({ message: 'Error occured', ...e });
        }
    }
}

export default new authController();
