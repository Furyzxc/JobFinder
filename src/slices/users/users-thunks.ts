import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApi } from "@/slices/users/users-api.ts";
import { RequestUsersBody } from "@/shared/types/api/users-types.ts";
import { setUsers } from "@/slices/users/users-slice.ts";
import { countPages } from "@/shared/utils/count-pages.ts";
import { setPages } from "@/slices/paginator";

// gets users from server and sets it up in the state
export const requestUsers = createAsyncThunk('users/requestUsers',
    async (body: RequestUsersBody, {dispatch}) => {
        const response = await dispatch(usersApi.endpoints.getUsers.initiate(body))

        if ('data' in response) {
            const {data} = response
            if (data) {
                const pages = countPages(data.totalCount, body.count, 18)

                dispatch(setPages(pages))
                dispatch(setUsers(data.items))
            }
        }
    })