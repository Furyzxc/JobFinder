import { Avatar } from '@mui/material'
import { memo } from 'react'
import { useRandomColor } from '@/shared/model/hooks'

type PropsType = {
	avatar?: string | null
	name: string
	size?: string
	fontSize?: string
}

export const UserAvatar = memo(
	({ avatar, name, size, fontSize }: PropsType) => {
		let sx

		const randomColor = useRandomColor()

		if (size) sx = { height: size, width: size, fontSize }
		return avatar ? (
			<Avatar src={avatar} alt={name} sx={sx} />
		) : (
			<Avatar
				className='notranslate'
				sx={{ bgcolor: randomColor, ...sx }}
				alt={name}
			>
				{name[0].toUpperCase()}
			</Avatar>
		)
	}
)
