import {createAsyncThunk} from "@reduxjs/toolkit";
import {authApi} from "../../api/auth-api.ts";
import {RequestLoginBody} from "../../types/api/auth-types.ts";
import {clearUserData, setError, setUserData, toggleIsAuth} from "./auth-slice.ts";

export const authMe = createAsyncThunk('auth/authMe',
    async (_, {dispatch}) => {
        await dispatch(authApi.endpoints.me.initiate())
            .then(({data}) => {
                if (data && data.resultCode === 0) {
                    dispatch(setUserData(data.data))
                    dispatch(toggleIsAuth(true))
                }

                else setError('Some error occured')
            })
    })


export const authLogin = createAsyncThunk('auth/authLogin',
    async (body: RequestLoginBody, {dispatch}) => {
        // @ts-ignore
        await dispatch(authApi.endpoints.login.initiate(body)).then(({data}) => {
            if (data && data.resultCode === 0) dispatch(authMe())
            else {
                data && data.messages.length > 0
                    ? dispatch(setError(data.messages[0]))
                    : dispatch(setError('Some error'))
            }
        })
    })


export const authLogout = createAsyncThunk('auth/authLogout',
    async (_, {dispatch}) => {
        await dispatch(authApi.endpoints.logout.initiate())
            .then(() => {
                dispatch(toggleIsAuth(false))
                dispatch(clearUserData())
            })
    })