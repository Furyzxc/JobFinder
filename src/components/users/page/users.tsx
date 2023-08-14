import { Stack } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Paginator } from '../features/paginator'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'

export const Users = () => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack className={'noNavigationHeight'} ref={ref}>
			<Search />
			<UsersList />
			<Paginator />
		</Stack>
	)
}
