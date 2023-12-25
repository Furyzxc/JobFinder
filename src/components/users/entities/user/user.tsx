import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useImageOnLoad } from 'usehooks-ts'
import { useRandomColor } from '@/shared/model/hooks'
import { Follow } from '@/components/users/entities/follow'

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

export function User({
	photos: { small: avatar },
	name,
	status,
	id,
	followed,
}: UserProps) {
	const bgcolor = useRandomColor()
	const navigate = useNavigate()
	const navigateToProfile = () => navigate('/profile/' + id)
	const { handleImageOnLoad, css } = useImageOnLoad()
	return (
		<Card sx={{ maxWidth: 300, minWidth: 300, flexGrow: 1, mt: '20px' }}>
			{avatar ? (
				<CardMedia
					onClick={navigateToProfile}
					component='img'
					height='140'
					sx={{
						cursor: 'pointer',
						...css.fullSize,
					}}
					onLoad={handleImageOnLoad}
					image={avatar}
				/>
			) : (
				<CardMedia
					onClick={navigateToProfile}
					sx={{
						height: 140,
						bgcolor,
						textAlign: 'center',
						fontSize: 30,
						alignItems: 'center',
						pt: '50px',
						cursor: 'pointer',
					}}
				>
					{name}
				</CardMedia>
			)}
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{status}
				</Typography>
			</CardContent>
			<CardActions>
				<Follow userId={id} followed={followed} />
				<Button size='small' onClick={navigateToProfile}>
					View Profile
				</Button>
			</CardActions>
		</Card>
	)
}
