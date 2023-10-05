import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { navigationTabValues } from '@/shared/constants'
import { useActions } from '@/shared/model/hooks'
import { UserAvatar } from '@/shared/ui/userAvatar'
import { Follow } from '../follow'
import s from './user.module.css'

const { PROFILE } = navigationTabValues

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
	const { setNavigationTab } = useActions()

	const navigate = useNavigate()
	const navigateToProfile = () => {
		navigate('/profile/' + id)
		setNavigationTab(PROFILE)
	}

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
					sx={{ color: 'secondary.light', fontSize: '12px', pt: '30px' }}
				>
					<Typography
						variant={'h5'}
						noWrap
						sx={{ fontSize: '12px', color: 'primary.main' }}
					>
						{status}
					</Typography>
				</Grid>
				<div style={{ position: 'absolute', top: '10px', right: '10px' }}>
					<Follow userId={id} followed={followed} />
				</div>
			</Grid>
		</Grid>
	)
}
