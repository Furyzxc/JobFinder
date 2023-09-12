import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const lightTheme = createTheme({
	...defaultTheme('#858279', undefined, 'white'),
	palette: {
		mode: 'light',
		primary: {
			main: '#4B8ED1', // unfollow icon, preloader
			light: '#F2EFE8', // background
			dark: '#fff', // header
		},
		secondary: {
			main: '#E6E1DD', // navigation
			light: '#000', // dialog name text and send message icon  and user status, slider thumb
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
			dark: '#569CFF', // my message bg
		},
		error: {
			main: '#25171C', // error text and cross
			light: '#E34B45', // error bg
		},
	},
})
