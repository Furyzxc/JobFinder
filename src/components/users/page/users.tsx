import { Stack } from '@mui/material'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { WithLoadingAndError } from '@/shared/hoc'
import { countPages } from '@/shared/lib/count-pages.ts'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { useGetUsersQuery } from '@/components/users/api/api.ts'
import { Filter } from '@/components/users/features/filter'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'

export const Users = () => {
	const { ref } = useSmoothAppearance()

	const { search: params } = useLocation()

	const { isError, data, isFetching } = useGetUsersQuery(params)

	const pagesCount = useMemo(() => {
		if (data) {
			return countPages(
				data.totalCount,
				Number(params.match(/count=([0-9]+)/)) || 60
			)
		}

		return 0
	}, [data, params])

	return (
		<Stack className={'noNavigationHeight'} ref={ref} spacing={1}>
			<Stack direction={'row'} sx={{ p: '0 10px' }}>
				<Search />
				<Filter />
			</Stack>
			<WithLoadingAndError isLoading={isFetching} isError={isError}>
				{data && <UsersList users={data.items} pagesCount={pagesCount} />}
			</WithLoadingAndError>
		</Stack>
	)
}
