import { useAuthInfo } from '@/components/authorization'
import { ProfileResponseBody, useGetProfileQuery } from '@/components/profile'

interface Owner {
	info: ProfileResponseBody | undefined
	isLoading: boolean
	isError: boolean
}

// Custom hook to fetch owner information.
export const useOwnerInfo = (): Owner => {
	// taking profile id from auth reducer state
	const { id } = useAuthInfo()

	const {
		data: profile,
		isLoading,
		isError,
	} = useGetProfileQuery(id || 0, {
		skip: !id, // if no userid, request will not be sent
	})

	return {
		info: profile,
		isLoading,
		isError,
	}
}
