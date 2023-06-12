import { Schema, model } from 'mongoose';
import { Types } from 'mongoose';

const User = new Schema({
    username: { type: String, unique: true, required: true }, // username and login
    password: { type: String, required: true }, // password
    roles: [{ type: String, ref: 'Role' }], // Roles from roles model
    bookings: [{ type: Types.ObjectId, ref: 'Booking' }], // Book ids that were booked by this user
});

export default model('User', User);
