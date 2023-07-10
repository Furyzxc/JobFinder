import { api } from "./api.ts";
import { GetUsersResponse, RequestUsersBody } from "../types/api-types.ts";

export const usersApi = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<GetUsersResponse, RequestUsersBody>({
            query: ({pageSize = 10, pageNumber = 1}) => `users?count=${pageSize}&page=${pageNumber}`
        })
    })
})