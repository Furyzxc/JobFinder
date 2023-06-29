import { configureStore } from "@reduxjs/toolkit";

// - Reducers

import { authSlice } from "../features/auth";
import { profileSlice } from "../features/profile";
import { usersSlice } from "../features/users";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        users: usersSlice.reducer
    },

    devTools: true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>