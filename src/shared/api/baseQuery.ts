import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_MAIN_BASE_URL

export const baseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	NonNullable<unknown>,
	FetchBaseQueryMeta
> = fetchBaseQuery({
	credentials: 'include',
	baseUrl: BASE_URL,
	prepareHeaders(headers) {
		headers.set('API-KEY', API_KEY)

		return headers
	},
})
