import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'

export type ThemeType = 'dark' | 'light' | 'spotify'

interface Theme {
	theme: ThemeType
}

const initialState: Theme = {
	theme: (localStorage.getItem('theme') as ThemeType) || 'dark',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, { payload }: PayloadAction<typeof initialState.theme>) {
			state.theme = payload
			localStorage.setItem('theme', payload)
		},
	},
})

export const themeActions = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.theme
