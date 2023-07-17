import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";


interface Auth {
    isAuth: boolean

    userInfo: {
        id: number | null
        email: string | null
        login: string | null
    }

    error: string | null
}

const initialState: Auth = {
    isAuth: false,

    userInfo: {
        id: null,
        email: null,
        login: null
    },

    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<typeof initialState.userInfo>) {
            state.userInfo = action.payload
        },

        clearUserData({ userInfo}) {
            userInfo.id = null
            userInfo.email = null
            userInfo.login = null
        },

        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },

        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export const {
    setUserData,
    toggleIsAuth,
    clearUserData,
    setError
} = authSlice.actions

export const getError = (state: RootState) => state.auth.error