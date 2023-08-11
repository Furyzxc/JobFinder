import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	isAnyOf,
} from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { api } from '@/components/profile/api/api.ts'

interface Profile {
	isLoading: boolean // loader
	isError: boolean // if error occured during

	name: string | null // user name of profile
	avatar: string | null // avatar of profile (photos.small)
}

const initialState: Profile = {
	isLoading: false,
	isError: false,
	name: null,
	avatar: null,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfileName(state, action: PayloadAction<string>) {
			state.name = action.payload
		},

		setAvatar(state, action: PayloadAction<string | null>) {
			state.avatar = action.payload
		},
	},

	extraReducers: builder => {
		const { getProfile, getIsFollowed, getUserStatus } = api.endpoints

		builder.addMatcher(
			isAnyOf(
				getProfile.matchPending,
				getIsFollowed.matchPending,
				getUserStatus.matchPending
			),
			state => {
				state.isLoading = true
			}
		)

		builder.addMatcher(
			isAnyOf(
				getProfile.matchFulfilled,
				getIsFollowed.matchFulfilled,
				getUserStatus.matchFulfilled
			),
			state => {
				state.isLoading = false
				state.isError = false
			}
		)

		builder.addMatcher(
			isAnyOf(
				getProfile.matchRejected,
				getIsFollowed.matchRejected,
				getUserStatus.matchRejected
			),
			state => {
				state.isLoading = false
				state.isError = true
			}
		)
	},
})

export const profileActions = profileSlice.actions

export const requestProfileDataThunk = createAsyncThunk(
	'profile/requestProfileDataThunk',
	async (id: number, { dispatch }) => {
		const { getProfile, getIsFollowed, getUserStatus } = api.endpoints

		await Promise.all([
			dispatch(getProfile.initiate(id)),
			dispatch(getIsFollowed.initiate(id)),
			dispatch(getUserStatus.initiate(id)),
		])
	}
)

export const selectProfile = (state: RootState) => state.profile
