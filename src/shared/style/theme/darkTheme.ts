import { createTheme } from '@mui/material'
import { defaultTheme } from '@/shared/style/theme/defaultTheme.ts'

export const darkTheme = createTheme({
	...defaultTheme('#7D8590', '#E6EDF3', 'white'),
	palette: {
		mode: 'dark',
		primary: {
			main: '#7D8590', // unfollow icon, preloader, hover slider track
			light: '#0d1117', // background
			dark: '#010409', // header and input bg
		},
		secondary: {
			main: '#292F36', // navigation, hover cross, clear status, preloader bg
			light: '#E6EDF3', // dialog name text, send message icon, user status, unfollow icon, slider thumb, hover singout btn text, pagination, suggestion
			dark: '#161B22', //  status bg
		},
		info: {
			main: '#21262D', // start chatting background
			light: '#F2EFE8', // start chatting text
			dark: '#212b35', // hover dialog bg, my message
		},
		warning: {
			main: '#758495', // last dialog activity time and message time
			light: '#2B5278', // selected dialog bg  and messages divider
			dark: '#07B8F3', // hover slider track
		},
		error: {
			main: '#da3633', // error text and cross and signout btn hover bg
			light: '#F85149', // error bg, signout btn text
			dark: '#21262D', // signout btn bg and status emoji bg
		},
		success: {
			main: '#124E8B', // signin button bg on hover
			light: '#181C20', // navigation element on hover
			dark: '#0F4274', // update profile hover, set status hover
		},
	},
})
