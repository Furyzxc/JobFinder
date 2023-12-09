import { Grid } from '@mui/material'
import { Input } from '@/shared/ui/input'

export const SearchField = <T extends object>(props: T) => {
	return (
		<Grid container>
			<Grid item md={5} xs={11} sm={9} sx={{ pt: '4px' }}>
				<Input {...props} name={'search'} autoComplete={'off'} width={'100%'} />
			</Grid>
		</Grid>
	)
}
