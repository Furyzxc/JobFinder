import { Avatar } from '@mui/material'
import { memo, useMemo } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
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
	avatar?: string | null
	name: string
	size?: string
	fontSize?: string
}

export const UserAvatar = memo(
	({ avatar, name, size, fontSize }: PropsType) => {
		let sx

		const randomColor = useMemo(
			() => COLORS[Math.floor(Math.random() * COLORS.length)],
			[]
		)

		if (size) sx = { height: size, width: size, fontSize }

		return avatar ? (
			<Avatar src={avatar} alt='user avatar' sx={sx} />
		) : (
			<Avatar
				className='notranslate'
				sx={{ backgroundColor: randomColor, ...sx }}
				alt='user avatar'
			>
				{name[0].toUpperCase()}
			</Avatar>
		)
	}
)
