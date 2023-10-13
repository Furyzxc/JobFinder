import { Grid, Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { GuestGuard } from '@/app/routeGuards.tsx'
import { WithLoadingAndError } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { useOwnerInfo } from '../model/hooks'
import { Account } from '../features/account'
import { Appearance } from '../features/appearance'
import { Header } from '../features/header'
import { Navigation } from '../features/navigation'
import { Profile } from '../features/profile'

export const Settings = () => {
	const { isLoading, isError } = useOwnerInfo()

	const { ref } = useSmoothAppearance()

	return (
		<div ref={ref}>
			<WithLoadingAndError isLoading={isLoading} isError={isError}>
				<Stack sx={{ p: '15px 20px 0 20px' }} spacing={4}>
					<div>
						<Header />
					</div>
					<Grid container>
						<Grid item xs={11} md={3} sm={11} sx={{ mb: '30px' }}>
							<Navigation />
						</Grid>
						<Grid item xs={12} md={9} sm={12}>
							<Routes>
								<Route element={<GuestGuard />}>
									<Route path='*' element={<Profile />} />
									<Route path='account' element={<Account />} />
								</Route>
								<Route path='appearance' element={<Appearance />} />
							</Routes>
						</Grid>
					</Grid>
				</Stack>
			</WithLoadingAndError>
		</div>
	)
}
