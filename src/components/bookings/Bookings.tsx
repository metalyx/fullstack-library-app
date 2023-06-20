import { useCallback, useEffect, useState } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { iBooking } from '../../models/iBooking';
import Booking from './Booking';
import { bookingSlice } from '../../store/reducers/BookingSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';

const Bookings = () => {
    const { bookings, error, isLoading } = useAppSelector(
        (state) => state.bookingReducer
    );
    const { setBookings, setError, setIsLoading } = bookingSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [filteredBookings, setFilteredBookings] = useState(bookings);

    useEffect(() => {
        setIsLoading(true);

        const getBooking = async () => {
            try {
                const response = await Axios.get('/api/bookings');

                dispatch(setBookings(response.data));
                dispatch(setIsLoading(false));
                dispatch(setError(''));
            } catch (e: any) {
                dispatch(setIsLoading(false));
                dispatch(setError(e.message ?? 'Cannot fetch bookings'));
            }
        };

        getBooking();
    }, []);

    const redirectToCreateNewBookingPage = () => {
        return navigate('/createBooking');
    };
    const redirectToCancelBookingPage = () => {
        return navigate('/cancelBooking');
    };

    const sortDate = useCallback(() => {
        return [...bookings].sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
    }, [bookings]);

    useEffect(() => {
        setFilteredBookings(sortDate());
    }, [bookings]);

    useEffect(() => {
        if (search === '') {
            setFilteredBookings(bookings);
        }

        const filtered = bookings.filter(
            (booking) =>
                booking.booker.username.toLowerCase().includes(search) ||
                booking.book.title.toLowerCase().includes(search)
        );

        setFilteredBookings(filtered);
    }, [search]);

    return (
        <Page title='Bookings'>
            <div className='my-4'>
                <Button
                    variant='contained'
                    onClick={redirectToCreateNewBookingPage}
                    sx={{
                        mr: 2,
                        height: '56px',
                    }}
                >
                    Create new booking
                </Button>
                <Button
                    variant='contained'
                    onClick={redirectToCancelBookingPage}
                    sx={{
                        height: '56px',
                        mr: 2,
                    }}
                >
                    Cancel booking
                </Button>
                <TextField
                    id='outlined-basic'
                    label='Search'
                    variant='outlined'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {isLoading && !error && <div>Loading...</div>}
            {!isLoading && (
                <Grid
                    container
                    spacing={2}
                >
                    {filteredBookings.map((booking: iBooking) => (
                        <Grid
                            key={booking._id}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                        >
                            <Booking booking={booking} />
                        </Grid>
                    ))}
                </Grid>
            )}

            {!!!bookings.length && (
                <p className='my-4'>There is no bookings yet.</p>
            )}
        </Page>
    );
};

export default Bookings;
