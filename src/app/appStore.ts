import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '@/shared/api/baseApi.ts'
import { queryErrorLogger } from '@/shared/api/queryErrorLogger.ts'
import { newsApi } from '@/components/news/api'
import { rootReducer } from './rootReducer.ts'

const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				baseApi.middleware,
				newsApi.middleware,
				queryErrorLogger
			),

		devTools: true,
	})

	setupListeners(store.dispatch)

	return store
}

export const appStore = makeStore()

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>

setupListeners(appStore.dispatch)
