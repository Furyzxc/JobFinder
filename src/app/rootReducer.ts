import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/components/authorization'
import { profileSlice } from '@/components/profile/profile'
import { paginatorSlice } from '@/components/users'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[profileSlice.name]: profileSlice.reducer,
	[paginatorSlice.name]: paginatorSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})
