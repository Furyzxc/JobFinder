import { Stack } from '@mui/material'
import { WithError, WithLoading } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'
import { useGetUsers } from '../model/hooks'

export const Users = () => {
	const { ref } = useSmoothAppearance()

	const { isError, data, isFetching } = useGetUsers()

	return (
		<Stack className={'noNavigationHeight'} ref={ref} spacing={1}>
			<Search />
			<WithLoading isLoading={isFetching}>
				<WithError isError={isError}>
					<UsersList usersData={data} />
				</WithError>
			</WithLoading>
		</Stack>
	)
}
