import { baseApi } from '@/shared/api/baseApi.ts'
import { apiTagTypes } from '@/shared/constants'
import { AuthMeResponse, LoginResponse, RequestLoginBody } from './types.ts'

const { PROFILE, DIALOGS, MESSAGES, STATUS, FOLLOW } = apiTagTypes

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		me: build.query<AuthMeResponse, void>({
			query: () => 'auth/me',
		}),

		login: build.mutation<LoginResponse, RequestLoginBody>({
			query: (body) => ({
				url: 'auth/login',
				method: 'POST',
				body,
			}),
		}),

		logout: build.mutation<unknown, void>({
			query: () => ({
				url: 'auth/logout',
				method: 'POST',
			}),
			invalidatesTags: [PROFILE, DIALOGS, MESSAGES, STATUS, FOLLOW],
		}),
	}),
})

export const { useLogoutMutation } = api
