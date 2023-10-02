import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { queryErrorLogger } from '@/shared/api/queryErrorLogger.ts'
import { rootReducer } from './rootReducer.ts'

export const appStore = configureStore({
	reducer: rootReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware, queryErrorLogger),

	devTools: true,
})

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>
