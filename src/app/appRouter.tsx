import { createBrowserRouter } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { lazyPageImport } from '@/shared/utils/lazy-import.ts'
import { MainLayout } from '../shared/layout/mainLayout.tsx'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'
import { Dialogs } from '@/components/dialogs/page'
import { NotFound } from '@/components/notFound/page'
import { Profile } from '@/components/profile/page'

const Login = lazyPageImport('authorization', 'Login')
const Users = lazyPageImport('users', 'Users')
const Settings = lazyPageImport('settings', 'Settings')

export const appRouter = createBrowserRouter([
	{
		path: '*',
		element: (
			<MainLayout>
				<NotFound />
			</MainLayout>
		),
	},
	{
		path: '/',
		element: (
			<MainLayout>
				<GuestGuard>
					<Profile />
				</GuestGuard>
			</MainLayout>
		),
	},
	{
		path: '/profile/:userId?',
		element: (
			<MainLayout>
				<GuestGuard>
					<Profile />
				</GuestGuard>
			</MainLayout>
		),
	},
	{
		path: '/dialogs/:userId?',
		element: (
			<MainLayout>
				<GuestGuard>
					<Dialogs />
				</GuestGuard>
			</MainLayout>
		),
	},
	{
		path: '/users',
		element: (
			<MainLayout>
				<WithSuspense>
					<Users />
				</WithSuspense>
			</MainLayout>
		),
	},
	{
		path: '/login',

		element: (
			<AuthGuard>
				<WithSuspense>
					<Login />
				</WithSuspense>
			</AuthGuard>
		),
	},
	{
		path: '/settings/*',
		element: (
			<MainLayout>
				<GuestGuard>
					<WithSuspense>
						<Settings />
					</WithSuspense>
				</GuestGuard>
			</MainLayout>
		),
	},
])
