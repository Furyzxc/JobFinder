import { ProfileResponseBody, useGetProfileQuery } from '@/components/profile'
import { useUserDetails } from './useUserDetails.ts'

interface GetProfile {
	profileData: ProfileResponseBody | undefined
	isLoading: boolean
	isError: boolean
	isOwner: boolean
}

export const useGetProfile = (): GetProfile => {
	const { id = 0, isOwner } = useUserDetails()

	const { data, isLoading, isError } = useGetProfileQuery(id, {
		skip: !id,
	})


	return { profileData: data, isLoading, isError, isOwner }
}
