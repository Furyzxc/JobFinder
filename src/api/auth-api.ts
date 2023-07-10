import { api } from "./api.ts";
import { AuthMeResponse, LoginResponse, RequestLoginBody } from "../types/api-types.ts";

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        me: build.query<AuthMeResponse, void>({
            query: () => 'auth/me'
        }),

        login: build.mutation<LoginResponse, RequestLoginBody>({
            query: (body) => ({
                url: 'auth/login',
                method: 'post',
                body
            })
        }),

        logout: build.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'post'
            })
        })
    })
})