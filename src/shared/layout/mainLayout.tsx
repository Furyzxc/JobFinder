import { Stack, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { useAppSelector } from '@/shared/model/hooks'
import { darkTheme, lightTheme } from '@/shared/style/theme'
import { AppHeader } from '@/components/header'
import { selectTheme } from '@/components/settings/model'

export const MainLayout = () => {
	const themeName = useAppSelector(selectTheme)

	const theme = themeName === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={theme}>
			<Stack className={'height'} sx={{ bgcolor: 'primary.light' }}>
				<AppHeader />
				<WithSuspense>
					<Outlet />
				</WithSuspense>
			</Stack>
		</ThemeProvider>
	)
}
