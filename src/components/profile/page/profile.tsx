import { Container, Grid, Stack } from '@mui/material'
import { WithLoadingAndError } from '@/shared/hoc'
import { useAuthInfo } from '@/components/authorization'
import { useGetProfile } from '../model/hooks'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { UserProfileBtns } from '../features/userProfileBtns'

export const Profile = () => {
	// requesting profile data
	const { isLoading, isError, isOwner, profileData: p } = useGetProfile()
	const { login } = useAuthInfo()

	return (
		<WithLoadingAndError isLoading={isLoading} isError={isError}>
			{p && (
				<Container sx={{ pt: '10px' }} className={'noNavigationHeight scroll'}>
					<Grid container>
						<Grid item xs={12} sm={7} md={4}>
							<MainInfo
								name={p.name}
								avatar={p.photos.avatar}
								login={login}
								bio={p.bio}
								isOwner={isOwner}
							/>
						</Grid>
						<Grid item xs={12} sm={5} md={8} sx={{ mb: '20px' }}>
							<Stack spacing={2}>
								<JobInfo
									isLookingForJob={p.lookingForAJob}
									additionalInfo={p.lookingForAJobDescription || ''}
								/>
								{!isOwner && (
									<UserProfileBtns name={p.name} avatar={p.photos.avatar} />
								)}
							</Stack>
						</Grid>
					</Grid>
				</Container>
			)}
		</WithLoadingAndError>
	)
}
