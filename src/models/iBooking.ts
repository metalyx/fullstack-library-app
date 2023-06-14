import { iBook } from './iBook';
import { iUser } from './iUser';

export interface iBooking {
    _id: string;
    date: string;
    booker: iUser;
    book: iBook;
    isActive: boolean;
}
