import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { authApi } from '@/slices/auth/auth-api.ts'
import { authLogin, authMe } from './auth-thunks.ts'

const SUCCESS_CODE = 0 as number

interface Auth {
	isAuth: boolean
	isLoading: boolean

	userInfo: {
		id: number | null
		email: string | null
		login: string | null
	}

	error: string | null
}

const initialState: Auth = {
	isAuth: false,
	isLoading: false,

	userInfo: {
		id: null,
		email: null,
		login: null,
	},

	error: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearUserData({ userInfo }) {
			userInfo.id = null
			userInfo.email = null
			userInfo.login = null
		},

		toggleIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},

		setError(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
	},

	extraReducers: builder => {
		builder.addMatcher(isAnyOf(authMe.pending, authLogin.pending), state => {
			state.isLoading = true
		})

		builder.addMatcher(
			isAnyOf(authMe.fulfilled, authLogin.fulfilled),
			state => {
				state.isLoading = false
			}
		)

		builder.addMatcher(
			authApi.endpoints.me.matchFulfilled,
			(state, { payload }) => {
				if (payload.resultCode === SUCCESS_CODE) {
					state.isAuth = true
					state.userInfo = payload.data
				}
			}
		)
	},
})

export const { toggleIsAuth, clearUserData, setError } = authSlice.actions

export const getError = (state: RootState) => state.auth.error
export const getAuthLoading = (state: RootState) => state.auth.isLoading
export const selectIsAuth = (state: RootState) => state.auth.isAuth
