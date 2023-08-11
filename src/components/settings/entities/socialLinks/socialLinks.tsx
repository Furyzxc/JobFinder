import { Box, Grid, Stack, TextField } from '@mui/material'
import { useSocialLinks } from '../../model/hooks'

export const SocialLinks = () => {
	const links = useSocialLinks()

	return (
		<Stack direction={'column'} spacing={1}>
			{links.map(({ icon }) => (
				<Grid container key={Math.random()}>
					<Grid item xs={1.5} md={0.6} sm={0.6}>
						<Box sx={{ pt: '5px' }}>{icon}</Box>
					</Grid>
					<Grid item xs={10} md={7} sm={8}>
						<TextField
							inputProps={{ style: { fontSize: 12 } }}
							placeholder={'Link to social profile'}
							sx={{
								fontSize: '12px',
								fontWeight: '100',
								width: '100%',
								backgroundColor: '#0D1117',
							}}
							size={'small'}
						/>
					</Grid>
				</Grid>
			))}
		</Stack>
	)
}
