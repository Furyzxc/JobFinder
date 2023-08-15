import { useParams } from 'react-router-dom';
import { useAuthInfo } from '@/components/authorization'


interface UserIdFromParamsOutput {
	id: number | undefined
	isOwner: boolean
}

export const useUserDetails = (): UserIdFromParamsOutput => {
	const { id } = useAuthInfo()
	// if no user id in url returns id from parameters and sets isOwner on true

	const { userId = id } = useParams()

	return {
		id: userId ? +userId : undefined,
		// if isOwner = true, then id is owner id (id from authorization state)
		// otherwise id is taken from url params
		isOwner: userId === id,
	}
}