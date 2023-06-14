import React from 'react';
import { iBooking } from '../../models/iBooking';

interface iBookingComponent {
    booking: iBooking;
}

const Booking: React.FC<iBookingComponent> = ({ booking }) => {
    return (
        <div className='border border-black border-solid'>
            <p>User ID: {booking.booker._id}</p>
            <p>User Name: {booking.booker.username}</p>
            <p>Book ID: {booking.book._id}</p>
            <p>Book title: {booking.book.title}</p>
            <p>Date: {new Date(parseInt(booking.date)).toLocaleString()}</p>
            <p>
                Active booking:{' '}
                {booking.isActive ? (
                    <span className='font-bold text-red-600'>Yes</span>
                ) : (
                    <span className='font-bold text-green-600'>No</span>
                )}
            </p>
        </div>
    );
};

export default Booking;
