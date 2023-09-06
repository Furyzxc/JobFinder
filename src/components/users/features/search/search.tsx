import { Stack } from '@mui/material'
import { FilterBody } from '../../entities/filterBody'
import { SearchInput } from '../../entities/searchInput'

export const Search = () => {
	return (
		<Stack direction={'row'} sx={{ p: '0 10px' }}>
			<SearchInput />
			<FilterBody />
		</Stack>
	)
}
