import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#2F80F6', // preloader
			light: '#F2EFE8', // background
			dark: '#000', // header
		},
		secondary: {
			main: '#E6E1DD', // navigation
			light: '#000',
			dark: '#fff',
		},
		info: {
			main: '#2B5278', // start chatting background
			light: '#F2EFE8', // start chatting text
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

		MuiPaginationItem: {
			styleOverrides: {
				ellipsis: {
					color: 'white',
				},
			},
		},
	},
})
