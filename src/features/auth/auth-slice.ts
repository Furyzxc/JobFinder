import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth-api.ts";


interface Auth {
    isAuth: boolean

    userInfo: {
        id: number | null
        email: string | null
        login: string | null
    }
}

const initialState: Auth = {
    isAuth: false,

    userInfo: {
        id: null,
        email: null,
        login: null
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<typeof initialState.userInfo>) {
            state.userInfo = action.payload
        },

        clearUserData(state) {
            state.userInfo.id = null
            state.userInfo.email = null
            state.userInfo.login = null
        },

        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    },

    extraReducers: builder => {
        builder.addMatcher(authApi.endpoints.me.matchFulfilled, (state, action) => {
            if (action.payload.resultCode === 0) {
                state.isAuth = true
                state.userInfo = action.payload.data
            }
        })

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
            if (action.payload.resultCode === 0) state.isAuth = true
        })

        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
            state.isAuth = false
        })
    }
})

export const {
    setUserData,
    toggleIsAuth
} = authSlice.actions