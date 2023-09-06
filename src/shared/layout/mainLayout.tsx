import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { AuthorizedHeader } from '@/components/header'

export const mainLayout = (
	<Stack className={'height'}>
		<AuthorizedHeader />
		<WithSuspense>
			<Outlet />
		</WithSuspense>
	</Stack>
)
