import React from 'react';
import { iBooking } from '../../models/iBooking';
import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    HowToReg,
    Badge,
    Book,
    ImportContacts,
    Today,
    ErrorOutline,
} from '@mui/icons-material';

interface iBookingComponent {
    booking: iBooking;
}

const Booking: React.FC<iBookingComponent> = ({ booking }) => {
    return (
        <Card elevation={4}>
            <CardContent>
                <List dense>
                    <ListItem>
                        <ListItemIcon>
                            <HowToReg />
                        </ListItemIcon>
                        <ListItemText
                            secondary='User ID'
                            primary={booking.booker._id}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Badge />
                        </ListItemIcon>
                        <ListItemText
                            secondary='User Name'
                            primary={booking.booker.username}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Book />
                        </ListItemIcon>
                        <ListItemText
                            secondary='Book ID'
                            primary={booking.book._id}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ImportContacts />
                        </ListItemIcon>
                        <ListItemText
                            secondary='Book Title'
                            primary={booking.book.title}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Today />
                        </ListItemIcon>
                        <ListItemText
                            secondary='Booking Date'
                            primary={new Date(
                                parseInt(booking.date)
                            ).toLocaleString()}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ErrorOutline />
                        </ListItemIcon>
                        <ListItemText
                            secondary='Booking Status'
                            primary={booking.isActive ? 'Active' : 'Closed'}
                            primaryTypographyProps={{
                                color: booking.isActive ? 'red' : 'green',
                                fontWeight: 900,
                                component: 'b',
                            }}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
        // <div className='border border-black border-solid'>
        //     <p>User ID: {booking.booker._id}</p>
        //     <p>User Name: {booking.booker.username}</p>
        //     <p>Book ID: {booking.book._id}</p>
        //     <p>Book title: {booking.book.title}</p>
        //     <p>Date: {new Date(parseInt(booking.date)).toLocaleString()}</p>
        //     <p>
        //         Active booking:
        //         {booking.isActive ? (
        //             <span className='font-bold text-red-600'>Yes</span>
        //         ) : (
        //             <span className='font-bold text-green-600'>No</span>
        //         )}
        //     </p>
        // </div>
    );
};

export default Booking;
