import { Avatar } from '@mui/material'
import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { navigationTabValues } from '@/shared/constants'
import { useActions, useRandomColor } from '@/shared/model/hooks'

const { SETTINGS } = navigationTabValues

type PropsType = {
	name: string
	avatar: string | null
	isOwner?: boolean
}

export const ProfileAvatar = forwardRef<any, any>(
	({ avatar, name, isOwner, ...props }: PropsType, ref) => {
		const randomColor = useRandomColor()
		const { setNavigationTab } = useActions()

		const navigate = useNavigate()

		const changeYourPhoto = () => {
			isOwner && navigate('/settings')
			setNavigationTab(SETTINGS)
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
						sx={{ fontSize: '25px', height: '296px', width: '296px' }}
					/>
				) : (
					<Avatar
						className='notranslate'
						sx={{
							bgcolor: randomColor,
							height: '296px',
							width: '296px',
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
