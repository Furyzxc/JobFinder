import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserAvatar } from '@/shared/ui/avatar'
import s from './user.module.css'

export interface UserProps {
	id: number
	name: string
	photos: {
		small: null | string
		large: null | string
	}
	status: null | string
	followed: boolean
}

export const User = ({ name, status, photos, id }: UserProps) => {
	const navigate = useNavigate()

	const handleUserClick = () => navigate('/profile/' + id)

	return (
		<Grid
			container
			item
			xs={12}
			sm={3.5}
			md={2.5}
			sx={{ minWidth: '240px', p: '5px' }}
			className={s.user}
			onClick={handleUserClick}
		>
			<Grid item xl={1}>
				<Typography variant='h6' className={'notranslate'}>
					{name}
				</Typography>
			</Grid>

			<Grid container item xl={3}>
				<Grid xs={3} item>
					<UserAvatar avatar={photos.small} name={name} />
				</Grid>
				<Grid
					item
					xs={8}
					className={s.status}
					sx={{ color: 'white', fontSize: '12px' }}
				>
					{status}
				</Grid>
			</Grid>
		</Grid>
	)
}
