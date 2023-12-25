import { Stack, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { useAppSelector } from '@/shared/model/hooks'
import {
	darkTheme,
	lightTheme,
	materialTheme,
	spotifyTheme,
} from '@/shared/style/theme'
import { AppHeader } from '@/components/header'
import { selectTheme } from '@/components/settings/model'

export const MainLayout = () => {
	const { chosenTheme: theme } = useAppSelector(selectTheme)

	const appTheme =
		theme === 'dark'
			? darkTheme
			: theme === 'light'
			  ? lightTheme
			  : theme === 'spotify'
			    ? spotifyTheme
			    : materialTheme

	return (
		<ThemeProvider theme={appTheme}>
			<Stack className={'height scroll'} sx={{ bgcolor: 'primary.light' }}>
				<AppHeader />
				<WithSuspense>
					<Outlet />
				</WithSuspense>
			</Stack>
		</ThemeProvider>
	)
}
