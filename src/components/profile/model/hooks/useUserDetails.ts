import { useParams } from 'react-router-dom'
import { useAuthInfo } from '@/components/authorization'

interface UserIdFromParamsOutput {
	id: number | undefined
	isOwner: boolean
}

export const useUserDetails = (): UserIdFromParamsOutput => {
	const { id: authId } = useAuthInfo()

	// taking value of id from url params
	const { userId } = useParams()

	// if Number(userId) = NaN, then it's your profile id
	const id = Number(userId) || authId || undefined

	return {
		id,
		// if id is your, isOwner = true
		isOwner: id === authId,
	}
}
