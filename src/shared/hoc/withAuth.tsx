import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type PropsType = {
	isAuth: boolean
	children: ReactNode
}
export const WithAuth = ({ children, isAuth }: PropsType) => {
	if (isAuth) return <>{children}</>

	return <Navigate to={'/login'} replace />
}
