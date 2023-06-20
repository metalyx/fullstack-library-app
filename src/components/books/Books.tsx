import { useEffect, useState } from 'react';
import Page from '../Page';
import { getAllBooks } from '../../helpers/getAllBooks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { bookSlice } from '../../store/reducers/BookSlice';
import Book from './Book';
import { iBook } from '../../models/iBook';
import Input from '../input/Input';
import { Grid, TextField } from '@mui/material';

const Books = () => {
    const { books, error, isLoading } = useAppSelector(
        (state) => state.bookReducer
    );
    const { setIsLoading, setBooks, setError } = bookSlice.actions;
    const dispatch = useAppDispatch();

    const [search, setSearch] = useState('');
    const [booksToShow, setBooksToShow] = useState<iBook[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            dispatch(setIsLoading(true));

            const allBooks = await getAllBooks();

            if (allBooks) {
                dispatch(setBooks(allBooks));
                dispatch(setIsLoading(false));
            } else {
                dispatch(setError('Error with fetching books'));
                dispatch(setIsLoading(false));
            }
        };

        fetchBooks();
    }, []);

    useEffect(() => {
        setBooksToShow(books);
    }, [books]);

    useEffect(() => {
        if (search.length <= 0) {
            setBooksToShow(books);
            return;
        }

        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );

        setBooksToShow(filtered);
    }, [search]);

    return (
        <Page title='Books'>
            <div className='my-5'>
                <TextField
                    id='outlined-basic'
                    label='Search by title'
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            {isLoading && <div>Loading books...</div>}
            {!isLoading && error.length === 0 && (
                // <div className='flex flex-wrap gap-4 justify-center'>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        mt: 2,
                    }}
                    gridAutoRows='1fr'
                >
                    {booksToShow.map((book) => (
                        <Grid
                            key={book._id}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                        >
                            <Book
                                key={book._id}
                                book={book}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            {error.length > 0 && <div className='text-red-600'>{error}</div>}
        </Page>
    );
};

export default Books;
