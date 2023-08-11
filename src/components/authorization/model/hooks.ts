import { useAppSelector } from '@/shared/model/hooks.ts'
import { selectAuthState } from './slice.ts'

export const useAuth = () => {
	return useAppSelector(selectAuthState)
}

export const useAuthInfo = () => {
	const { userInfo } = useAuth()
	return userInfo
}
