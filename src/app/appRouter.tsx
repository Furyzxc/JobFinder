import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/shared/layout/mainLayout.tsx'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'
import { ErrorLayout } from '@/shared/layout/errorLayout.tsx'
import { lazily } from 'react-lazily'


// lazy imports
const { NotFound } = lazily(() => import('@/components/notFound/page'))
const { Profile } = lazily(() => import('@/components/profile/page'))
const { Dialogs } = lazily(() => import('@/components/dialogs/page'))
const { News } = lazily(() => import('@/components/news/page'))
const { Login } = lazily(() => import('@/components/authorization/page'))
const { Users } = lazily(() => import('@/components/users/page'))
const { Settings } = lazily(() => import('@/components/settings/page'))

const requireAuthorizationRoutes = [
	{
		path: '/',
		element: <Profile />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/dialogs/:userId?',
		element: <Dialogs />,
	},
]

const withoutAuthorizationRoutes = [
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/profile/:userId',
		element: <Profile />,
	},
	{
		path: '/news',
		element: <News />
	},
	{
		path: '/users',
		element: <Users />,
	},
	{
		path: '/settings/*',
		element: <Settings />,
	},
	{
		element: <AuthGuard />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]

export const appRouter = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <ErrorLayout />,
		children: [
			{
				element: <GuestGuard />,
				children: requireAuthorizationRoutes,
			},
			...withoutAuthorizationRoutes,
		],
	},
])