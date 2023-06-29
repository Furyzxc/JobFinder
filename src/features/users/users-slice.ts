import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/users-api.ts";
import { toggleIsFetching } from "../auth";

interface PayloadTypes {
    pageLength?: number,
    pageNumber?: number
}

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async (payload: PayloadTypes, thunkAPI) => {

        const data = await usersAPI.getUsers(payload.pageLength, payload.pageNumber)

        thunkAPI.dispatch(setUsers(data.items))
        thunkAPI.dispatch(setTotalCount(data.totalCount))

        const pageNumber = payload.pageNumber

        pageNumber && thunkAPI.dispatch(setCurrentPage(pageNumber))
    })

interface Users {
    isFetching: boolean,

    users: {
        id: number,
        name: string,
        photos: {
            small: null | string,
            large: null | string
        }
        status: null | string,
    }[],

    pageLength: number
    currentPage: number,
    totalCount: number
}

const initialState: Users = {
    isFetching: false,

    users: [],

    pageLength: 10,
    currentPage: 1,
    totalCount: 10
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<typeof initialState.users>) {
            state.users = [...action.payload]
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },

        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        }
    },

    extraReducers: builder => {
        builder.addCase(fetchUsers.pending,
            (state) => { toggleIsFetching(state, true) })

        builder.addCase(fetchUsers.fulfilled,
            (state) => { toggleIsFetching(state, false) })
    }
})

export const {
    setUsers,
    setCurrentPage,
    setTotalCount,
} = usersSlice.actions

