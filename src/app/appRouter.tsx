import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { MainLayout } from '@/shared/layout/mainLayout.tsx'
import { Dialogs } from '@/components/dialogs/page'
import { NotFound } from '@/components/notFound/page'
import { Profile } from '@/components/profile/page'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'

// lazy imports
const Login = lazy(() =>
	import('@/components/authorization/page').then(module => ({
		default: module.Login,
	}))
)
const Users = lazy(() =>
	import('@/components/users/page').then(module => ({ default: module.Users }))
)

const Settings = lazy(() =>
	import('@/components/settings/page').then(module => ({
		default: module.Settings,
	}))
)

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
