import { StatusCode } from 'components/navigation/api/types.ts'
import { baseApi } from '@/shared/api/baseApi.ts'

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUserStatus: build.query<string, number>({
			query: (userId) => 'profile/status/' + userId,
			providesTags: () => ['STATUS'],
		}),

		setStatus: build.mutation<StatusCode, string>({
			query: (status) => ({
				url: 'profile/status',
				method: 'put',
				body: {
					status,
				},
			}),
			invalidatesTags: ['STATUS'],
		}),
	}),
})

export const { useGetUserStatusQuery, useSetStatusMutation } = api
