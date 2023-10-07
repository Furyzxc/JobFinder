import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetLatestNewsResponse } from '@/components/news/api/types.ts'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL

export const newsApi = createApi({
	reducerPath: 'news',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		// paramsSerializer: (params) => {
		// 	return { apiKey: API_KEY, ...params }
		// },
	}),
	endpoints: (builder) => ({
		searchNews: builder.query<unknown, unknown>({
			query: () => ({
				url: 'search',
			}),
		}),
		getNews: builder.query<GetLatestNewsResponse, void>({
			query: () => ({
				url: 'latest-news',
				params: {
					apiKey: encodeURIComponent(API_KEY),
				},
			}),
		}),
		getAvailableLanguages: builder.query<unknown, unknown>({
			query: () => ({
				url: 'available/languages',
			}),
		}),
		getAvailableCategories: builder.query<unknown, unknown>({
			query: () => ({
				url: 'available/categories',
			}),
		}),
		getAvailableRegions: builder.query<unknown, unknown>({
			query: () => ({
				url: 'available/regions',
			}),
		}),
	}),
})

export const { useGetNewsQuery, useLazyGetNewsQuery } = newsApi
