import Book from '../models/Book.js';

class booksController {
    async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (e) {
            res.status(400).json({
                message: 'Error during fetching books',
                ...e,
            });
        }
    }

    async getAvailableBooks(req, res) {
        try {
            const availableBooks = await Book.find({ isAvailable: true });

            res.status(200).json(availableBooks);
        } catch (e) {
            res.status(400).json({
                message: 'Error during fetching books',
                ...e,
            });
        }
    }

    async createBook(req, res) {
        try {
            const book = req.body;
            const created = await Book.create(book);

            if (!created) {
                return res.status(400).json({
                    message: 'Error during creating a new book',
                    ...e,
                });
            }

            res.status(200).json({ message: 'Book created successfully.' });
        } catch (e) {
            res.status(400).json({
                message: 'Error during creating a new book',
                ...e,
            });
        }
    }
}

export default new booksController();
