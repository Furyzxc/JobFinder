import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/appStore.ts";

interface Paginator {
    pages: number[]
    count: number
    page: number,
    term: string
    friend: boolean
}

const initialState: Paginator = {
    pages: [],
    count: 24,
    page: 1,
    term: '',
    friend: false
}

export const paginatorSlice = createSlice({
    name: 'paginator',
    initialState,
    reducers: {
        setPages(state, action: PayloadAction<number[]>) {
            state.pages = action.payload
        },

        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },

        setSearchingTerm(state, action: PayloadAction<string>) {
            state.term = action.payload
            state.page = 1
        },

        setFriend(state, action: PayloadAction<boolean>) {
            state.friend = action.payload
            state.page = 1
        }
    }
})

export const {
    setPage,
    setSearchingTerm,
    setPages,
    setFriend
} = paginatorSlice.actions

export const getPages = (state: RootState) => state.paginator.pages
export const getPaginator = (state: RootState) => state.paginator

export const getFriend = (state: RootState) => state.paginator.friend