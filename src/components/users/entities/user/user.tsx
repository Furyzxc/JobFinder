import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserAvatar } from '@/shared/ui/avatar'
import { Follow } from '../follow'
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

export const User = ({ name, status, photos, id, followed }: UserProps) => {
	const navigate = useNavigate()

	const navigateToProfile = () => navigate('/profile/' + id)

	return (
		<Grid
			container
			item
			xs={12}
			sm={5}
			md={3}
			sx={{
				minWidth: '300px',
				minHeight: '170px',
				p: '5px',
				position: 'relative',
			}}
			className={s.user}
		>
			<Grid item xs={12} textAlign={'start'} sx={{ pl: '10px' }}>
				<Typography variant='h6' className={'notranslate'}>
					{name}
				</Typography>
			</Grid>

			<Grid container item xs={12}>
				<Grid xs={5} item onClick={navigateToProfile}>
					<UserAvatar avatar={photos.small} name={name} size={'120px'} />
				</Grid>
				<Grid
					item
					xs={8}
					className={s.status}
					sx={{ color: 'white', fontSize: '12px', pt: '30px' }}
				>
					{status}
				</Grid>
				<div style={{ position: 'absolute', top: '10px', right: '10px' }}>
					<Follow userId={id} followed={followed} />
				</div>
			</Grid>
		</Grid>
	)
}
