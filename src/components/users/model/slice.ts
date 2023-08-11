import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { countPages } from '@/shared/utils/count-pages.ts'
import { api } from '../api/api.ts'

interface Paginator {
	// amount of pages
	pagesCount: number
	// users amount
	count: number
	// chosen page
	page: number
	// searching term
	term: string
	friend: boolean | null
}

const initialState: Paginator = {
	pagesCount: 0,
	count: 60,
	page: 1,
	term: '',
	friend: null,
}

export const paginatorSlice = createSlice({
	name: 'paginator',
	initialState,
	reducers: {
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
		},
	},

	extraReducers: builder => {
		const { getUsers } = api.endpoints

		builder.addMatcher(getUsers.matchFulfilled, (state, action) => {
			state.pagesCount = countPages(action.payload.totalCount, state.count)
		})

		builder.addMatcher(getUsers.matchRejected, state => {
			state.pagesCount = 0
		})
	},
})

export const paginatorActions = paginatorSlice.actions

export const getPagesCount = (state: RootState) => state.paginator.pagesCount
export const getPaginator = (state: RootState) => state.paginator
export const getFriend = (state: RootState) => state.paginator.friend
