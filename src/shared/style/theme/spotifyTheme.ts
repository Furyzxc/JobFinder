import { createTheme } from '@mui/material'
import { defaultTheme } from '@/shared/style/theme/defaultTheme.ts'

export const spotifyTheme = createTheme({
	...defaultTheme('#A7A398', '#E6EDF3', 'fff'),
	palette: {
		mode: 'dark',
		primary: {
			main: '#1ED760', // unfollow icon, hover slider track and preloader, update profile button bg
			light: '#121212', // background
			dark: '#000', // header
		},
		secondary: {
			main: '#1A1F24', // navigation
			light: '#fff', // dialog name text and send message icon  and user status, slider thumb
			dark: '#fff', //  pagination
		},
		info: {
			main: '#21262D', // start chatting background and friend message bg
			light: '#F2EFE8', // start chatting text
			dark: '#2A2A2A', // hover dialog
		},
		warning: {
			main: '#A1A1A1', // last dialog activity time and message time
			light: '#5A5A5A', // selected dialog bg and messages divider
			dark: '#107433', // my message
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#F85149', // error bg, signout btn text
			dark: '#21262D', // signout btn bg
		},
	},
})
