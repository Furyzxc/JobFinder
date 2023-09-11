import { createTheme } from '@mui/material'

export const spotifyTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#107433', // preloader and my message
			light: '#121212', // background
			dark: '#000', // header
		},
		secondary: {
			main: '#1A1F24', // navigation
			light: '#fff', // dialog name text and send message icon
			dark: '#fff', //  pagination
		},
		info: {
			main: '#21262D', // start chatting background and friend message bg
			light: '#F2EFE8', // start chatting text
			dark: '#121212', // hover dialog
		},
		warning: {
			main: '#A1A1A1', // last dialog activity time  and message time
			light: '#5A5A5A', // selected dialog bg and messages divider
		},
		error: {
			main: '#E34B45', // error text and cross
			light: '#25171C', // error bg
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
