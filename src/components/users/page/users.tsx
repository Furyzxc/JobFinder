import { Stack } from '@mui/material'
import { Paginator } from '../features/paginator'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'
import s from './users.module.css'

export const Users = () => {
	return (
		<Stack className={s.users}>
			<Search />
			<UsersList />
			<Paginator />
		</Stack>
	)
}
