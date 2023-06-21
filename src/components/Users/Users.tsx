import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getUsersInfo } from '../../helpers/getUsersInfo';
import AllUsers from './AllUsers';
import { iUser } from '../../models/iUser';
import { useNavigate } from 'react-router-dom';
import Page from '../Page';
import { Box, Button } from '@mui/material';
import RegisterNewUser from './RegisterNewUser';

const Users = () => {
    const navigate = useNavigate();

    const userInfo = useAppSelector((state) => state.userReducer.user);

    const [users, setUsers] = useState<iUser[]>([]);
    const [adminView, setAdminView] = useState<React.ReactElement | null>(null);

    useEffect(() => {
        if (userInfo) {
            if (
                userInfo.roles.find(
                    (role) => role === 'ADMIN' || role === 'LIBRARIAN'
                ) === undefined
            ) {
                return navigate(-1);
            }
        }
    }, [userInfo]);

    const handleShowUsers = async (invalidate = false) => {
        if (users.length === 0 || invalidate) {
            const allUsers = await getUsersInfo();
            setUsers(allUsers);
        }
        setAdminView(<AllUsers users={users} />);
    };

    const handleRegisterNewUser = async () => {
        if (userInfo) {
            if (userInfo.roles.indexOf('ADMIN') !== -1) {
                setAdminView(
                    <RegisterNewUser handleShowUsers={handleShowUsers} />
                );
            }
        }
    };

    useEffect(() => {
        setAdminView(<AllUsers users={users} />);
    }, [users]);

    return (
        <Page title='Users'>
            {!userInfo && <div>Checking permissions...</div>}
            <div className='flex gap-4'>
                <Button
                    variant='contained'
                    onClick={() => handleShowUsers()}
                >
                    Show All Users
                </Button>
                {userInfo && userInfo.roles.indexOf('ADMIN') !== -1 && (
                    <Button
                        variant='contained'
                        onClick={handleRegisterNewUser}
                    >
                        Register new user
                    </Button>
                )}
            </div>
            <div>{adminView}</div>
        </Page>
    );
};

export default Users;
