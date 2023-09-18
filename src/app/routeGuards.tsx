import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/components/authorization'
import { Login } from '@/components/authorization/page'

// Component to guard routes accessible only to guests (non-authenticated users)
export const GuestGuard = () => {
	const { isAuthorized } = useAuth()

	if (!isAuthorized) return <Login />

	return <Outlet />
}

// Component to guard routes accessible only to authenticated users
export const AuthGuard = () => {
	const { isAuthorized } = useAuth()

	if (isAuthorized) return <Navigate to='/' replace />

	return <Outlet />
}
