import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useActions } from '@/shared/model/hooks.ts'
import { DescriptionSection } from '@/entities/profileDescription'
import { Status } from '@/entities/status'
import { useGetProfileQuery } from '@/slices/profile'
import s from './profileInfo.module.css'

type PropsType = {
	isOwner: boolean
	id: number
}

export const ProfileInfo = ({ id, isOwner }: PropsType) => {
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
					{profileData?.fullName}
				</Grid>
				<Grid item xs={5}>
					<Status isOwner={isOwner} userId={id} />
				</Grid>
			</Grid>
			{profileData && <DescriptionSection {...profileData} />}
		</Box>
	)
}
