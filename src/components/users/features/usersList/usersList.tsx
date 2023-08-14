import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithError } from '@/shared/hoc'
import { WithLoading } from '@/shared/hoc/withLoading.tsx'
import { useScroll } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { useGetUsersQuery } from '../../api/api.ts'
import { User } from '../../entities/user'
import s from './users.module.css'
import { usePaginator, useUsersState } from '@/components/users/model/hooks.ts'

export const UsersList = memo(() => {
	const { page, count } = usePaginator()
	const { term, friend } = useUsersState()

	const { isFetching, data, isError } = useGetUsersQuery({
		count,
		page,
		term,
		friend,
	})

	const scroll = useScroll()

	return (
		<Grid container className={s.usersList + ' scroll'} {...scroll}>
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
})
