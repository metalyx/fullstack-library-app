import React, { useState, useEffect } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { iUser } from '../../models/iUser';
import { iBook } from '../../models/iBook';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
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

    const submitHandle = async () => {
        if (!bookingForm.bookId || !bookingForm.userId) {
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
                            <FormControl fullWidth>
                                <InputLabel id='booker-select-label'>
                                    Booker
                                </InputLabel>
                                <Select
                                    labelId='booker-select-label'
                                    id='booker-select'
                                    value={bookingForm.userId}
                                    label='Booker'
                                    onChange={handleBookerSelect}
                                >
                                    <MenuItem value=''>-</MenuItem>
                                    {users &&
                                        users.map((user) => (
                                            <MenuItem
                                                value={user._id}
                                                key={user._id}
                                            >
                                                {user.username} - ({user._id})
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            <div className='my-4'>
                                <FormControl fullWidth>
                                    <InputLabel id='book-select-label'>
                                        Book title
                                    </InputLabel>
                                    <Select
                                        labelId='book-select-label'
                                        id='book-select'
                                        value={bookingForm.bookId}
                                        label='Book title'
                                        onChange={handleBookSelect}
                                    >
                                        <MenuItem value=''>-</MenuItem>
                                        {availableBooks &&
                                            availableBooks.map((book) => (
                                                <MenuItem
                                                    value={book._id}
                                                    key={book._id}
                                                >
                                                    {book.title} - ({book._id})
                                                </MenuItem>
                                            ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <Button
                                variant='contained'
                                onClick={submitHandle}
                            >
                                Create new booking
                            </Button>
                        </form>
                    )}
                </>
            )}
        </Page>
    );
};

export default CreateBooking;
