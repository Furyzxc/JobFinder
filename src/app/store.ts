import { configureStore } from "@reduxjs/toolkit";

// - Reducers

import { authSlice } from "../features/auth";
import { profileSlice } from "../features/profile";
import { friendProfileSlice } from "../features/friendProfile";
import { usersSlice } from "../features/users";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        friendProfile: friendProfileSlice.reducer,
        users: usersSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>