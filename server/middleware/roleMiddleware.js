import { verify } from 'jsonwebtoken';

export default function (roles) {
    return function (req, res, next) {
        if (res.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            const { roles: userRoles } = verify(token, process.env.SECRET_JWT);
            let hasRole = false;
            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                return res.status(403).json({
                    message: `User with this user role cannot access the data. Current user's roles are [${[
                        userRoles.join(', '),
                    ]}]`,
                });
            }

            next();
        } catch (e) {
            return res.status(403).json({ message: 'Unauthorized 123' });
        }
    };
}
