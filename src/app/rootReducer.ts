import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/components/authorization'
import { profileSettingsSlice } from '@/components/settings'
import { usersSlice } from '@/components/users'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[usersSlice.name]: usersSlice.reducer,
	[profileSettingsSlice.name]: profileSettingsSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})
