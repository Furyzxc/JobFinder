import { useParams } from 'react-router-dom'
import { useAuthInfo } from '@/components/authorization'

interface UserIdFromParamsOutput {
	id: number | undefined
	isOwner: boolean
}

export const useUserDetails = (): UserIdFromParamsOutput => {
	const { id: authId } = useAuthInfo()
	// if no user id in url returns id from auth state and sets isOwner on true

	const { userId = authId } = useParams()

	const id = Number(userId) || authId || undefined

	return {
		id,
		// if isOwner = true, then id is owner id (id from authorization state)
		// otherwise id is taken from url params (if params id is not good, id = undefined)
		isOwner: userId === id,
	}
}
