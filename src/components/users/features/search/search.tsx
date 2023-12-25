import { Stack } from '@mui/material'
import { SearchUI } from '@/shared/ui/search'
import { FilterBody } from '../../entities/filterBody'

export const Search = () => {
	return (
		<Stack direction={'row'} sx={{ p: '0 10px' }} spacing={2}>
			<SearchUI param={'term'} recentSearchStorage={'recent-users'} />
			<FilterBody />
		</Stack>
	)
}
