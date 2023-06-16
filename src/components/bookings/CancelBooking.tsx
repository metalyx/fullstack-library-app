import React, { useCallback, useEffect, useState } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { iUser } from '../../models/iUser';
import { iBooking } from '../../models/iBooking';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const CancelBooking = () => {
    const [users, setUsers] = useState<iUser[]>();
    const [selectedUser, setSelectedUser] = useState('');
    const [error, setError] = useState('');
    const [bookingsOfUsers, setBookingsOfUsers] = useState<iBooking[]>([]);
    const [selectedBooking, setSelectedBooking] = useState('');
    const [isLoadingCancel, setIsLoadingCancel] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const bookerSelectHandle = (e: SelectChangeEvent<any>) => {
        setSelectedUser(e.target.value);
    };

    const bookingsSelectHandle = (e: SelectChangeEvent<any>) => {
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

    const getActiveBookings = useCallback(() => {
        return [...bookingsOfUsers].filter((booking) => booking.isActive);
    }, [bookingsOfUsers]);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                return navigate('/bookings');
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
                        <FormControl fullWidth>
                            <InputLabel id='booker-select-label'>
                                Booker
                            </InputLabel>
                            <Select
                                labelId='booker-select-label'
                                id='booker-select'
                                value={selectedUser}
                                label='Booker'
                                onChange={bookerSelectHandle}
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
                        {getActiveBookings().length === 0 && (
                            <div className='my-4'>No bookings here</div>
                        )}
                        {!!getActiveBookings().length && (
                            <FormControl
                                fullWidth
                                sx={{
                                    my: 4,
                                }}
                            >
                                <InputLabel id='booking-select-label'>
                                    Booking
                                </InputLabel>
                                <Select
                                    labelId='booking-select-label'
                                    id='booking-select'
                                    value={selectedBooking}
                                    label='Booking'
                                    onChange={bookingsSelectHandle}
                                >
                                    <MenuItem value=''>-</MenuItem>
                                    {bookingsOfUsers &&
                                        getActiveBookings().map((booking) => (
                                            <MenuItem
                                                value={booking._id}
                                                key={booking._id}
                                            >
                                                (
                                                {new Date(
                                                    parseInt(booking.date)
                                                ).toLocaleString()}
                                                ) - {booking.book.title}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        )}
                        {selectedBooking && (
                            <Button
                                onClick={cancelBookingHandle}
                                disabled={isLoadingCancel}
                                variant='contained'
                            >
                                Cancel this booking
                            </Button>
                        )}
                    </form>
                </>
            )}
        </Page>
    );
};

export default CancelBooking;
