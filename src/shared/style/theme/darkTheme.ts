import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const darkTheme = createTheme({
	...defaultTheme,
	palette: {
		mode: 'dark',
		primary: {
			main: '#2F80F6',
			light: '#0d1117',
			dark: '#1A1F24',
		},
		secondary: {
			main: '#fff',
			dark: '#010409',
			light: '#E6EDF3',
		},
	},

	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: '#7D8590',
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				root: {
					color: '#E6EDF3',
					fontSize: '16px',
				},
			},
		},
	},
})
