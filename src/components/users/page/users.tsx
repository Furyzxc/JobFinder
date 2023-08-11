import { Stack } from '@mui/material'
import { Paginator } from '../features/paginator'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'

export const Users = () => {
	return (
		<Stack className={'height'}>
			<Search />
			<UsersList />
			<Paginator />
		</Stack>
	)
}
