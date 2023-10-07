import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/shared/api/baseQuery.ts'
import { apiTagTypes } from '@/shared/constants'

const { PROFILE, DIALOGS, STATUS, FOLLOW } = apiTagTypes

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery,
	tagTypes: [DIALOGS, PROFILE, FOLLOW, STATUS],

	endpoints: () => ({}),
})
