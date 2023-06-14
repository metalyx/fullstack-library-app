import React, { useState, useEffect } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { iUser } from '../../models/iUser';
import { iBook } from '../../models/iBook';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';

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

    const handleBookerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBookingForm({
            ...bookingForm,
            userId: e.target.value,
        });
    };

    const handleBookSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
                            <div>
                                <label htmlFor='bookerSelect'>Booker:</label>
                                <select
                                    id='bookerSelect'
                                    onChange={handleBookerSelect}
                                    className='ml-2'
                                    defaultValue=''
                                >
                                    <option></option>
                                    {users &&
                                        users.map((user) => (
                                            <option
                                                key={user._id}
                                                value={user._id}
                                            >
                                                ({user._id})-{user.username}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className='my-4'>
                                <label htmlFor='bookSelect'>Book:</label>
                                <select
                                    id='bookSelect'
                                    onChange={handleBookSelect}
                                    className='ml-2'
                                    defaultValue=''
                                >
                                    <option></option>
                                    {availableBooks &&
                                        availableBooks.map((book) => (
                                            <option
                                                key={book._id}
                                                value={book._id}
                                            >
                                                ({book._id})-{book.title}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <Button onClick={submitHandle}>
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
