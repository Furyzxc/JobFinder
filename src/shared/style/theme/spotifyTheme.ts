import { createTheme } from '@mui/material'

export const spotifyTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#107433', // preloader color
			light: '#121212', // background
			dark: '#fff', // navigation
		},
		secondary: {
			// '#1A1F24' - navigation
			main: '#1A1F24', // dialog text, header color
			light: '#fff',
			dark: '#000',
		},
		info: {
			main: '#21262D', // start chatting background
			light: '#F2EFE8', // start chatting text
			dark: '#000',
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
					color: '#E6EDF3',
					fontSize: '16px',
				},
			},
		},

		MuiPaginationItem: {
			styleOverrides: {
				ellipsis: {
					color: '#1ED760',
				},
			},
		},
	},
})
