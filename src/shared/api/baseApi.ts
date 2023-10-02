import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiTagTypes } from '@/shared/constants'

const apiKey = import.meta.env.VITE_API_KEY

const { PROFILE, DIALOGS, STATUS, FOLLOW } = apiTagTypes

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		credentials: 'include',
		baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
		prepareHeaders(headers) {
			headers.set('API-KEY', apiKey)

			return headers
		},
	}),
	tagTypes: [DIALOGS, PROFILE, FOLLOW, STATUS],

	endpoints: () => ({}),
})
