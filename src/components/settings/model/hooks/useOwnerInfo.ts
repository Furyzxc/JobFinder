import { useAuthInfo } from '@/components/authorization'
import { useGetProfileQuery, useGetUserStatusQuery } from '@/components/profile'
import { ProfileResponseBody } from '@/components/profile/api/types.ts'

interface Owner {
	info: (ProfileResponseBody & { status: string }) | undefined | any
	isLoading: boolean
	isError: boolean
}

// Custom hook to fetch owner information and status.
export const useOwnerInfo = (): Owner => {
	const { id } = useAuthInfo()

	const {
		data: profile,
		isLoading: loading,
		isError: error,
		// @ts-ignore
	} = useGetProfileQuery(id, {
		skip: !id,
	})

	const {
		data: status,
		isLoading,
		isError,
		// @ts-ignore
	} = useGetUserStatusQuery(id, {
		skip: !id,
	})

	return {
		info: { ...profile, status },
		isLoading: [loading, isLoading].some(loading => loading),
		isError: [error, isError].some(err => err),
	}
}
