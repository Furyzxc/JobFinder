import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth-api.ts";
import { setUserProfile } from "../profile";


// @ts-ignore
export const toggleIsFetching = (state, payload: boolean) => {
    state.isFetching = payload
}

export const authMe = createAsyncThunk('auth/authMe',
    // @ts-ignore
    async (payload, thunkAPI) => {
        const data = await authApi.authMe()

        data.resultCode === 0
            ? thunkAPI.dispatch(toggleIsAuth(true))
            : thunkAPI.dispatch(toggleIsAuth(false))
    })

interface AuthLoginPayloadTypes {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export const authLogin = createAsyncThunk('auth/authLogin',
    async (payload: AuthLoginPayloadTypes, thunkAPI) => {
        const {email, password, rememberMe, captcha} = payload

        const data = await authApi.authLogin(email, password, rememberMe, captcha)
        console.log(data)

        if (data.resultCode === 0) {
            thunkAPI.dispatch(setUserProfile(data.data.userId))
        }
    })

interface Auth {
    isAuth: boolean
    isFetching: boolean

    userInfo: {
        id: number
        email: string
        login: string
    }
}

const initialState: Auth = {
    isAuth: false,
    isFetching: false,

    userInfo: {
        id: 0,
        email: '',
        login: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<typeof initialState.userInfo>) {
            state.userInfo = action.payload
        },

        toggleIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    },

    extraReducers: builder => {
        builder.addCase(authMe.pending,
            state => {
                toggleIsFetching(state, true)
            })

        builder.addCase(authMe.fulfilled,
            state => {
                toggleIsFetching(state, false)
            })

        builder.addCase(authLogin.pending,
            state => {
                toggleIsFetching(state, true)
            })

        builder.addCase(authLogin.fulfilled,
            state => {
                toggleIsFetching(state, false)
            })
    }
})

export const {
    setUserData,
    toggleIsAuth
} = authSlice.actions