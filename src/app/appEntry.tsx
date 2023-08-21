import { ThemeProvider } from '@mui/material'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import '@/shared/style/index.css'
import { appTheme } from '@/shared/style/theme'
import { authMe } from '@/components/authorization/model'
import { appRouter } from './appRouter.tsx'
import { appStore } from './appStore.ts'

dayjs.extend(relativeTime)

const root = document.getElementById('root') as HTMLElement

const initApp = async () => {
	await appStore.dispatch(authMe())
}

initApp().then(() => {
	ReactDOM.createRoot(root).render(
		<ThemeProvider theme={appTheme}>
			<ReduxProvider store={appStore}>
				<RouterProvider router={appRouter} />
			</ReduxProvider>
		</ThemeProvider>
	)
})
