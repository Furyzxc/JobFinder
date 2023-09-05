import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { mainLayout } from '@/shared/layout/mainLayout.tsx'
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
		element: mainLayout,
		children: [
			{
				path: '*',
				element: <NotFound />,
			},
			{
				path: '/',
				element: (
					<GuestGuard>
						<Profile />
					</GuestGuard>
				),
			},
			{
				path: '/profile/:userId?',
				element: (
					<GuestGuard>
						<Profile />
					</GuestGuard>
				),
			},
			{
				path: '/dialogs/:userId?',
				element: (
					<GuestGuard>
						<Dialogs />
					</GuestGuard>
				),
			},
			{
				path: '/users',
				element: (
					<WithSuspense>
						<Users />
					</WithSuspense>
				),
			},

			{
				path: '/settings/*',
				element: (
					<GuestGuard>
						<WithSuspense>
							<Settings />
						</WithSuspense>
					</GuestGuard>
				),
			},
		],
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
])
