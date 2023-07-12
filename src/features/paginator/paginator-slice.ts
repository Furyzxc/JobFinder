import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";

interface Paginator {
    pages: number[]
    count: number
    page: number,
    term: string
}

const initialState: Paginator = {
    pages: [],
    count: 20,
    page: 1,
    term: ''
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
        }
    }
})

export const {
    setPage,
    setSearchingTerm,
    setPages
} = paginatorSlice.actions

export const getPages = (state: RootState) => state.paginator.pages
export const getPaginator = (state: RootState) => state.paginator