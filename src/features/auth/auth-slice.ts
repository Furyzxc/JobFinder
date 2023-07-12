import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth-api.ts";


interface Auth {
    isAuth: boolean

    userInfo: {
        id: number | undefined
        email: string | null
        login: string | null
    }
}

const initialState: Auth = {
    isAuth: false,

    userInfo: {
        id: undefined,
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
            state.userInfo.id = undefined
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
            console.log(action)
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