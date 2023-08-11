import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	isAnyOf,
} from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { handleError } from '@/shared/utils/handleError.ts'
import { RequestLoginBody } from '../api/types.ts'
import { authApi } from '@/components/authorization/api/api.ts'

const SUCCESS_CODE = 0 as number

interface Auth {
	isAuthorized: boolean
	isLoading: boolean

	userInfo: {
		id: number | null
		email: string | null
		login: string | null
	}

	error: string | null
}

const initialState: Auth = {
	isAuthorized: false,
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
			state.isAuthorized = action.payload
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
					state.isAuthorized = true
					state.userInfo = payload.data
				}
			}
		)
	},
})

export const { toggleIsAuth, clearUserData, setError } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth

export const authMe = createAsyncThunk(
	'auth/authMe',
	async (_, { dispatch }) => {
		try {
			await dispatch(
				authApi.endpoints.me.initiate(undefined, { forceRefetch: true })
			)
		} catch {
			handleError(dispatch)
		}
	}
)

export const authLogin = createAsyncThunk(
	'auth/authLogin',
	async (body: RequestLoginBody, { dispatch }) => {
		try {
			const response = await dispatch(authApi.endpoints.login.initiate(body))
			if ('data' in response) {
				const { data } = response
				if (data && data.resultCode === 0) {
					dispatch(authMe())
				} else {
					data && data.messages.length > 0
						? dispatch(setError(data.messages[0]))
						: handleError(dispatch)
				}
			}
		} catch (error) {
			handleError(dispatch)
		}
	}
)

export const authLogout = createAsyncThunk(
	'auth/authLogout',
	async (_, { dispatch }) => {
		await dispatch(authApi.endpoints.logout.initiate())

		dispatch(toggleIsAuth(false))
		dispatch(clearUserData())
	}
)
