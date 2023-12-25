import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootMiddleware } from '@/app/rootMiddleware.ts'
import { rootReducer } from './rootReducer.ts'

const makeStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(rootMiddleware),

		devTools: true,
	})

	setupListeners(store.dispatch)

	return store
}

export const appStore = makeStore()

export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>

setupListeners(appStore.dispatch)
