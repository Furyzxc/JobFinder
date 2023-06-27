import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth-api.ts";

interface AuthMePayloadTypes {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export const authMe = createAsyncThunk('auth/authLogin',
    async (payload: AuthMePayloadTypes, thunkAPI) => {
        const {email, password, rememberMe, captcha} = payload

        const data = await authApi.authLogin(email, password, rememberMe, captcha)

        thunkAPI.dispatch(setUserData(data.data))
    })

interface Auth {
    userData: {
        id: null | number
        login: null | string
        email: null | string
    },

    isFetching: boolean
}

const initialState: Auth = {
    userData: {
        id: null,
        login: null,
        email: null
    },

    isFetching: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<typeof initialState.userData>) {
            state.userData = action.payload
        }
    },

    extraReducers: builder => {
        builder.addCase(authMe.pending, (state) => {
            state.isFetching = true
        })

        builder.addCase(authMe.fulfilled, (state) => {
            state.isFetching = false
        })
    }
})

export const { setUserData} = authSlice.actions
