import { Grid } from '@mui/material'
import { SearchFilterByFriend } from '../../entities/searchFilterByFriend'
import { SearchInput } from '../../entities/searchInput'

export const Search = () => {
	return (
		<Grid container sx={{ m: '10px 0 0 20px' }}>
			<Grid item xs={9} md={4} sm={6}>
				<SearchInput />
			</Grid>
			<Grid item xs={2} sx={{ pt: '10px' }}>
				<SearchFilterByFriend />
			</Grid>
		</Grid>
	)
}
