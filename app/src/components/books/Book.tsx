import React from 'react';
import { iBook } from '../../models/iBook';
import { Card, CardContent, CardMedia } from '@mui/material';

interface iBookComponent {
    book: iBook;
}

const Book: React.FC<iBookComponent> = ({ book }) => {
    return (
        <Card
            sx={{
                height: '100%',
            }}
        >
            <CardMedia
                className='!object-contain h-[200px]'
                image={book.cover}
                component='img'
                alt={book.title}
            />
            <CardContent
                sx={{
                    height: '100%',
                }}
            >
                <p className='text-xl'>
                    {book.title} ({book.year})
                </p>
                <p>
                    <b>Authors: </b> {book.authors}
                </p>
                <p>
                    <b>Description: </b>
                    {book.description}
                </p>
                <p>
                    <b>Available at library: </b>
                    {book.isAvailable ? (
                        <span className='text-green-600'>yes</span>
                    ) : (
                        <span className='text-red-600'>no</span>
                    )}
                </p>
            </CardContent>
        </Card>
    );
};

export default Book;
