import { baseApi } from '@/shared/api/baseApi.ts'
import { GetUsersResponse, RequestUsersBody } from './types.ts'

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		// response contains:
		// 1. array of users
		// 2. total count of users - number
		// 3. error - string or null
		getUsers: build.query<GetUsersResponse, RequestUsersBody>({
			query: ({ term, friend = null, ...requiredParams }) => ({
				url: 'users',
				params: {
					...requiredParams,

					term: term || undefined,
					friend: friend || undefined,
				},
			}),
		}),
	}),
})

export const { useGetUsersQuery } = api
