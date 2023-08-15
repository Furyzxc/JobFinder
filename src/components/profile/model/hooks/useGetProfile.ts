import { useUserDetails } from './useUserDetails.ts'
import { ProfileResponseBody, useGetProfileQuery } from '@/components/profile'

interface GetProfile {
	profileData: ProfileResponseBody | undefined
	isLoading: boolean
	isError: boolean
	isOwner: boolean
}

export const useGetProfile = (): GetProfile => {
	const { id, isOwner } = useUserDetails()

	const { data, isLoading, isError } = useGetProfileQuery(id || 0, {
		skip: !id,
	})

	return { profileData: data, isLoading, isError, isOwner }
}
