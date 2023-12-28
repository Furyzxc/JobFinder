import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/shared/lib/config.ts'
import {
	SearchMusicRequest,
	SearchMusicResponse,
} from '@/components/music/api/types.ts'
import { getAuthHeader } from '@/components/music/lib/getAuthHeader.ts'

const { MUSIC_API_BASE_URL } = config

export const musicApi = createApi({
	reducerPath: 'musicApi',
	baseQuery: fetchBaseQuery({
		baseUrl: MUSIC_API_BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('Authorization', getAuthHeader() || '')

			return headers
		},
	}),
	endpoints: (builder) => ({
		searchMusic: builder.query<SearchMusicResponse, SearchMusicRequest>({
			query: (params) => ({
				url: 'search',
				params,
			}),
		}),
	}),
})

export const { useSearchMusicQuery } = musicApi
