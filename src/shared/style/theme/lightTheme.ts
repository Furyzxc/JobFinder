import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const lightTheme = createTheme({
	...defaultTheme('#858279', undefined, 'white'),
	palette: {
		mode: 'light',
		primary: {
			main: '#4B8ED1', // unfollow icon, preloader, update profile button bg, hover slider track
			light: '#F2EFE8', // background
			dark: '#fff', // header
		},
		secondary: {
			main: '#E6E1DD', // navigation bg on focus
			light: '#000', // dialog name text and send message icon  and user status, slider thumb
			dark: '#000', // pagination
		},
		info: {
			main: '#4B8ED1', // start chatting background and pagination bg
			light: '#F2EFE8', // start chatting text and pagination
			dark: '#8BC5FF', // hover dialog
		},
		warning: {
			main: '#212b35', // last dialog activity time and message time
			light: '#60A0FF', // selected dialog bg and messages divider
			dark: '#569CFF', // my message bg
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#fff', // error bg, signout btn text
			dark: '#da3633', // signout btn bg
		},
	},
})
