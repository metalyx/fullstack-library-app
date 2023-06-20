import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import Page from './Page';

const Profile = () => {
    const user = useAppSelector((state) => state.userReducer.user);

    return (
        <Page
            title='Profile'
            className='w-fit'
        >
            {user && (
                <Card variant='outlined'>
                    <CardMedia
                        component='img'
                        image='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
                        sx={{
                            height: '200px',
                        }}
                    />
                    <CardContent>
                        <Typography
                            variant='h4'
                            component='h2'
                        >
                            {user.username}
                        </Typography>
                        <ul>
                            <li>
                                Username: <span>{user.username}</span>
                            </li>
                            <li>
                                Profile type: <span>{user.roles}</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            )}
            {!user && <div>Loading user details...</div>}
        </Page>
    );
};

export default Profile;
