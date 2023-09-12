import { Stack, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { useAppSelector } from '@/shared/model/hooks'
import { darkTheme, lightTheme } from '@/shared/style/theme'
import { spotifyTheme } from '@/shared/style/theme/spotifyTheme.ts'
import { AppHeader } from '@/components/header'
import { selectTheme } from '@/components/settings/model'

export const MainLayout = () => {
	const { previewTheme, choosenTheme } = useAppSelector(selectTheme)

	const theme = previewTheme || choosenTheme

	const appTheme =
		theme === 'dark' ? darkTheme : theme === 'light' ? lightTheme : spotifyTheme

	return (
		<ThemeProvider theme={appTheme}>
			<Stack className={'height'} sx={{ bgcolor: 'primary.light' }}>
				<AppHeader />
				<WithSuspense>
					<Outlet />
				</WithSuspense>
			</Stack>
		</ThemeProvider>
	)
}
