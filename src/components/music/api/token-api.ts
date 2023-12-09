import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/shared/lib/config.ts'
import { RequestToken } from '@/components/music/api/types.ts'

const {
	MUSIC_TOKEN_API_BASE_URL,
	MUSIC_API_CLIENT_ID,
	MUSIC_API_CLIENT_SECRET,
} = config
export const tokenApi = createApi({
	reducerPath: 'tokenApi',
	baseQuery: fetchBaseQuery({
		baseUrl: MUSIC_TOKEN_API_BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/x-www-form-urlencoded')

			return headers
		},
	}),
	endpoints: (builder) => ({
		requestToken: builder.mutation<RequestToken, void>({
			query: () => ({
				url: '',
				method: 'POST',
				params: {
					grant_type: 'client_credentials',
					client_id: MUSIC_API_CLIENT_ID,
					client_secret: MUSIC_API_CLIENT_SECRET,
				},
			}),
		}),
	}),
})

export const { useRequestTokenMutation } = tokenApi
