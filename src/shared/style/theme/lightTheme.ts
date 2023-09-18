import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const lightTheme = createTheme({
	...defaultTheme('#858279', undefined, 'white'),
	palette: {
		mode: 'light',
		primary: {
			main: '#4B8ED1', // unfollow icon, preloader, hover slider track
			light: '#F2EFE8', // background
			dark: '#fff', // header and input bg
		},
		secondary: {
			main: '#E6E1DD', // navigation bg on focus, hover cross, clear status, preloader bg
			light: '#000', // dialog name text and send message icon  and user status, slider thumb, pagination, suggestion
			dark: '#E6E1DD', //  status bg
		},
		info: {
			main: '#4B8ED1', // start chatting background and pagination bg
			light: '#F2EFE8', // start chatting text and pagination
			dark: '#8BC5FF', // hover dialog, my message
		},
		warning: {
			main: '#212b35', // last dialog activity time and message time
			light: '#60A0FF', // selected dialog bg and messages divider
			dark: '#569CFF', // status bg
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#da3633', // error bg, signout btn text
			dark: '#E6E1DD', // signout btn bg and status emoji bg
		},
		success: {
			main: '#343434', // signin button bg on hover
			light: '#C5C1BD', // navigation element on hover
			dark: '#1ED760', // update profile hover, set status hover
		},
	},
})
