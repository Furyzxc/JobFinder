import { Box, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useActions } from '@/shared/model/hooks.ts'
import { DescriptionSection } from '../../entities/profileDescription'
import { Status } from '../../entities/status'
import s from './profileInfo.module.css'
import { useGetProfileQuery } from '@/components/profile/profile'

type PropsType = {
	id: number
}

export const ProfileInfo = ({ id }: PropsType) => {
	const { setProfileName, setAvatar } = useActions()

	const { data: profileData, isSuccess } = useGetProfileQuery(id)

	useEffect(() => {
		if (isSuccess && profileData) {
			setProfileName(profileData.fullName)
			setAvatar(profileData.photos.small)
		}
	}, [profileData, isSuccess, setProfileName, setAvatar])

	return (
		<Box sx={{ pl: '20px' }}>
			<Grid container sx={{ pt: '70px', mb: '50px' }}>
				<Grid item xs={6} className={s.nickName}>
					<Typography variant={'h6'} sx={{ fontSize: '25px' }}>
						{profileData?.fullName}
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<Status userId={id} />
				</Grid>
			</Grid>
			{profileData && <DescriptionSection {...profileData} />}
		</Box>
	)
}
