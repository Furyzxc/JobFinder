import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@/shared/utils/handleError.ts";
import { RequestLoginBody } from "@/shared/types/api/auth-types.ts";
import { authApi } from "./auth-api.ts";
import { clearUserData, setError, toggleIsAuth } from "./auth-slice.ts";


export const authMe = createAsyncThunk('auth/authMe',
    async (_, {dispatch}) => {
        try {
            await dispatch(authApi.endpoints.me.initiate(undefined, {forceRefetch: true}))
        }
        catch {
            handleError(dispatch)
        }
    })

export const authLogin = createAsyncThunk('auth/authLogin',
    async (body: RequestLoginBody, {dispatch}) => {
        try {
            const response = await dispatch(authApi.endpoints.login.initiate(body))
            if ('data' in response) {
                const {data} = response
                if (data && data.resultCode === 0) {
                    dispatch(authMe())
                }
                else {
                    data && data.messages.length > 0
                    ? dispatch(setError(data.messages[0]))
                    : handleError(dispatch)
                }
            }
        }
        catch (error) {
            handleError(dispatch)
        }
    })


export const authLogout = createAsyncThunk('auth/authLogout',
    async (_, {dispatch}) => {
        await dispatch(authApi.endpoints.logout.initiate())

        dispatch(toggleIsAuth(false))
        dispatch(clearUserData())
    })