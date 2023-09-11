import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'

export type ThemeType = 'dark' | 'light' | 'spotify'

interface Theme {
	theme: ThemeType
}

const initialState: Theme = {
	theme: 'dark',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<typeof initialState.theme>) {
			state.theme = action.payload
		},
	},
})

export const themeActions = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.theme
