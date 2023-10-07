import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ThemeType = 'dark' | 'light' | 'spotify'

interface Theme {
	chosenTheme: ThemeType
	previewTheme: ThemeType | null // theme on hover
}

const initialState: Theme = {
	chosenTheme: (localStorage.getItem('theme') as ThemeType | null) || 'dark',
	previewTheme: null,
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

		setPreviewTheme(
			state,
			action: PayloadAction<typeof initialState.previewTheme>
		) {
			state.previewTheme = action.payload
		},
	},
})

export const themeActions = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme
