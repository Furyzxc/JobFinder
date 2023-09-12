import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/shared/layout/mainLayout.tsx'
import { defaultLazyImport } from '@/shared/lib/defaultLazyImport.ts'
import { Div } from '@/shared/ui/div'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'


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

export const appRouter = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <Div color={'#F2EFE8'} bg={'#21262D'}>Some error occurred...</Div>,
		children: [
			{
				element: <GuestGuard />,
				children: [
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

					{
						path: '/settings/*',
						element: <Settings />,
					},
				],
			},
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
				element: <AuthGuard />,
				children: [
					{
						path: '/login',
						element: <Login />,
					},
				],
			},
		],
	},
])