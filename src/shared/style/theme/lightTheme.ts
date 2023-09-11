import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const lightTheme = createTheme({
	...defaultTheme,
	palette: {
		mode: 'light',
		primary: {
			main: '#2F80F6',
			light: '#F2EFE8',
			dark: '#E6E1DD',
		},
		secondary: {
			main: '#000',
			light: '#66615D',
			dark: '#FEFBF6',
		},
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: '#A7A398',
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				root: {
					fontSize: '16px',
				},
			},
		},
	},
})
