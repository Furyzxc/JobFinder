import { baseApi } from '@/shared/api/baseApi.ts'
import { apiTagTypes } from '@/shared/constants'
import { StatusCode } from './types.ts'

const { STATUS } = apiTagTypes

export const api = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUserStatus: build.query<string, number>({
			query: (userId) => 'profile/status/' + userId,
			providesTags: () => [STATUS],
		}),

		setStatus: build.mutation<StatusCode, string>({
			query: (status) => ({
				url: 'profile/status',
				method: 'PUT',
				body: {
					status,
				},
			}),
			invalidatesTags: [STATUS],
		}),
	}),
})

export const { useGetUserStatusQuery, useSetStatusMutation } = api
