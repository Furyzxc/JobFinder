import { useGetUsersQuery } from '../../api/api.ts'
import { GetUsersResponse } from '../../api/types.ts'
import { usePaginator } from './usePaginator.ts'
import { useUsersState } from './useUsersState.ts'

interface GetUsers {
	data: GetUsersResponse | undefined
	isError: boolean
	isFetching: boolean
}

export const useGetUsers = (): GetUsers => {
	const { page, count } = usePaginator()
	const { term, friend } = useUsersState()

	const { data, isError, isFetching } = useGetUsersQuery({
		count,
		page,
		term,
		friend,
	})

	return {
		isFetching,
		data,
		isError,
	}
}
