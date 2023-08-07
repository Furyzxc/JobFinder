import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/shared/model/hooks.ts'

type GuestGuardProps = {
	children: ReactNode
}

// Component to guard routes accessible only to guests (non-authenticated users)
export const GuestGuard = ({ children }: GuestGuardProps) => {
	const isAuthorized = useAuth()

	if (!isAuthorized) return <Navigate to='/login' />

	return <>{children}</>
}

type AuthGuardProps = {
	children: ReactNode
}

// Component to guard routes accessible only to authenticated users
export const AuthGuard = ({ children }: AuthGuardProps) => {
	const isAuthorized = useAuth()

	if (isAuthorized) return <Navigate to='/' />

	return <>{children}</>
}
