import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Loader from '../loader/Loader';
import {
    Box,
    Checkbox,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import { Axios } from '../../utils/Axios';
import { LoadingButton } from '@mui/lab';

interface iRegisterNewUser {
    handleShowUsers: (invalidate?: boolean) => void;
}

const RegisterNewUser: React.FC<iRegisterNewUser> = ({ handleShowUsers }) => {
    const navigate = useNavigate();
    const userInfo = useAppSelector((state) => state.userReducer.user);

    const [roles, setRoles] = useState<string[]>([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        roles: '',
    });
    const [isNetworkLoading, setIsNetworkLoading] = useState(false);
    const [networkError, setNetworkError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (userInfo) {
            if (userInfo.roles.indexOf('ADMIN') === -1) {
                return navigate(-1);
            }
        }
    }, [userInfo]);

    const handleSelectChange = (e: SelectChangeEvent<string[] | string>) => {
        const value = e.target.value;
        console.log(value);

        if (Array.isArray(value)) {
            setRoles(value);
        } else {
            setRoles(value.split(','));
        }
    };

    const validateUserName = () => {
        setValidationErrors({
            ...validationErrors,
            username:
                username.trim().length === 0
                    ? 'Username must not be empty'
                    : '',
        });
        if (username.trim().length === 0) {
            return true;
        }
    };

    const validatePassword = () => {
        setValidationErrors({
            ...validationErrors,
            password:
                password.trim().length < 4
                    ? 'Password must be at least 4 characters'
                    : '',
        });
        if (password.trim().length < 4) {
            return true;
        }
    };

    const validateRoles = () => {
        setValidationErrors({
            ...validationErrors,
            roles: roles.length === 0 ? 'At least one role is required' : '',
        });
        if (roles.length === 0) {
            return true;
        }
    };

    const handleSubmit = async () => {
        if (!validateUserName() && !validatePassword() && !validateRoles()) {
            try {
                setIsNetworkLoading(true);
                await Axios.post('/api/auth/registrationWithRole', {
                    username,
                    password,
                    roles,
                });
                setIsNetworkLoading(false);
                setIsSuccess(true);
            } catch (e: any) {
                setIsNetworkLoading(false);
                setIsSuccess(false);
                setNetworkError(
                    e?.response?.data?.message ?? 'Network error occured...'
                );
            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            handleShowUsers(true);
        }
    }, [isSuccess]);

    return (
        <div>
            {!userInfo && <Loader />}
            {isSuccess && (
                <p className='text-lg text-green-600 my-4'>
                    New user with username [{username}] was successfully
                    registered!
                </p>
            )}
            {!isSuccess &&
                userInfo &&
                userInfo.roles.indexOf('ADMIN') !== -1 && (
                    <Box
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Typography
                            variant='h6'
                            component='h2'
                        >
                            Register New User
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Grid
                                    container
                                    spacing={2}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        lg={4}
                                    >
                                        <TextField
                                            variant='outlined'
                                            label='Username'
                                            sx={{ mr: 2, width: '100%' }}
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            onBlur={validateUserName}
                                            error={
                                                validationErrors.username
                                                    .length > 0
                                            }
                                            helperText={
                                                validationErrors.username
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        lg={4}
                                    >
                                        <TextField
                                            variant='outlined'
                                            label='Password'
                                            sx={{ mr: 2, width: '100%' }}
                                            type='password'
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            onBlur={validatePassword}
                                            error={
                                                validationErrors.password
                                                    .length > 0
                                            }
                                            helperText={
                                                validationErrors.password
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        lg={4}
                                    >
                                        <FormControl
                                            sx={{
                                                width: '100%',
                                                minWidth: '210px',
                                                // width: '100%'
                                            }}
                                            error={
                                                validationErrors.roles.length >
                                                0
                                            }
                                        >
                                            <InputLabel id='multiple-checkbox-label'>
                                                Roles
                                            </InputLabel>
                                            <Select
                                                labelId='multiple-checkbox-label'
                                                label='Roles'
                                                id='multiple-checkbox'
                                                multiple
                                                value={roles}
                                                onChange={handleSelectChange}
                                                input={
                                                    <OutlinedInput label='Roles' />
                                                }
                                                renderValue={(selected) => {
                                                    if (
                                                        typeof selected ===
                                                        'string'
                                                    ) {
                                                        return selected;
                                                    } else {
                                                        return selected.join(
                                                            ', '
                                                        );
                                                    }
                                                }}
                                                onBlur={validateRoles}
                                            >
                                                <MenuItem value='USER'>
                                                    <Checkbox
                                                        checked={
                                                            roles.indexOf(
                                                                'USER'
                                                            ) > -1
                                                        }
                                                    />
                                                    <ListItemText primary='User' />
                                                </MenuItem>
                                                <MenuItem value='LIBRARIAN'>
                                                    <Checkbox
                                                        checked={
                                                            roles.indexOf(
                                                                'LIBRARIAN'
                                                            ) > -1
                                                        }
                                                    />
                                                    <ListItemText primary='Librarian' />
                                                </MenuItem>
                                                <MenuItem value='ADMIN'>
                                                    <Checkbox
                                                        checked={
                                                            roles.indexOf(
                                                                'ADMIN'
                                                            ) > -1
                                                        }
                                                    />
                                                    <ListItemText primary='ADMIN' />
                                                </MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {validationErrors.roles}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Box
                                    sx={{
                                        mt: 2,
                                    }}
                                >
                                    {networkError.length > 0 && (
                                        <p className='text-red-600 text-lg'>
                                            {networkError}
                                        </p>
                                    )}
                                    <LoadingButton
                                        variant='contained'
                                        loading={isNetworkLoading}
                                        onClick={handleSubmit}
                                    >
                                        Register
                                    </LoadingButton>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                )}
        </div>
    );
};

export default RegisterNewUser;
