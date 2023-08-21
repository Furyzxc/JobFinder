import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/components/authorization/model'
import { profileSettingsSlice } from '@/components/settings/model'
import { usersSlice } from '@/components/users/model'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[usersSlice.name]: usersSlice.reducer,
	[profileSettingsSlice.name]: profileSettingsSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})
