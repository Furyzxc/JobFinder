import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2F80F6', // preloader color
			light: '#0d1117', // background
			dark: '#fff', // header
		},
		secondary: {
			main: '#1A1F24', // navigation
			dark: '#010409',
			light: '#E6EDF3',
		},
		info: {
			main: '#21262D', // start chatting background
			light: '#F2EFE8', // start chatting text
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

		MuiPaginationItem: {
			styleOverrides: {
				ellipsis: {
					color: 'white',
				},
			},
		},
	},
})