import { createTheme } from '@mui/material'
import { defaultTheme } from '@/shared/style/theme/defaultTheme.ts'

export const darkTheme = createTheme({
	...defaultTheme('#7D8590', '#E6EDF3', 'white'),
	palette: {
		mode: 'dark',
		primary: {
			main: '#004BFC', // unfollow icon, preloader
			light: '#0d1117', // background
			dark: '#010409', // header
		},
		secondary: {
			main: '#1A1F24', // navigation
			light: '#E6EDF3', // dialog name text and send message icon and user status and unfollow icon, slider thumb
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
			dark: '#2B5278', // my message bg
		},
		error: {
			main: '#E34B45', // error text and cross
			light: '#25171C', // error bg
		},
	},
})
