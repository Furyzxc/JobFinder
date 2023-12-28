import { Stack } from '@mui/material'
import { memo, useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDebounce } from 'usehooks-ts'
import { WithLoadingAndError } from '@/shared/hoc'
import { countPages } from '@/shared/lib/count-pages.ts'
import { Div } from '@/shared/ui/div'
import { useGetUsersQuery } from '@/components/users/api/api.ts'
import { User } from '../../entities/user'
import { Paginator } from '../paginator'

const DEFAULT_API_PORTION = 30

export const UsersList = memo(() => {
	console.log(1)
	const [searchParams] = useSearchParams()
	const { search: queryParams } = useLocation()
	const debouncedParams = useDebounce(queryParams, 1000)

	const { data, isFetching, isError } = useGetUsersQuery(debouncedParams)

	const pagesCount = useMemo(() => {
		if (data) {
			const portion = searchParams.get('count') || DEFAULT_API_PORTION

			return countPages(data.totalCount, +portion)
		}

		return 0
	}, [data, searchParams])

	const users = data?.items

	return (
		<WithLoadingAndError isLoading={isFetching} isError={isError}>
			<Stack spacing={1}>
				<Stack
					flexWrap={'wrap'}
					direction={'row'}
					sx={{
						justifyContent: 'space-around',
						minHeight: '100%',
						flexGrow: 1,
					}}
				>
					{users && users.length > 0 ? (
						users.map((user) => <User {...user} key={user.id} />)
					) : (
						<Div>Users not found</Div>
					)}
				</Stack>
				<Paginator pagesCount={pagesCount} />
			</Stack>
		</WithLoadingAndError>
	)
})
