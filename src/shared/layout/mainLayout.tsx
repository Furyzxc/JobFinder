import { Stack } from '@mui/material'
import { ReactNode } from 'react'
import { AuthorizedHeader } from '@/components/header'

interface MainLayoutProps {
	children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<Stack className={'height'}>
			<AuthorizedHeader />
			{children}
		</Stack>
	)
}
