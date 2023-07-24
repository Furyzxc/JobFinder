import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResData } from "@/shared/types/api/users-types.ts";
import { RootState } from "@/app/appStore.ts";
import { requestUsers } from "@/slices/users/users-thunks.ts";


export interface UsersTypes {
    isLoading: boolean
    users: UserResData[]
}

const initialState: UsersTypes = {
    isLoading: false,
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserResData[]>) {
            state.users = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(requestUsers.pending,
            state => { state.isLoading = true })

        builder.addCase(requestUsers.fulfilled,
            state => { state.isLoading = false })
    }
})

export const {
    setUsers
} = usersSlice.actions

export const getUsers = (state: RootState) => state.users.users
export const selectUsersLoading = (state: RootState) => state.users.isLoading
