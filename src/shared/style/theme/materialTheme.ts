import { createTheme } from '@mui/material'
import { defaultTheme } from './defaultTheme.ts'

export const materialTheme = createTheme({
	...defaultTheme('#66B2FF', '#F3F6F9', 'white'),
	palette: {
		mode: 'dark',
		primary: {
			main: '#0D80D8', // unfollow icon, preloader, hover slider track
			light: '#101418', // background
			dark: '#111519', // header and input bg
		},
		secondary: {
			main: '#1F262E', // navigation bg on focus, hover cross, clear status, preloader bg
			light: '#F2EFE8', // dialog name text and send message icon  and user status, slider thumb, pagination, suggestion
			dark: '#101418', //  status bg
		},
		info: {
			main: '#13181E', // start chatting background and pagination bg
			light: '#F2EFE8', // start chatting text and pagination
			dark: '#13181E', // hover dialog, my message
		},
		warning: {
			main: '#B0B8C4', // last dialog activity time and message time
			light: '#1F262E', // selected dialog bg and messages divider
			dark: '#0D80D8', // hover slider track
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#da3633', // error bg, signout btn text
			dark: '#101418', // signout btn bg and status emoji bg
		},
		success: {
			main: '#0D80D8', // signin button bg on hover
			light: '#13181E', // navigation element on hover
			dark: '#007FFF', // update profile hover, set status hover
		},
	},
})
