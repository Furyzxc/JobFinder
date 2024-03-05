import { Avatar } from '@mui/material'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRandomColor } from '@/shared/model/hooks'

type PropsType = {
	name: string
	avatar: string | null
	isOwner?: boolean
}

export const ProfileAvatar = forwardRef<any, any>(
	({ avatar, name, isOwner, ...props }: PropsType, ref) => {
		const randomColor = useRandomColor()

		const navigate = useNavigate()

		const changeYourPhoto = () => {
			isOwner && navigate('/settings')
		}

		return (
			<span
				ref={ref}
				{...props}
				style={{ width: 'min-content' }}
				onClick={changeYourPhoto}
			>
				{avatar ? (
					<Avatar
						src={avatar}
						alt={name}
						sx={{ fontSize: '25px', height: '200px', width: '200px' }}
					/>
				) : (
					<Avatar
						className='notranslate'
						sx={{
							bgcolor: randomColor,
							height: '200px',
							width: '200px',
							fontSize: '50px',
						}}
						alt={name}
					>
						{name[0].toUpperCase()}
					</Avatar>
				)}
			</span>
		)
	}
)
