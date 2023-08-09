import { Grid } from '@mui/material'
import { WithError } from '@/shared/hoc'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useAppSelector } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div'
import { User } from '@/entities/user'
import s from '@/features/usersList/users.module.css'
import { getPaginator } from '@/slices/paginator'
import { useGetUsersQuery } from '@/slices/users/users-api.ts'

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
		<WithLoading isLoading={isFetching}>
			<WithError isError={isError}>
				<Grid container className={s.usersList + ' scroll'}>
					{data?.items && data?.items.length > 0 ? (
						data?.items.map(user => <User {...user} key={user.id} />)
					) : (
						<Div>Users not found</Div>
					)}
				</Grid>
			</WithError>
		</WithLoading>
	)
}
