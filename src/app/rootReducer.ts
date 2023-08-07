import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/slices/auth'
import { dialogsSlice } from '@/slices/dialogs'
import { paginatorSlice } from '@/slices/paginator'
import { profileSlice } from '@/slices/profile'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[profileSlice.name]: profileSlice.reducer,
	[dialogsSlice.name]: dialogsSlice.reducer,
	[paginatorSlice.name]: paginatorSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})
