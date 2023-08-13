import { Typography } from '@mui/material'
import { useGetProfileQuery } from '../../api/api.ts'
import s from './bio.module.css'

type PropsType = {
	userId: number
}

export const Bio = ({ userId }: PropsType) => {
	const { data: profileData } = useGetProfileQuery(userId)

	return (
		<div className={s.bio}>
			<Typography
				sx={{
					fontSize: 18,
					color: 'white',
					borderBottom: '1px solid #42A5F5',
					mb: '20px',
					textAlign: 'center',
				}}
			>
				Bio
			</Typography>
			<Typography variant='h6' sx={{ textAlign: 'center' }}>
				{profileData?.bio || 'User did not enter bio'}
			</Typography>
		</div>
	)
}
