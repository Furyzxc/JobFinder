import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": apiKey
    }
});

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        credentials: 'include',
        baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
        prepareHeaders(headers) {
            headers.set("API-KEY", apiKey)

            return headers
        }
    }),

    endpoints: () => ({})
})