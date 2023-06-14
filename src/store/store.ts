import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import bookReducer from './reducers/BookSlice';
import bookingReducer from './reducers/BookingSlice';

const rootReducer = combineReducers({
    userReducer,
    bookReducer,
    bookingReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
