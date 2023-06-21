import { useState, useEffect } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { iUser } from '../../models/iUser';
import { iBook } from '../../models/iBook';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';

const CreateBooking = () => {
    const [availableBooks, setAvailableBooks] = useState<iBook[]>([]);
    const [users, setUsers] = useState<iUser[]>([]);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [bookingForm, setBookingForm] = useState({
        userId: '',
        bookId: '',
    });
    const [validationErrors, setValidationErrors] = useState({
        user: '',
        book: '',
    });

    useEffect(() => {
        setIsLoading(true);
        const getAvailableBooks = async () => {
            try {
                const response = await Axios.get('/api/books/available');
                return response.data;
            } catch (e: any) {
                setError(e.message ?? 'Error during fetching available books');
            }
        };
        const getAllUsers = async () => {
            try {
                const response = await Axios.get('/api/staff/users');
                return response.data;
            } catch (e: any) {
                setError(e.message ?? 'Error during fetching users');
            }
        };

        Promise.all([getAvailableBooks(), getAllUsers()])
            .then((res) => {
                const [books, users] = res;

                setAvailableBooks(books);
                setUsers(users);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
    }, []);

    const handleBookerSelect = (e: SelectChangeEvent<string>) => {
        setBookingForm({
            ...bookingForm,
            userId: e.target.value,
        });
    };

    const handleBookSelect = (e: SelectChangeEvent<string>) => {
        setBookingForm({
            ...bookingForm,
            bookId: e.target.value,
        });
    };

    const validateBook = () => {
        if (!bookingForm.bookId) {
            setValidationErrors({
                ...validationErrors,
                book: 'Selected book is required',
            });
            return true;
        } else {
            setValidationErrors({
                ...validationErrors,
                book: '',
            });
            return false;
        }
    };
    const validateBooker = () => {
        if (!bookingForm.userId) {
            setValidationErrors({
                ...validationErrors,
                user: 'Selected user is required',
            });
            return true;
        } else {
            setValidationErrors({
                ...validationErrors,
                user: '',
            });
            return false;
        }
    };

    const submitHandle = async () => {
        let formIsInvalid = true;

        if (validateBook()) {
            formIsInvalid = false;
        }

        if (validateBooker()) {
            formIsInvalid = false;
        }

        if (!formIsInvalid) {
            return;
        }

        try {
            await Axios.post('/api/bookings/create', {
                booker: bookingForm.userId,
                book: bookingForm.bookId,
            });

            setIsSuccess(true);
        } catch (e) {
            setError('Error while creating new booking');
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                navigate('/bookings');
            }, 3000);
        }
    }, [isSuccess]);

    return (
        <Page title='Create new booking'>
            {isSuccess && (
                <div className='text-green-600 text-xl'>
                    New booking was successfully created!
                </div>
            )}
            {!isSuccess && (
                <>
                    {isLoading && <div>Loading...</div>}
                    {!isLoading && error && (
                        <div className='text-red-600'>{error}</div>
                    )}
                    {!isLoading && (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                >
                                    <FormControl
                                        fullWidth
                                        error={validationErrors.user.length > 0}
                                    >
                                        <InputLabel id='booker-select-label'>
                                            Booker
                                        </InputLabel>
                                        <Select
                                            labelId='booker-select-label'
                                            id='booker-select'
                                            value={bookingForm.userId}
                                            label='Booker'
                                            onChange={handleBookerSelect}
                                            onBlur={validateBooker}
                                        >
                                            <MenuItem value=''>-</MenuItem>
                                            {users &&
                                                users.map((user) => (
                                                    <MenuItem
                                                        value={user._id}
                                                        key={user._id}
                                                    >
                                                        {user.username} - (
                                                        {user._id})
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                        <FormHelperText>
                                            {validationErrors.user}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                >
                                    <FormControl
                                        fullWidth
                                        error={validationErrors.book.length > 0}
                                    >
                                        <InputLabel id='book-select-label'>
                                            Book title
                                        </InputLabel>
                                        <Select
                                            labelId='book-select-label'
                                            id='book-select'
                                            value={bookingForm.bookId}
                                            label='Book title'
                                            onChange={handleBookSelect}
                                            onBlur={validateBook}
                                        >
                                            <MenuItem value=''>-</MenuItem>
                                            {availableBooks &&
                                                availableBooks.map((book) => (
                                                    <MenuItem
                                                        value={book._id}
                                                        key={book._id}
                                                    >
                                                        {book.title} - (
                                                        {book._id})
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                        <FormHelperText>
                                            {validationErrors.book}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    sm={4}
                                    md={6}
                                    lg={8}
                                >
                                    <Button
                                        variant='contained'
                                        onClick={submitHandle}
                                        sx={{
                                            width: '100%',
                                        }}
                                    >
                                        Create new booking
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </>
            )}
        </Page>
    );
};

export default CreateBooking;
