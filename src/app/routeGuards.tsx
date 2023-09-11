import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/components/authorization'

// Component to guard routes accessible only to guests (non-authenticated users)
export const GuestGuard = () => {
	const { isAuthorized } = useAuth()

	if (!isAuthorized) return <Navigate to='/login' />

	return <Outlet />
}

// Component to guard routes accessible only to authenticated users
export const AuthGuard = () => {
	const { isAuthorized } = useAuth()

	if (isAuthorized) return <Navigate to='/' replace />

	return <Outlet />
}
