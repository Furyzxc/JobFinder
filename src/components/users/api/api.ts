import { baseApi } from '@/shared/api/baseApi.ts'
import { GetUsersResponse } from './types.ts'

export const api = baseApi.injectEndpoints({
	endpoints: build => ({
		// response contains:
		// 1. array of users
		// 2. total count of users - number
		// 3. error - string or null
		getUsers: build.query<GetUsersResponse, string>({
			query: params => ({
				url: 'users' + params,
			}),
		}),
	}),
})

export const { useGetUsersQuery } = api
