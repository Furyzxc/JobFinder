import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	GetNewsRequestParams,
	GetNewsResponse,
} from '@/components/news/api/types.ts'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
	reducerPath: 'news',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://newsapi.org/v2/',
		prepareHeaders(headers) {
			headers.set('X-Api-Key', API_KEY)

			return headers
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query<GetNewsResponse, void>({
			query: () => ({
				url: 'everything',
				params: {
					q: 'bodybuilding',
					language: 'en',
					pageSize: 20,
				} as GetNewsRequestParams,
			}),
		}),
	}),
})

export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi
