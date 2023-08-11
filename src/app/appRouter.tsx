import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../shared/layout/mainLayout.tsx'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'
import { Login } from '@/components/authorization'
import { Dialogs } from '@/components/dialogs'
import { NotFound } from '@/components/notFound'
import { Profile } from '@/components/profile'
import { Settings } from '@/components/settings'
import { Users } from '@/components/users'

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
		path: '/login',
		element: (
			<AuthGuard>
				<Login />
			</AuthGuard>
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
				<Users />
			</MainLayout>
		),
	},
	{
		path: '/settings/*',
		element: (
			<MainLayout>
				<Settings />
			</MainLayout>
		),
	},
])
