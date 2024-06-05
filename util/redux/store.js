import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/authSlice';
import dailyReminderReducer from '../redux/dailyReminderSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dailyReminders: dailyReminderReducer,
    },
});