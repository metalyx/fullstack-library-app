import { useCallback, useEffect } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { iBooking } from '../../models/iBooking';
import Booking from './Booking';
import { bookingSlice } from '../../store/reducers/BookingSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

const Bookings = () => {
    const { bookings, error, isLoading } = useAppSelector(
        (state) => state.bookingReducer
    );
    const { setBookings, setError, setIsLoading } = bookingSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    return (
        <Page title='Bookings'>
            <div className='my-4'>
                <Button
                    variant='contained'
                    onClick={redirectToCreateNewBookingPage}
                    sx={{
                        mr: 2,
                    }}
                >
                    Create new booking
                </Button>
                <Button
                    variant='contained'
                    onClick={redirectToCancelBookingPage}
                >
                    Cancel booking
                </Button>
            </div>
            {isLoading && !error && <div>Loading...</div>}
            {!isLoading && (
                <Grid
                    container
                    spacing={2}
                >
                    {sortDate().map((booking: iBooking) => (
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
