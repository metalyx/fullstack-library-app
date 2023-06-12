import { Schema, model } from 'mongoose';
import { Types } from 'mongoose';

const Booking = new Schema({
    date: { type: String, required: true, default: Date.now() },
    booker: { type: Types.ObjectId, ref: 'User' },
    book: { type: Types.ObjectId, ref: 'Book' },
    isActive: { type: Boolean, required: true, default: true },
});

export default model('Booking', Booking);
