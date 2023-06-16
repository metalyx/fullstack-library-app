import React from 'react';
import { iUser } from '../../models/iUser';
import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { HowToReg } from '@mui/icons-material';

interface iAllUsers {
    users: iUser[];
}

const AllUsers: React.FC<iAllUsers> = ({ users }) => {
    return (
        <div>
            <ul className='my-4'>
                {users.map((user) => (
                    <li
                        key={user.username}
                        className='border-solid p-2 border border-black-600'
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
                                            primary={booking.booker._id}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <div>
                            ID: <span>{user._id}</span>
                        </div>
                        <div>
                            Username: <span>{user.username}</span>
                        </div>
                        <div>
                            Roles: <span>{user.roles}</span>
                        </div>
                        <div>
                            Booked:
                            {user.bookings.map((booking) => (
                                <div>
                                    <b>Date of booking: </b>
                                    <span>
                                        {new Date(
                                            parseInt(booking.date)
                                        ).toLocaleString()}
                                    </span>
                                    <b>Book Id: </b>
                                    <span>
                                        {booking.book as unknown as string}
                                    </span>
                                    <b>Booking status: </b>
                                    <span>
                                        {booking.isActive
                                            ? 'Active'
                                            : 'Archived'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUsers;
