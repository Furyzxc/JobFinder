import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResData } from "@/shared/types/api/users-types.ts";
import { RootState } from "@/app/appStore.ts";


export interface UsersTypes {
    users: UserResData[]
}

const initialState: UsersTypes = {
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserResData[]>) {
            state.users = action.payload
        }
    }
})

export const {
    setUsers
} = usersSlice.actions

export const getUsers = (state: RootState) => state.users.users
