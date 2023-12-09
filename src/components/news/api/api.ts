import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/shared/lib/config.ts'
import {
	GetAvailableCategoriesResponse,
	GetAvailableLanguagesResponse,
	GetAvailableRegionseResponse,
	GetLatestNewsResponse,
	SearchNewsResponse,
} from '@/components/news/api/types.ts'

const { NEWS_API_BASE_URL, NEWS_API_KEY } = config

export const newsApi = createApi({
	reducerPath: 'news',
	baseQuery: fetchBaseQuery({
		baseUrl: NEWS_API_BASE_URL,
		// paramsSerializer: (params) => {
		// 	return { apiKey: API_KEY, ...params }
		// },
	}),
	endpoints: (builder) => ({
		searchNews: builder.query<SearchNewsResponse, unknown>({
			query: () => ({
				url: 'search',
			}),
		}),
		getNews: builder.query<GetLatestNewsResponse, void>({
			query: () => ({
				url: 'latest-news',
				params: {
					apiKey: encodeURIComponent(NEWS_API_KEY),
				},
			}),
		}),
		getAvailableLanguages: builder.query<GetAvailableLanguagesResponse, void>({
			query: () => ({
				url: 'available/languages',
			}),
		}),
		getAvailableCategories: builder.query<GetAvailableCategoriesResponse, void>(
			{
				query: () => ({
					url: 'available/categories',
				}),
			}
		),
		getAvailableRegions: builder.query<GetAvailableRegionseResponse, void>({
			query: () => ({
				url: 'available/regions',
			}),
		}),
	}),
})

export const {
	useGetNewsQuery,
	useLazyGetNewsQuery,
	useLazyGetAvailableRegionsQuery,
} = newsApi
