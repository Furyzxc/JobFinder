import { useAuthInfo } from '@/components/authorization'
import { useGetProfile } from './useGetProfile.ts'

interface MainInfo {
	login: string | null
	isOwner: boolean
	bio: string | null
	name: string
	avatar: string | null
}

export const useMainInfo = (): MainInfo | undefined => {
	const { profileData: userProfile, isOwner } = useGetProfile()
	const { login } = useAuthInfo()

	if (userProfile) {
		return {
			login,
			isOwner,
			bio: userProfile.bio,
			name: userProfile.name,
			avatar: userProfile.photos.avatar,
		}
	}
}
