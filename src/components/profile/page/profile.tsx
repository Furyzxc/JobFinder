import { Container, Grid } from '@mui/material'
import { useEffect } from 'react'
import { WithError } from '@/shared/hoc/withError.tsx'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppDispatch } from '@/shared/model/hooks.ts'
import { JobInfo } from '../features/jobInfo'
import { MainInfo } from '../features/mainInfo'
import { useProfile, useUserDetails } from '../model/hooks.ts'
import { requestProfileDataThunk } from '../model/slice.ts'

export const Profile = () => {
	const { isLoading, isError } = useProfile()

	// if isOwner = true, then id is owner id (id from authorization state)
	// otherwise id is taken from url params
	const { id, isOwner } = useUserDetails()

	const dispatch = useAppDispatch()

	useEffect(() => {
		id && dispatch(requestProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError || !id}>
				<Container sx={{ pt: '10px' }}>
					<Grid container>
						<Grid item xs={12} sm={6} md={4}>
							<MainInfo isOwner={isOwner} />
						</Grid>
						<Grid item xs={12} sm={6} md={8}>
							<JobInfo />
						</Grid>
					</Grid>
				</Container>
			</WithError>
		</WithLoading>
	)
}
