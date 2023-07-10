import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetUsersResponse, UserResData } from "../../types/api-types.ts";
import { usersApi } from "../../api/users-api.ts";

export interface UsersTypes {
    isLoading: boolean

    users: UserResData[]
    currentPage: number,
}

const initialState: UsersTypes = {
    isLoading: false,

    users: [],

    currentPage: 1,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<GetUsersResponse>) {
            state.users = action.payload.items
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },

    extraReducers: builder => {
        builder.addMatcher(usersApi.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                state.users = action.payload.items
            })
    }
})

export const {
    setUsers,
    setCurrentPage,
} = usersSlice.actions

