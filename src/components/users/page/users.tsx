import { Stack } from '@mui/material'
import { memo } from 'react'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Search } from '../features/search'
import { UsersList } from '../features/usersList'

export const Users = memo(() => {
	const { ref } = useSmoothAppearance()

	return (
		<Stack className={'noNavigationHeight'} ref={ref} spacing={1}>
			<Search />
			<UsersList />
		</Stack>
	)
})
