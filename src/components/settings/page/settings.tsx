import { Grid, Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { WithLoadingAndError } from '@/shared/hoc'
import { useScroll, useSmoothAppearance } from '@/shared/model/hooks'
import { Account } from '../features/account'
import { Header } from '../features/header'
import { Navigation } from '../features/navigation'
import { Profile } from '../features/profile'
import { useOwnerInfo } from '../model/hooks'

export const Settings = () => {
	const { isLoading, isError } = useOwnerInfo()

	const { ref } = useSmoothAppearance()

	const scroll = useScroll()

	return (
		<div ref={ref}>
			<WithLoadingAndError isLoading={isLoading} isError={isError}>
				<Stack
					{...scroll}
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
							</Routes>
						</Grid>
					</Grid>
				</Stack>
			</WithLoadingAndError>
		</div>
	)
}
