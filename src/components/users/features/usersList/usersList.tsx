import { Grid } from '@mui/material'
import { WithError } from '@/shared/hoc'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { Div } from '@/shared/ui/div'
import { useGetUsersQuery } from '../../api/api.ts'
import { User } from '../../entities/user'
import s from './users.module.css'
import { usePaginator, useUsersState } from '@/components/users/model/hooks.ts'

export const UsersList = () => {
	const { page, count } = usePaginator()
	const { term, friend } = useUsersState()

	const { isFetching, data, isError } = useGetUsersQuery({
		count,
		page,
		term,
		friend,
	})

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
