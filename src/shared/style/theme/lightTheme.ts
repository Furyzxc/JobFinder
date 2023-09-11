import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#569CFF', // preloader and my message bg
			light: '#F2EFE8', // background
			dark: '#fff', // header
		},
		secondary: {
			main: '#E6E1DD', // navigation
			light: '#000', // dialog name text and send message icon
			dark: '#000', // pagination
		},
		info: {
			main: '#4B8ED1', // start chatting background and pagination bg
			light: '#F2EFE8', // start chatting text and pagination
			dark: '#60A0FF', // hover dialog
		},
		warning: {
			main: '#212b35', // last dialog activity time and message time
			light: '#8BC5FF', // selected dialog bg and messages divider
		},
		error: {
			main: '#25171C', // error text and cross
			light: '#E34B45', // error bg
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
