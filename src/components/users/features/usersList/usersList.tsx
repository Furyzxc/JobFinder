import { Grid } from '@mui/material'
import { WithError } from '@/shared/hoc'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div'
import { useGetUsersQuery } from '../../api/api.ts'
import { User } from '../../entities/user'
import { getPaginator } from '../../model/slice.ts'
import s from './users.module.css'

export const UsersList = () => {
	const { page, term, count, friend } = useAppSelector(getPaginator)

	const { isFetching, data, isError } = useGetUsersQuery(
		{
			count,
			page,
			term,
			friend,
		},
		{ refetchOnMountOrArgChange: page }
	)

	return (
		<Grid container className={s.usersList + ' scroll'}>
			<WithLoading isLoading={isFetching}>
				<WithError isError={isError}>
					{data?.items && data?.items.length > 0 ? (
						data?.items.map(user => <User {...user} key={user.id} />)
					) : (
						<Div>Users not found</Div>
					)}
				</WithError>
			</WithLoading>
		</Grid>
	)
}
