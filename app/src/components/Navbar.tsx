import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { getUserInfo } from '../helpers/getUserInfo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { iRole } from '../models/iRole';
import { Logout } from '@mui/icons-material';

interface iPageObject {
    title: string;
    path: string;
    roles?: iRole[];
}

const pages: iPageObject[] = [
    { title: 'Home', path: '/' },
    { title: 'Books', path: '/books' },
    { title: 'Profile', path: '/profile' },
    { title: 'Bookings', path: '/bookings', roles: ['LIBRARIAN', 'ADMIN'] },
    { title: 'Users', path: '/users', roles: ['LIBRARIAN', 'ADMIN'] },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const { user, isLoggedIn } = useAppSelector((state) => state.userReducer);
    const { logOut, setUser } = userSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const loginOut = () => {
        window.localStorage.removeItem('token');
        dispatch(logOut());
        navigate('/login');
    };

    const handleLogout = () => {
        handleCloseNavMenu();
        loginOut();
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (!user) {
                const userInfo = await getUserInfo();
                dispatch(setUser(userInfo));
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <>
            {/* The old navbar */}
            {/* {isLoggedIn && (
                <div className='flex items-center justify-center bg-orange-300 w-[100%] absolute top-0 left-0 h-[50px]'>
                    <nav className='w-[100%] px-24 flex items-center justify-between'>
                        <ul className='w-[100%] flex gap-24 items-center  border-dashed border-2 border-indigo-600'>
                            <li
                                className={`${liStyles} ${
                                    location.pathname === '/' && '!font-bold'
                                }`}
                            >
                                <Link to='/'>Home</Link>
                            </li>
                            <li
                                className={`${liStyles} ${
                                    location.pathname === '/books' &&
                                    '!font-bold'
                                }`}
                            >
                                <Link to='/books'>Books</Link>
                            </li>
                            <li
                                className={`${liStyles} ${
                                    location.pathname === '/profile' &&
                                    '!font-bold'
                                }`}
                            >
                                <Link to='/profile'>Profile</Link>
                            </li>
                            {user?.roles.find(
                                (role) => role === 'LIBRARIAN'
                            ) && (
                                <li
                                    className={`${liStyles} ${
                                        location.pathname === '/bookings' &&
                                        '!font-bold'
                                    }`}
                                >
                                    <Link to='/bookings'>Bookings</Link>
                                </li>
                            )}
                            {user?.roles.find((role) => role === 'ADMIN') && (
                                <>
                                    <li
                                        className={`${liStyles} ${
                                            location.pathname === '/admin' &&
                                            '!font-bold'
                                        }`}
                                    >
                                        <Link to='/admin'>Admin</Link>
                                    </li>
                                    <li
                                        className={`${liStyles} ${
                                            location.pathname === '/bookings' &&
                                            '!font-bold'
                                        }`}
                                    >
                                        <Link to='/bookings'>Bookings</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        <button
                            className='bg-transparent w-[70px] p-0'
                            onClick={loginOut}
                        >
                            Log out
                        </button>
                    </nav>
                </div>
            )} */}

            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography
                            variant='h6'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to='/'>MyLibrary</Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <div>
                                    {pages.map((page) =>
                                        !page.roles ? (
                                            <Link
                                                to={page.path}
                                                key={page.title}
                                            >
                                                <MenuItem
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    <Typography textAlign='center'>
                                                        {page.title}
                                                    </Typography>
                                                </MenuItem>
                                            </Link>
                                        ) : page.roles.some((role) =>
                                              user?.roles.includes(role)
                                          ) ? (
                                            <Link
                                                to={page.path}
                                                key={page.title}
                                            >
                                                <MenuItem
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    <Typography textAlign='center'>
                                                        {page.title}
                                                    </Typography>
                                                </MenuItem>
                                            </Link>
                                        ) : null
                                    )}
                                    <MenuItem onClick={handleLogout}>
                                        <span className='text-blue-600'>
                                            Log Out
                                        </span>
                                    </MenuItem>
                                </div>
                            </Menu>
                        </Box>

                        <Typography
                            variant='h5'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link to='/'>MyLibrary</Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            {pages.map((page) => (
                                <React.Fragment key={page.title}>
                                    {!page.roles && (
                                        <Link to={page.path}>
                                            <Button
                                                onClick={handleCloseNavMenu}
                                                sx={{
                                                    my: 2,
                                                    color: 'white',
                                                    display: 'block',
                                                }}
                                            >
                                                {page.title}
                                            </Button>
                                        </Link>
                                    )}
                                    {page.roles &&
                                        page.roles.some((role) =>
                                            user?.roles.includes(role)
                                        ) && (
                                            <Link to={page.path}>
                                                <Button
                                                    onClick={handleCloseNavMenu}
                                                    sx={{
                                                        my: 2,
                                                        color: 'white',
                                                        display: 'block',
                                                    }}
                                                >
                                                    {page.title}
                                                </Button>
                                            </Link>
                                        )}
                                </React.Fragment>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                onClick={handleLogout}
                                sx={{
                                    color: 'white',
                                    transition: '200ms',
                                    ':hover': {
                                        opacity: '0.7',
                                    },
                                }}
                            >
                                <span className='mr-2'>Log Out</span>
                                <Logout
                                    sx={{
                                        color: 'white',
                                    }}
                                />
                            </Button>
                        </Box>

                        {/* User icon functionality for future */}
                        {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title='Open settings'>
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt='Remy Sharp'
                                        src='/static/images/avatar/2.jpg'
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id='menu-appbar'
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign='center'>
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
