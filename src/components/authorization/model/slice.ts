import {
	PayloadAction,
	createAsyncThunk,
	createSlice,
	isAnyOf,
} from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { handleError } from '@/shared/utils/handleError.ts'
import { api } from '../api/api.ts'
import { RequestLoginBody } from '../api/types.ts'

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
	// error message
	error: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
	},

	extraReducers: builder => {
		builder.addMatcher(isAnyOf(authMe.pending, authLogin.pending), state => {
			// turning isLoading when requests are processing
			state.isLoading = true
		})

		builder.addMatcher(
			isAnyOf(authMe.fulfilled, authLogin.fulfilled),
			state => {
				// turning isLoading when requests have finished processing
				state.isLoading = false
			}
		)

		builder.addMatcher(
			api.endpoints.me.matchFulfilled,
			(state, { payload }) => {
				if (payload.resultCode === SUCCESS_CODE) {
					// if request is successful we set authorized to true
					// and setting user data from server response
					state.isAuthorized = true
					state.userInfo = payload.data
				}
			}
		)

		builder.addMatcher(api.endpoints.logout.matchFulfilled, state => {
			state.isAuthorized = false

			// clearing state's user info
			state.userInfo.id = null
			state.userInfo.email = null
			state.userInfo.login = null
		})
	},
})

export const { setError } = authSlice.actions

export const selectAuthState = (state: RootState) => state.auth

export const authMe = createAsyncThunk(
	'auth/authMe',
	async (_, { dispatch }) => {
		try {
			await dispatch(
				api.endpoints.me.initiate(undefined, { forceRefetch: true })
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
			const response = await dispatch(api.endpoints.login.initiate(body))

			// check if response contains data, because there may be error
			if ('data' in response) {
				// taking data from response
				const { data } = response

				if (data.resultCode === SUCCESS_CODE) {
					// if request is successful we send auth me request on server, that authorizes us
					dispatch(authMe())
				} else {
					// if request is failed we set error message
					data.messages.length > 0
						? dispatch(setError(data.messages[0])) // if server gave us error message we set it to the state
						: handleError(dispatch) // otherwise set 'Some error occurred' error message
				}
			}
		} catch (error) {
			// set 'Some error occurred' error message to state
			handleError(dispatch)
		}
	}
)

export const authActions = authSlice.actions
