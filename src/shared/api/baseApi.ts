import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_API_KEY
console.log(apiKey)
export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		credentials: 'include',
		baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
		prepareHeaders(headers) {
			headers.set('API-KEY', apiKey)
			headers.set('Content-Type', 'application/json')

			return headers
		},
	}),
	tagTypes: ['MESSAGES', 'DIALOGS', 'PROFILE', 'FOLLOW'],

	endpoints: () => ({}),
})
