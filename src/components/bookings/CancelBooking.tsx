import React, { useEffect, useState } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { iUser } from '../../models/iUser';
import { iBooking } from '../../models/iBooking';
import { useNavigate } from 'react-router-dom';

const CancelBooking = () => {
    const [users, setUsers] = useState<iUser[]>();
    const [selectedUser, setSelectedUser] = useState('');
    const [error, setError] = useState('');
    const [bookingsOfUsers, setBookingsOfUsers] = useState<iBooking[]>([]);
    const [selectedBooking, setSelectedBooking] = useState('');
    const [isLoadingCancel, setIsLoadingCancel] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const bookerSelectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUser(e.target.value);
    };

    const bookingsSelectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBooking(e.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await Axios.get('api/staff/users');

                setUsers(response.data);
            } catch (e: any) {
                setError(e.message ?? 'Error while fetching users');
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        if (selectedUser) {
            const fetchBookingsByUserId = async () => {
                try {
                    const response = await Axios.get(
                        `/api/bookings/${selectedUser}`
                    );

                    setBookingsOfUsers(response.data);
                } catch (e: any) {
                    setError(e.message);
                }
            };

            fetchBookingsByUserId();
        }
    }, [selectedUser]);

    const cancelBookingHandle = async () => {
        if (!isLoadingCancel) {
            setIsLoadingCancel(true);
            try {
                const response = await Axios.post('/api/bookings/cancel', {
                    _id: selectedBooking,
                });

                if (response.status > 199 && response.status <= 299) {
                    setIsSuccess(true);
                }
                setIsLoadingCancel(false);
            } catch (e) {
                setIsLoadingCancel(false);
                setError('Error while trying to cancel booking');
            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                return navigate('/books');
            }, 3000);
        }
    }, [isSuccess]);

    return (
        <Page title='Cancel Booking'>
            {isSuccess && (
                <div className='text-green-600 text-xl'>
                    Booking was successfully canceled!
                </div>
            )}
            {!isSuccess && (
                <>
                    {error && <p className='text-red-600 text-xl'>{error}</p>}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor='bookerSelect'>Booker</label>
                        <select
                            id='bookerSelect'
                            onChange={bookerSelectHandle}
                            defaultValue=''
                        >
                            <option value=''>-</option>
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
                        {bookingsOfUsers.length === 0 && (
                            <div className='my-4'>No bookings here</div>
                        )}
                        {!!bookingsOfUsers.length && (
                            <div className='my-4'>
                                <label htmlFor='bookingsSelect'>Bookings</label>
                                <select
                                    id='bookingsSelect'
                                    onChange={bookingsSelectHandle}
                                    defaultValue=''
                                >
                                    <option>-</option>
                                    {bookingsOfUsers.map((booking) => (
                                        <option value={booking._id}>
                                            ({booking.isActive},{' '}
                                            {new Date(
                                                parseInt(booking.date)
                                            ).toLocaleString()}
                                            )-{booking.book.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {selectedBooking && (
                            <button
                                onClick={cancelBookingHandle}
                                disabled={isLoadingCancel}
                            >
                                Cancel this booking
                            </button>
                        )}
                    </form>
                </>
            )}
        </Page>
    );
};

export default CancelBooking;
