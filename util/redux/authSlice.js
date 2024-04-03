import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        storeToken: (state, action) => {
            state.token = action.payload;
        },
        login: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        logout: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    },
});

export const { storeToken, login, logout } = authSlice.actions
export default authSlice.reducer;