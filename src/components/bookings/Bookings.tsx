import { useEffect } from 'react';
import Page from '../Page';
import { Axios } from '../../utils/Axios';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { iBooking } from '../../models/iBooking';
import Booking from './Booking';
import { bookingSlice } from '../../store/reducers/BookingSlice';
import { useNavigate } from 'react-router-dom';

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

    return (
        <Page title='Bookings'>
            <div>
                <button onClick={redirectToCreateNewBookingPage}>
                    Create new booking
                </button>
                <button onClick={redirectToCancelBookingPage}>
                    Cancel booking
                </button>
            </div>
            {isLoading && !error && <div>Loading...</div>}
            {!isLoading &&
                bookings.map((booking: iBooking) => (
                    <Booking
                        key={booking._id}
                        booking={booking}
                    />
                ))}
            {!!!bookings.length && (
                <p className='my-4'>There is no bookings yet.</p>
            )}
        </Page>
    );
};

export default Bookings;
