import { Container, Grid } from '@mui/material'
import { WithError, WithLoading } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { useGetProfile } from '../model/hooks.ts'

export const Profile = () => {
	// requesting profile data
	const { isLoading, isError } = useGetProfile()

	// if isOwner = true, then id is owner id (id from authorization state)
	// otherwise id is taken from url params
	const { ref } = useSmoothAppearance(!isLoading)

	return (
		<Container
			sx={{ pt: '10px' }}
			className={'noNavigationHeight scroll'}
			ref={ref}
		>
			<WithLoading isLoading={isLoading}>
				<WithError isError={isError}>
					<Grid container>
						<Grid item xs={12} sm={7} md={4}>
							<MainInfo />
						</Grid>
						<Grid item xs={12} sm={5} md={8} sx={{ mb: '20px' }}>
							<JobInfo />
						</Grid>
					</Grid>
				</WithError>
			</WithLoading>
		</Container>
	)
}
