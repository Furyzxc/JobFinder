import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/shared/api/baseQuery.ts'
import { apiTagTypes } from '@/shared/constants'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery,
	tagTypes: Object.values(apiTagTypes),

	endpoints: () => ({}),
})
