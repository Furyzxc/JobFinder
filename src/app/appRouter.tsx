import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/shared/layout/mainLayout.tsx'
import { defaultLazyImport } from '@/shared/lib/defaultLazyImport.ts'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'
import { ErrorLayout } from '@/shared/layout/errorLayout.tsx'


// lazy imports
const NotFound = lazy(() => import('@/components/notFound/page').then(module =>
	defaultLazyImport(module, 'NotFound')))

const Profile = lazy(() => import('@/components/profile/page').then(module =>
	defaultLazyImport(module, 'Profile')))

const Dialogs = lazy(() => import('@/components/dialogs/page').then(module =>
	defaultLazyImport(module, 'Dialogs')))

const Login = lazy(() => import('@/components/authorization/page').then(module =>
	defaultLazyImport(module, 'Login')))

const Users = lazy(() => import('@/components/users/page').then(module =>
	defaultLazyImport(module, 'Users')))

const Settings = lazy(() => import('@/components/settings/page').then(module =>
	defaultLazyImport(module, 'Settings')))

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