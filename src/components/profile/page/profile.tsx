import { Container, Grid, Stack } from '@mui/material'
import { WithError } from '@/shared/hoc'
import { useAuth } from '@/components/authorization'
import { SocialAccountsLinks } from '@/components/profile/features/socialAccountsLinks'
import { useGetProfile } from '../model/hooks'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { UserProfileBtns } from '../features/userProfileBtns'

export const Profile = () => {
	// requesting profile data
	const { isLoading, isError, isOwner, profileData: p } = useGetProfile()
	const {
		isAuthorized,
		userInfo: { login },
	} = useAuth()

	return (
		<WithError isError={isError}>
			<Container sx={{ pt: '10px' }} className={'noNavigationHeight scroll'}>
				<Grid container>
					<Grid item xs={12} sm={7} md={4}>
						<MainInfo
							isLoading={isLoading}
							name={p?.name}
							avatar={p?.photos.avatar}
							login={login}
							bio={p?.bio}
							isOwner={isOwner}
						/>
					</Grid>
					<Grid item xs={12} sm={5} md={8} sx={{ mb: '20px' }}>
						<Stack spacing={2}>
							<JobInfo
								isLoading={isLoading}
								isLookingForJob={p?.lookingForAJob}
								additionalInfo={p?.lookingForAJobDescription || ''}
							/>
							{p && <SocialAccountsLinks {...p?.socialAccounts} />}
							{!isOwner && isAuthorized && !isLoading && (
								<UserProfileBtns name={p?.name} avatar={p?.photos.avatar} />
							)}
						</Stack>
					</Grid>
				</Grid>
			</Container>
			)
		</WithError>
	)
}
