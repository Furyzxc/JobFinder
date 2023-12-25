import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ThemeType = 'dark' | 'light' | 'spotify' | 'material'

interface Theme {
	chosenTheme: ThemeType
}

const initialState: Theme = {
	chosenTheme: (localStorage.getItem('theme') as ThemeType | null) || 'dark',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(
			state,
			{ payload }: PayloadAction<typeof initialState.chosenTheme>
		) {
			state.chosenTheme = payload
			localStorage.setItem('theme', payload)
		},
	},
})

export const themeActions = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme
