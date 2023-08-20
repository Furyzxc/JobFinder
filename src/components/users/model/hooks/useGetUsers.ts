import { useEffect } from 'react'
import { useActions } from '@/shared/model/hooks'
import { countPages } from '@/shared/utils/count-pages.ts'
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
	// getting
	const { page, count } = usePaginator()
	const { term, friend } = useUsersState()

	const { setPagesCount } = useActions()

	// sends request to server
	const { data, isError, isFetching } = useGetUsersQuery({
		count,
		page,
		term,
		friend,
	})

	useEffect(() => {
		// when receives data from server
		if (data) {
			// using handler to count amount of pages
			const pagesCount = countPages(data.totalCount, count)
			// setting pages value to state
			setPagesCount(pagesCount)
		}
	}, [count, data, setPagesCount])

	return {
		isFetching,
		data,
		isError,
	}
}
