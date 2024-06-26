import { Container, Grid, Stack } from '@mui/material'
import { WithError } from '@/shared/hoc'
import { Div } from '@/shared/ui/div'
import { useAuth } from '@/components/authorization'
import { useGetProfile } from '../model/hooks'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { SocialAccountsLinks } from '../features/socialAccountsLinks'
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
			<Container sx={{ pt: '50px' }}>
				{p && !isLoading ? (
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
								{isAuthorized && !isLoading && (
									<UserProfileBtns
										isOwner={isOwner}
										name={p?.name}
										avatar={p?.photos.avatar}
									/>
								)}
							</Stack>
						</Grid>
					</Grid>
				) : (
					<Div>Profile not found</Div>
				)}
			</Container>
		</WithError>
	)
}
