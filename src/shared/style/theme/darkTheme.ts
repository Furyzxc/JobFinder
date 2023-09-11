import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2B5278', // preloader and my message bg
			light: '#0d1117', // background
			dark: '#010409', // header
		},
		secondary: {
			main: '#1A1F24', // navigation
			light: '#E6EDF3', // dialog name text and send message icon
			dark: '#fff', // pagination
		},
		info: {
			main: '#21262D', // start chatting background
			light: '#F2EFE8', // start chatting text
			dark: '#212b35', // hover dialog bg
		},
		warning: {
			main: '#758495', // last dialog activity time and message time
			light: '#2B5278', // selected dialog bg  and messages divider
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
