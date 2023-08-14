import { Container, Grid } from '@mui/material'
import { useEffect } from 'react'
import { WithError, WithLoading } from '@/shared/hoc'
import { useAppDispatch, useSmoothAppearance } from '@/shared/model/hooks'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { useProfile, useUserDetails } from '../model/hooks.ts'
import { requestProfileDataThunk } from '../model/slice.ts'

export const Profile = () => {
	const { isLoading, isError } = useProfile()

	// if isOwner = true, then id is owner id (id from authorization state)
	// otherwise id is taken from url params
	const { id, isOwner } = useUserDetails()

	const { ref } = useSmoothAppearance(!isLoading)

	const dispatch = useAppDispatch()

	useEffect(() => {
		id && dispatch(requestProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<Container
			sx={{ pt: '10px' }}
			className={'noNavigationHeight scroll'}
			ref={ref}
		>
			<WithLoading isLoading={isLoading}>
				<WithError isError={isError || !id}>
					<Grid container>
						<Grid item xs={12} sm={6} md={4}>
							<MainInfo isOwner={isOwner} />
						</Grid>
						<Grid item xs={12} sm={6} md={8} sx={{ mb: '20px' }}>
							<JobInfo />
						</Grid>
					</Grid>
				</WithError>
			</WithLoading>
		</Container>
	)
}
