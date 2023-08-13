import { useAuthInfo } from '@/components/authorization'
import { useGetProfileQuery } from '@/components/profile'
import { ProfileResponseBody } from '@/components/profile/api/types.ts'

interface Owner {
	info: ProfileResponseBody | undefined
	isLoading: boolean
	isError: boolean
}

// Custom hook to fetch owner information and status.
export const useOwnerInfo = (): Owner => {
	const { id } = useAuthInfo()

	const {
		data: profile,
		isLoading,
		isError,
		// @ts-ignore
	} = useGetProfileQuery(id, {
		skip: !id,
	})

	return {
		info: profile,
		isLoading,
		isError,
	}
}
