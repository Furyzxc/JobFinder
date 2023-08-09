import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { UserAvatar } from '@/entities/avatar'
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
	return (
		<Grid container item xs={2} sx={{ minWidth: '240px', p: '5px' }}>
			<Link to={'/profile/' + id} className={s.user}>
				<Grid item xl={1}>
					<Typography variant='h6'>{name}</Typography>
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
			</Link>
		</Grid>
	)
}
