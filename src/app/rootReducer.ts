import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "@/slices/auth";
import { profileSlice } from "@/slices/profile";
import { dialogsSlice } from "@/slices/dialogs";
import { paginatorSlice } from "@/slices/paginator";
import { api } from "@/shared/api/baseApi.ts";


export const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [dialogsSlice.name]: dialogsSlice.reducer,
    [paginatorSlice.name]: paginatorSlice.reducer,
    [api.reducerPath]: api.reducer
})