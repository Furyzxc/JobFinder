import {
  AuthMeResponse,
  LoginResponse,
  RequestLoginBody,
} from "@/shared/types/api/auth-types.ts";
import { baseApi } from "@/shared/api/baseApi.ts";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<AuthMeResponse, void>({
      query: () => "auth/me",
    }),

    login: build.mutation<LoginResponse, RequestLoginBody>({
      query: (body) => ({
        url: "auth/login",
        method: "post",
        body,
      }),
    }),

    logout: build.mutation<unknown, void>({
      query: () => ({
        url: "auth/logout",
        method: "post",
      }),
    }),
  }),
});
