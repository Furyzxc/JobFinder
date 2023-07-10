import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersApi } from "../../api/users-api.ts";
import { RequestUsersBody } from "../../types/api-types.ts";


export const requestUsers = createAsyncThunk('users/fetchUsers',
    async (body: RequestUsersBody, { dispatch }) => {
        await dispatch(usersApi.endpoints.getUsers.initiate(body))
    })