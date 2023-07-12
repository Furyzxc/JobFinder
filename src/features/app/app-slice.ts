import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authMe } from "../auth";
import {RootState} from "../../app/store.ts";


export const initializeApp = createAsyncThunk('app/initializeApp',
    async (_, { dispatch }) => {
        const promise = await dispatch(authMe());

        Promise.all([promise])
            .then(() => dispatch(initializedSuccess()))
    })

interface App {
    initialized: boolean
}

const initialState: App = {
    initialized: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializedSuccess(state) {
            state.initialized = true
        }
    }
})

export const {
    initializedSuccess
} = appSlice.actions

export const getAuth = (state: RootState) => state.auth.isAuth