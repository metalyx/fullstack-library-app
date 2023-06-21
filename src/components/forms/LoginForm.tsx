import React, { useEffect, useState } from 'react';
import { userSlice } from '../../store/reducers/UserSlice';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import { setToken } from '../../utils/Axios';
import ErrorSpan from '../error-span/ErrorSpan';
import { Box, Button, TextField } from '@mui/material';
import Loader from '../loader/Loader';
import { LoadingButton } from '@mui/lab';

interface iErrors {
    login: string;
    password: string;
    invalidCredentials: string;
}

interface iLoginForm {
    registration?: boolean;
    successReg?: boolean;
}

const LoginForm: React.FC<iLoginForm> = ({ registration, successReg }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<iErrors>({
        login: '',
        password: '',
        invalidCredentials: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const { logIn } = userSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const checkUsername = () => {
        if (login.trim().length <= 0) {
            setErrors((prevState: iErrors) => ({
                ...prevState,
                login: 'Username cannot be empty',
            }));
            return true;
        } else {
            setErrors((prevState: iErrors) => ({
                ...prevState,
                login: '',
            }));
        }
    };

    const checkPassword = () => {
        if (password.length <= 3) {
            setErrors((prevState: iErrors) => ({
                ...prevState,
                password: 'Password cannot be less than 4 characters',
            }));

            return true;
        } else {
            setErrors((prevState: iErrors) => ({
                ...prevState,
                password: '',
            }));
        }
    };

    const isValidForm = (): boolean => {
        let isInvalid = false;

        if (checkUsername()) {
            isInvalid = true;
        }

        if (checkPassword()) {
            isInvalid = true;
        }

        if (isInvalid) {
            return false;
        }

        return true;
    };

    const signIn = async () => {
        const isValid = isValidForm();

        if (!isValid) {
            return;
        }

        if (errors.login.length > 0 || errors.password.length > 0) {
            return;
        } else {
            setIsLoading(true);
            await serverLogin();
            setIsLoading(false);
        }
    };

    const handleRegister = async () => {
        const isValid = isValidForm();

        if (!isValid) {
            return;
        }

        if (errors.login.length > 0 || errors.password.length > 0) {
            return;
        } else {
            setIsLoading(true);
            await serverRegistration();
            setIsLoading(false);
        }
    };

    const serverRegistration = async () => {
        try {
            const response = await axios.post(
                `${BASE_URL}api/auth/registration`,
                {
                    username: login,
                    password,
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                setErrors({
                    invalidCredentials: '',
                    login: '',
                    password: '',
                });
                return navigate('/registrationSuccess');
            }
        } catch (e: any) {
            setErrors({
                ...errors,
                invalidCredentials: e.response.data.message,
            });
        }
    };

    const serverLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}api/auth/login`, {
                username: login,
                password,
            });

            if (response.status >= 400 && response.status < 500) {
                setErrors({
                    ...errors,
                    invalidCredentials: 'Invalid login or password',
                });
            } else if (response.status > 500) {
                setErrors({
                    ...errors,
                    invalidCredentials:
                        'Server error, please try again later...',
                });
            } else {
                unsetErrors();

                const token = response.data.token;

                setToken(token);
                window.localStorage.setItem('token', token);

                dispatch(logIn());
            }
        } catch (e: any) {
            setErrors({
                ...errors,
                invalidCredentials: e.response?.data?.message,
            });
        }
    };

    const handleNeedAccount = () => {
        return navigate('/registration');
    };

    const handleBackToLogin = () => {
        return navigate('/login');
    };

    const unsetErrors = () => {
        setErrors({
            invalidCredentials: '',
            login: '',
            password: '',
        });
    };

    useEffect(() => {
        unsetErrors();
    }, [registration, successReg]);

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                {successReg && (
                    <div className='text-white p-2 bg-green-600 mt-4'>
                        Successful registration
                    </div>
                )}
                <div className='flex gap-4 my-6 justify-center'>
                    <div className='flex flex-col gap-2'>
                        <TextField
                            label='Username'
                            variant='outlined'
                            id='loginField'
                            type='text'
                            onBlur={checkUsername}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            error={errors.login.length !== 0}
                            helperText={errors.login}
                        />
                        <TextField
                            id='passwordField'
                            type='password'
                            label='Password'
                            variant='outlined'
                            onBlur={checkPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={errors.password.length !== 0}
                            helperText={errors.password}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <ErrorSpan
                        isVisible={!!errors.invalidCredentials}
                        className='text-center'
                    >
                        {errors.invalidCredentials}
                    </ErrorSpan>
                    {!registration && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <LoadingButton
                                type='button'
                                variant='contained'
                                disabled={isLoading}
                                loading={isLoading}
                                onClick={signIn}
                                sx={{
                                    width: 'fit-content',
                                    mb: 2,
                                }}
                            >
                                Sign In
                            </LoadingButton>
                            <LoadingButton
                                type='button'
                                disabled={isLoading}
                                onClick={handleNeedAccount}
                                sx={{
                                    width: 'fit-content',
                                }}
                                variant='outlined'
                            >
                                Don't have an account?
                            </LoadingButton>
                        </Box>
                    )}

                    {registration && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <LoadingButton
                                type='button'
                                disabled={isLoading}
                                onClick={handleRegister}
                                loading={isLoading}
                                variant='contained'
                                sx={{
                                    width: 'fit-content',
                                    mb: 2,
                                }}
                            >
                                Register
                            </LoadingButton>
                            <LoadingButton
                                type='button'
                                disabled={isLoading}
                                onClick={handleBackToLogin}
                                loading={isLoading}
                                variant='outlined'
                                sx={{
                                    width: 'fit-content',
                                }}
                            >
                                Already have an account?
                            </LoadingButton>
                        </Box>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
