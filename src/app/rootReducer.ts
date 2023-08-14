import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/components/authorization'
import { profileSlice } from '@/components/profile'
import { profileSettingsSlice } from '@/components/settings'
import { usersSlice } from '@/components/users'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[profileSlice.name]: profileSlice.reducer,
	[usersSlice.name]: usersSlice.reducer,
	[profileSettingsSlice.name]: profileSettingsSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})
