import { Box, Container, Typography } from '@mui/material';
import React from 'react';

interface iPage {
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

const Page: React.FC<iPage> = ({
    title = 'Page',
    children,
    className = '',
}) => {
    return (
        <Container maxWidth='lg'>
            {/* The old layout */}
            {/* <div className='px-24'> */}
            <div className='border-b-2 border-solid border-blue-500'>
                <Typography
                    variant='h3'
                    component='h1'
                >
                    {title}
                </Typography>
            </div>
            <div className={`my-5 ${className}`}>{children}</div>
            <Box
                sx={{
                    height: '20px',
                }}
            />
        </Container>
    );
};

export default Page;
