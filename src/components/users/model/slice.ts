import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { countPages } from '@/shared/utils/count-pages.ts'
import { api } from '../api/api.ts'

interface Users {
	paginator: {
		// amount of pages
		pagesCount: number
		// users amount
		count: number
		// chosen page
		page: number
	}
	// searching users by term
	term: string
	// filtering users by followed(true)/unfollowed(false)/all(null)
	friend: boolean | null
}

const initialState: Users = {
	paginator: {
		pagesCount: 0,
		count: 60,
		page: 1,
	},

	term: '',
	friend: null,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.paginator.page = action.payload
		},

		setSearchingTerm(state, action: PayloadAction<string>) {
			state.term = action.payload
			state.paginator.page = 1
		},

		setFriend(state, action: PayloadAction<boolean>) {
			state.friend = action.payload
			state.paginator.page = 1
		},
	},

	extraReducers: builder => {
		const { getUsers } = api.endpoints

		// paginator destructured from state
		builder.addMatcher(getUsers.matchFulfilled, ({ paginator }, action) => {
			paginator.pagesCount = countPages(
				action.payload.totalCount,
				paginator.count
			)
		})

		builder.addMatcher(getUsers.matchRejected, state => {
			state.paginator.pagesCount = 0
		})
	},
})

export const paginatorActions = usersSlice.actions

export const selectUsersState = (state: RootState) => state.users
export const selectPaginator = (state: RootState) => state.users.paginator
