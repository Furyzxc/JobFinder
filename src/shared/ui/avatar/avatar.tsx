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
	avatar: string | null | undefined
	name: string
	size?: string
}

export const UserAvatar = ({ avatar, name, size }: PropsType) => {
	let sx

	const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]

	if (size) sx = { height: size, width: size }

	return avatar ? (
		<Avatar src={avatar} alt='user avatar' sx={sx} />
	) : (
		<Avatar sx={{ backgroundColor: randomColor, ...sx }} alt='user avatar'>
			{name[0].toUpperCase()}
		</Avatar>
	)
}
