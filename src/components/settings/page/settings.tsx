import { Grid, Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { WithError, WithLoading } from '@/shared/hoc'
import { Header } from '../features/header'
import { Navigation } from '../features/navigation'
import { Profile } from '../features/profile'
import { useOwnerInfo } from '@/components/settings/model/hooks'

export const Settings = () => {
	const { isLoading, isError } = useOwnerInfo()

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError}>
				<Stack
					direction={'column'}
					spacing={4}
					className={'height scroll'}
					sx={{ pt: '15px' }}
				>
					<div>
						<Header />
					</div>
					<Grid container>
						<Grid item xs={11} sm={3} sx={{ mb: '30px' }}>
							<Navigation />
						</Grid>
						<Grid item xs={12} sm={9}>
							<Routes>
								<Route path='profile' element={<Profile />} />
							</Routes>
						</Grid>
					</Grid>
				</Stack>
			</WithError>
		</WithLoading>
	)
}
