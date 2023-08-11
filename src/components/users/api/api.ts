import { baseApi } from '@/shared/api/baseApi.ts'
import { GetUsersResponse, RequestUsersBody } from './types.ts'

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		// recieves
		// 1. array of users
		// 2. total count of users
		// 3. error - string or null
		getUsers: build.query<GetUsersResponse, RequestUsersBody>({
			query: ({ count = 20, page = 1, term = '', friend = null }) =>
				`users?count=${count}&page=${page}&term=${term}${
					friend ? `&friend=${friend}` : ''
				}`,
		}),
	}),
})

export const { useGetUsersQuery } = api
