import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { mainLayout } from '@/shared/layout/mainLayout.tsx'
import { Div } from '@/shared/ui/div'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'

// lazy imports
const NotFound = lazy(() =>
	import('@/components/notFound/page').then(module => ({
		default: module.NotFound,
	}))
)

const Profile = lazy(() =>
	import('@/components/profile/page').then(module => ({
		default: module.Profile,
	}))
)

const Dialogs = lazy(() =>
	import('@/components/dialogs/page').then(module => ({
		default: module.Dialogs,
	}))
)

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
		errorElement: <Div>Some error occurred...</Div>,
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
				element: <Users />,
			},

			{
				path: '/settings/*',
				element: (
					<GuestGuard>
						<Settings />
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
