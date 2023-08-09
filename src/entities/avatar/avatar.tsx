import { Avatar } from '@mui/material'

export const COLORS = [
	'#f44336',
	'#e91e63',
	'#9c27b0',
	'#673ab7',
	'#3f51b5',
	'#2196f3',
	'#03a9f4',
	'#00bcd4',
	'#009688',
	'#4caf50',
	'#8bc34a',
	// '#cddc39',
	// '#ffeb3b', TOO LIGHT
	// '#ffc107',
	'#ff9800',
	'#ff5722',
] as const

type PropsType = {
	avatar: string | null
	name: string
}

export const UserAvatar = ({ avatar, name }: PropsType) => {
	const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]

	return avatar ? (
		<Avatar src={avatar} alt='user avatar' />
	) : (
		<Avatar sx={{ backgroundColor: randomColor }} alt='user avatar'>
			{name[0].toUpperCase()}
		</Avatar>
	)
}
