import React, { useCallback } from 'react';
import { iUser } from '../../models/iUser';
import {
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Badge, HowToReg, Security, Today } from '@mui/icons-material';
import { iBooking } from '../../models/iBooking';

interface iAllUsers {
    users: iUser[];
}

const AllUsers: React.FC<iAllUsers> = ({ users }) => {
    const formatBookings = useCallback((bookings: iBooking[]) => {
        if (bookings.length === 0) {
            return 'No active bookings';
        }

        let activeBookings = 0;

        bookings.forEach((booking) => {
            if (booking.isActive) {
                activeBookings += 1;
            }
        });

        return (
            <p className='text-red-600'>{`Active bookings: ${activeBookings}`}</p>
        );
    }, []);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                mt: 2,
            }}
        >
            {users.map((user) => (
                <Grid
                    key={user._id}
                    item
                    xs={12}
                    md={6}
                    lg={4}
                >
                    <Card elevation={4}>
                        <CardContent>
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <HowToReg />
                                    </ListItemIcon>
                                    <ListItemText
                                        secondary='User ID'
                                        primary={user._id}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Badge />
                                    </ListItemIcon>
                                    <ListItemText
                                        secondary='Username'
                                        primary={user.username}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Security />
                                    </ListItemIcon>
                                    <ListItemText
                                        secondary='Roles'
                                        primary={user.roles}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Today />
                                    </ListItemIcon>
                                    {user.bookings.length > 0 && (
                                        <ListItemText
                                            secondary='Bookings'
                                            primary={formatBookings(
                                                user.bookings
                                            )}
                                        />
                                        // <ListItemText
                                        //     secondary='Bookings'
                                        //     primary={user.bookings.map(
                                        //         (booking) => (
                                        //             <div key={booking._id}>
                                        //                 <b>Date of booking: </b>
                                        //                 <span>
                                        //                     {new Date(
                                        //                         parseInt(
                                        //                             booking.date
                                        //                         )
                                        //                     ).toLocaleString()}
                                        //                 </span>
                                        //                 <b>Book Id: </b>
                                        //                 <span>
                                        //                     {
                                        //                         booking.book as unknown as string
                                        //                     }
                                        //                 </span>
                                        //                 <b>Booking status: </b>
                                        //                 <span>
                                        //                     {booking.isActive
                                        //                         ? 'Active'
                                        //                         : 'Archived'}
                                        //                 </span>
                                        //             </div>
                                        //         )
                                        //     )}
                                        // />
                                    )}
                                    {user.bookings.length === 0 && (
                                        <ListItemText
                                            secondary='Bookings'
                                            primary={'No active bookings'}
                                        />
                                    )}
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AllUsers;
