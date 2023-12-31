import { verify } from 'jsonwebtoken';

export default function (req, res, next) {
    if (res.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const decodedData = verify(token, process.env.SECRET_JWT);
        req.user = decodedData;
        next();
    } catch (e) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
}
