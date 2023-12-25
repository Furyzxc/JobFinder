import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi.ts'
import { authSlice } from '@/components/authorization/model'
import { chatSlice } from '@/components/dialogs/model'
import { musicApi, tokenApi } from '@/components/music/api'
import { newsApi } from '@/components/news/api'
import { profileSettingsSlice, themeSlice } from '@/components/settings/model'

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[chatSlice.name]: chatSlice.reducer,
	[profileSettingsSlice.name]: profileSettingsSlice.reducer,
	[themeSlice.name]: themeSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
	[newsApi.reducerPath]: newsApi.reducer,
	[tokenApi.reducerPath]: tokenApi.reducer,
	[musicApi.reducerPath]: musicApi.reducer,
})
