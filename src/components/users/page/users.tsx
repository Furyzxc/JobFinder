import { Stack } from '@mui/material'
import { WithLoadingAndError } from '@/shared/hoc'
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
			<WithLoadingAndError isLoading={isFetching} isError={isError}>
				<UsersList usersData={data} />
			</WithLoadingAndError>
		</Stack>
	)
}
