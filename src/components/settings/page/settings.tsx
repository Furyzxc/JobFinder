import { Grid, Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
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
				<Stack
					sx={{ p: '15px 0 0 20px' }}
					spacing={4}
					className={'noNavigationHeight scroll'}
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
								<Route path='*' element={<Profile />} />
								<Route path='account' element={<Account />} />
								<Route path='appearance' element={<Appearance />} />
							</Routes>
						</Grid>
					</Grid>
				</Stack>
			</WithLoadingAndError>
		</div>
	)
}
