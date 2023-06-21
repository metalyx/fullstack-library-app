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
        } else {
            const filtered = bookings.filter(
                (booking) =>
                    booking.booker.username
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    booking.book.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
            );

            setFilteredBookings(filtered);
        }
    }, [search]);

    return (
        <Page title='Bookings'>
            <Grid
                container
                sx={{
                    my: 3,
                }}
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                >
                    <Button
                        variant='contained'
                        onClick={redirectToCreateNewBookingPage}
                        sx={{
                            height: '56px',
                            width: '100%',
                        }}
                    >
                        Create new booking
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                >
                    <Button
                        variant='contained'
                        onClick={redirectToCancelBookingPage}
                        sx={{
                            height: '56px',
                            width: '100%',
                        }}
                    >
                        Cancel booking
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                >
                    <TextField
                        id='outlined-basic'
                        label='Search'
                        placeholder='Book title or username'
                        variant='outlined'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            width: '100%',
                        }}
                    />
                </Grid>
            </Grid>
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
