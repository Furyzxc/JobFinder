import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "../features/app";
import { authSlice } from "../features/auth";
import { profileSlice } from "../features/profile";
import { dialogsSlice } from "../features/dialogs";
import { usersSlice } from "../features/users";
import { paginatorSlice } from "../features/paginator";
import { api } from "../api/api.ts";

export const rootReducer = combineReducers({
    [appSlice.name]: appSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [dialogsSlice.name]: dialogsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [paginatorSlice.name]: paginatorSlice.reducer,
    [api.reducerPath]: api.reducer
})