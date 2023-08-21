import { Container, Grid, Stack } from '@mui/material'
import { WithLoadingAndError } from '@/shared/hoc'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { UserProfileBtns } from '../features/userProfileBtns'
import { useGetProfile } from '../model/hooks'

export const Profile = () => {
	// requesting profile data
	const { isLoading, isError, isOwner } = useGetProfile()

	return (
		<WithLoadingAndError isLoading={isLoading} isError={isError}>
			<Container sx={{ pt: '10px' }} className={'noNavigationHeight scroll'}>
				<Grid container>
					<Grid item xs={12} sm={7} md={4}>
						<MainInfo />
					</Grid>
					<Grid item xs={12} sm={5} md={8} sx={{ mb: '20px' }}>
						<Stack spacing={2}>
							<JobInfo />
							{!isOwner && <UserProfileBtns />}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</WithLoadingAndError>
	)
}
