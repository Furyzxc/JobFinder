import { Grid } from '@mui/material'
import { memo, useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { WithLoadingAndError } from '@/shared/hoc'
import { countPages } from '@/shared/lib/count-pages.ts'
import { Div } from '@/shared/ui/div'
import { useGetUsersQuery } from '@/components/users/api/api.ts'
import { User } from '../../entities/user'
import { Paginator } from '../paginator'
import s from './users.module.css'

const DEFAULT_API_PORTION = 30

export const UsersList = memo(() => {
	const [searchParams] = useSearchParams()
	const { search: queryParams } = useLocation()

	const { data, isFetching, isError } = useGetUsersQuery(queryParams)

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
			<Grid
				container
				className={'scroll'}
				sx={{ textAlign: 'center', height: '100%' }}
			>
				<Grid xs item container className={s.usersList}>
					{users && users.length > 0 ? (
						users.map(user => <User {...user} key={user.id} />)
					) : (
						<Div>Users not found</Div>
					)}
				</Grid>
				<Grid xs={12} item sx={{ flexGrow: 1, alignSelf: 'end' }}>
					<Paginator pagesCount={pagesCount} />
				</Grid>
			</Grid>
		</WithLoadingAndError>
	)
})
