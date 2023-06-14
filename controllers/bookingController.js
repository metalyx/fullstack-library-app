import Book from '../models/Book.js';
import Booking from '../models/Booking.js';
import User from '../models/User.js';
import { unexpectedError, showError } from '../helpers/Errors.js';

class bookingController {
    async createBooking(req, res) {
        try {
            let { date, booker, book, isActive } = req.body;

            if (!book || !booker) {
                return res
                    .status(400)
                    .json({ message: 'Fields booker and book are required.' });
            }

            if (!date) {
                date = Date.now();
            }

            if (!isActive) {
                isActive = true;
            }

            const bookerDB = await User.findById(booker);
            if (!bookerDB) {
                return res.status(400).json({
                    message: `User with _id ${booker} was not found.`,
                });
            }

            const bookDB = await Book.findById(book);
            if (!bookDB) {
                return res
                    .status(400)
                    .json({ message: `Book with _id ${book} was not found.` });
            }

            const booking = await Booking.create({
                date,
                booker,
                book,
                isActive,
            });

            const updatedBook = await bookDB.updateOne({ isAvailable: false });
            const updatedUser = await bookerDB.updateOne({
                $push: { bookings: booking._id },
            });

            res.status(201).json(booking);
        } catch (e) {
            res.status(500).json({
                message: 'Error with creating new booking.',
                ...e,
            });
        }
    }

    async cancelBooking(req, res) {
        const { _id } = req.body;

        if (!_id) {
            return showError(res, 'No _id of booking was provided');
        }

        const updatedBooking = await Booking.findByIdAndUpdate(_id, {
            isActive: false,
        });

        const booker = await User.findByIdAndUpdate(updatedBooking.booker, {
            // $pull: { bookings: updatedBooking._id },
            $pull: { bookings: _id },
        });

        const book = await Book.findByIdAndUpdate(updatedBooking.book, {
            isAvailable: true,
        });

        res.status(200).json({ updatedBooking, booker });
    }

    async getAllBookings(req, res) {
        try {
            const bookings = await Booking.find();

            const deepBookings = await Promise.all(
                bookings.map(async (booking) => {
                    try {
                        const booker = await User.findById(
                            booking.booker
                        ).select('username roles');
                        const book = await Book.findById(booking.book);

                        const newBooking = {
                            _id: booking._id,
                            date: booking.date,
                            isActive: booking.isActive,
                            booker,
                            book,
                        };

                        return newBooking;
                    } catch (e) {
                        throw new Error(e);
                    }
                })
            );

            res.status(200).json(deepBookings);
        } catch (e) {
            unexpectedError(res, e);
        }
    }

    async getBookingByUserId(req, res) {
        try {
            const { userId } = req.params;

            if (!userId) {
                return res
                    .status(400)
                    .json({ message: 'userId was not provided' });
            }

            const { bookings } = await User.findById(userId).select('bookings');

            const promises = bookings.map(async (bookingId) => {
                const booking = await Booking.findById(bookingId);
                return booking;
            });

            const depthBookings = await Promise.all(promises);

            const booksPromises = depthBookings.map(async (booking) => {
                const book = await Book.findById(booking.book);

                return {
                    ...booking._doc,
                    book,
                };
            });

            const depthBookingsWithBooks = await Promise.all(booksPromises);

            res.status(200).json(depthBookingsWithBooks);
        } catch (e) {
            res.status(500).json({
                message: 'Error while trying to get bookings from DB',
            });
        }
    }
}

export default new bookingController();
