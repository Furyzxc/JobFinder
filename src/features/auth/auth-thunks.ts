import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth-api.ts";
import {RequestLoginBody} from "../../types/api/auth-types.ts";

export const authMe = createAsyncThunk('auth/authMe',
    async (_, { dispatch }) => {
        await dispatch(authApi.endpoints.me.initiate())
    })


export const authLogin = createAsyncThunk('auth/authLogin',
    async (body: RequestLoginBody, { dispatch }) => {
        await dispatch(authApi.endpoints.login.initiate(body)).then(() => dispatch(authMe()))
    })


export const authLogout = createAsyncThunk('auth/authLogout',
    async (_, { dispatch }) => {
        await dispatch(authApi.endpoints.logout.initiate({}))
    })