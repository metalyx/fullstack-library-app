import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/forms/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Books from './components/books/Books';
import Users from './components/Users/Users';
import Profile from './components/Profile';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { getUserIdFromToken } from './helpers/getUserIdFromToken';
import { getUserInfo } from './helpers/getUserInfo';
import { setToken } from './utils/Axios';
import Bookings from './components/bookings/Bookings';
import CreateBooking from './components/bookings/CreateBooking';
import { ErrorBoundary } from 'react-error-boundary';
import CancelBooking from './components/bookings/CancelBooking';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useAppDispatch();
    const { logIn, setUser } = userSlice.actions;

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userId = await getUserIdFromToken();

            if (userId === null) {
                setIsLoading(false);
                return navigate('/login');
            }

            const token = window.localStorage.getItem('token') as string;
            setToken(token);

            const userInfo = await getUserInfo();

            dispatch(setUser(userInfo));
            dispatch(logIn());
            setIsLoading(false);

            if (location.pathname === '/login') {
                return navigate('/');
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <Layout>
                    <ErrorBoundary
                        fallback={
                            <p className='text-xl text-red-600'>
                                Sorry, the App crashed. Check the console for
                                more details.
                            </p>
                        }
                    >
                        <Routes>
                            <Route
                                path='/login'
                                element={<Login />}
                            />
                            <Route
                                path='/registrationSuccess'
                                element={<Login successReg />}
                            />
                            <Route
                                path='/registration'
                                element={<Login registration />}
                            />
                            <Route
                                path='/'
                                element={<Home />}
                            />
                            <Route
                                path='/books'
                                element={<Books />}
                            />
                            <Route
                                path='/profile'
                                element={<Profile />}
                            />
                            <Route
                                path='/users'
                                element={<Users />}
                            />
                            <Route
                                path='/bookings'
                                element={<Bookings />}
                            />
                            <Route
                                path='/createBooking'
                                element={<CreateBooking />}
                            />
                            <Route
                                path='/cancelBooking'
                                element={<CancelBooking />}
                            />
                        </Routes>
                    </ErrorBoundary>
                </Layout>
            )}
        </>
    );
};

export default App;
