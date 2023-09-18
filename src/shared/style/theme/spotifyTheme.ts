import { createTheme } from '@mui/material'
import { defaultTheme } from '@/shared/style/theme/defaultTheme.ts'

export const spotifyTheme = createTheme({
	...defaultTheme('#A7A398', '#E6EDF3', 'fff'),
	palette: {
		mode: 'dark',
		primary: {
			main: '#1ED760', // unfollow icon, hover slider track and preloader
			light: '#121212', // background
			dark: '#000', // header and input bg
		},
		secondary: {
			main: '#292F36', // navigation, hover cross, clear status, preloader bg
			light: '#fff', // dialog name text and send message icon  and user status, slider thumb, pagination, suggestion
			dark: '#161B22', //  status bg
		},
		info: {
			main: '#21262D', // start chatting background and friend message bg
			light: '#F2EFE8', // start chatting text
			dark: '#2A2A2A', // hover dialog, my message
		},
		warning: {
			main: '#A1A1A1', // last dialog activity time and message time
			light: '#5A5A5A', // selected dialog bg and messages divider
			dark: '#4B515C9B', // status bg
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#F85149', // error bg, signout btn text
			dark: '#21262D', // signout btn bg and status emoji bg
		},
		success: {
			main: '#5AFF94', // signin button bg on hover
			light: '#181C20', // navigation element on hover
			dark: '#1ED760', // update profile hover, set status hover
		},
	},
})
