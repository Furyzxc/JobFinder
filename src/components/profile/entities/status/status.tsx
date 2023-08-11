import { Typography } from '@mui/material'
import s from './status.module.css'
import { useGetUserStatusQuery } from '@/components/profile/profile'

type PropsType = {
	userId: number
}

export const Status = ({ userId }: PropsType) => {
	const { data: statusValue } = useGetUserStatusQuery(userId)

	return (
		<div className={s.userStatus}>
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
				{statusValue || 'User did not enter status'}
			</Typography>
		</div>
	)
}
