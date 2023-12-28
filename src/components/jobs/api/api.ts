import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseJobsSearch } from '@/components/jobs/api/types.ts'

export const jobsApi = createApi({
	reducerPath: 'jobs',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://pokeapi.co/api/v2/',
		headers: {},
	}),
	endpoints: (builder) => ({
		jobs: builder.query<ResponseJobsSearch, string>({
			query: (params) => params,
		}),
	}),
})
