import { createBrowserRouter } from 'react-router-dom'
import { WithSuspense } from '@/shared/hoc'
import { MainLayout } from '../shared/layout/mainLayout.tsx'
import { AuthGuard, GuestGuard } from './routeGuards.tsx'
import { Login } from '@/components/authorization'
import { Dialogs } from '@/components/dialogs'
import { NotFound } from '@/components/notFound'
import { Profile } from '@/components/profile'

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
		async lazy() {
			const { Users } = await import('@/components/users')

			return {
				element: (
					<MainLayout>
						<WithSuspense>
							<Users />
						</WithSuspense>
					</MainLayout>
				),
			}
		},
	},
	{
		path: '/settings/*',
		async lazy() {
			const { Settings } = await import('@/components/settings')

			return {
				element: (
					<MainLayout>
						<GuestGuard>
							<WithSuspense>
								<Settings />
							</WithSuspense>
						</GuestGuard>
					</MainLayout>
				),
			}
		},
	},
])
