import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "@/slices/auth/auth-api.ts";
import {
    clearUserData, setError,
    setUserData, toggleIsAuth
} from "@/slices/auth/auth-slice.ts";
import { handleError } from "@/shared/utils/handleError.ts";
import { RequestLoginBody } from "@/shared/types/api/auth-types.ts";


export const authMe = createAsyncThunk('auth/authMe',
    async (_, {dispatch}) => {
        try {
            await dispatch(authApi.endpoints.me.initiate(undefined, {forceRefetch: true}))
                .then(({data}) => {
                    if (data && data.resultCode === 0) {
                        dispatch(setUserData(data.data))
                        dispatch(toggleIsAuth(true))
                    }
                })
        } catch {
            handleError(dispatch)
        }
    })

export const authLogin = createAsyncThunk('auth/authLogin',
    async (body: RequestLoginBody, {dispatch}) => {
        try {
            await dispatch(authApi.endpoints.login.initiate(body)).then(({data}: any) => {
                if (data && data.resultCode === 0) dispatch(authMe())
                else {
                    data && data.messages.length > 0
                        ? dispatch(setError(data.messages[0]))
                        : handleError(dispatch)
                }
            })
        } catch (error) {
            handleError(dispatch)
        }
    })


export const authLogout = createAsyncThunk('auth/authLogout',
    async (_, {dispatch}) => {
        await dispatch(authApi.endpoints.logout.initiate())
            .then(() => {
                dispatch(toggleIsAuth(false))
                dispatch(clearUserData())
            })
    })