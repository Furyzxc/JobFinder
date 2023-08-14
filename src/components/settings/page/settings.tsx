import { Grid, Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { WithError, WithLoading } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Account } from '../features/account'
import { Header } from '../features/header'
import { Navigation } from '../features/navigation'
import { Profile } from '../features/profile'
import { useOwnerInfo } from '../model/hooks'

export const Settings = () => {
	const { isLoading, isError } = useOwnerInfo()

	const { ref } = useSmoothAppearance()

	return (
		<Stack
			direction={'column'}
			spacing={4}
			className={'noNavigationHeight scroll'}
			sx={{ p: '15px 0 0 20px' }}
			ref={ref}
		>
			<WithLoading isLoading={isLoading}>
				<WithError isError={isError}>
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
								<Route path='account' element={<Account />} />
							</Routes>
						</Grid>
					</Grid>
				</WithError>
			</WithLoading>
		</Stack>
	)
}
