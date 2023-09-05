import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AuthorizedHeader } from '@/components/header'

export const mainLayout = (
	<Stack className={'height'}>
		<AuthorizedHeader />
		<Outlet />
	</Stack>
)
