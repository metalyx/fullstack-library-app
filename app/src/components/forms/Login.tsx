import { useAppSelector } from '../../hooks/redux';
import { Navigate, redirect } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from './LoginForm';
import { Typography } from '@mui/material';

interface iLogin {
    registration?: boolean;
    successReg?: boolean;
}

const Login: React.FC<iLogin> = ({ registration, successReg }) => {
    const { isLoggedIn } = useAppSelector((state) => state.userReducer);

    useEffect(() => {
        if (isLoggedIn) {
            redirect('/');
        }
    }, []);

    return (
        <>
            {!isLoggedIn && (
                <div>
                    {!registration && (
                        <Typography
                            variant='h3'
                            component='h1'
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Library login
                        </Typography>
                    )}
                    {registration && (
                        <Typography
                            variant='h3'
                            component='h1'
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Registration
                        </Typography>
                    )}
                    <LoginForm
                        registration={registration}
                        successReg={successReg}
                    />
                </div>
            )}
            {isLoggedIn && (
                <Navigate
                    to='/'
                    replace
                />
            )}
        </>
    );
};

export default Login;
