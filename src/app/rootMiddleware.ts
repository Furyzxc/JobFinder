import { Middleware } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { queryErrorLogger } from '@/shared/api/queryErrorLogger.ts'
import { musicApi, tokenApi } from '@/components/music/api'
import { newsApi } from '@/components/news/api'

export const rootMiddleware: Middleware[] = [
	baseApi.middleware,
	newsApi.middleware,
	tokenApi.middleware,
	musicApi.middleware,
	queryErrorLogger,
]
