import { Box, Stack, TextField } from '@mui/material'
import { useSocialLinks } from '../../model/hooks'

export const SocialLinks = () => {
	const links = useSocialLinks()

	return (
		<Stack direction={'column'} spacing={1}>
			{links.map(({ icon }) => (
				<Stack direction={'row'} spacing={1} key={Math.random()}>
					<Box sx={{ pt: '5px' }}>{icon}</Box>
					<TextField
						inputProps={{ style: { fontSize: 12 } }}
						placeholder={'Link to social profile'}
						sx={{
							fontSize: '12px',
							fontWeight: '100',
							width: '50%',
							backgroundColor: '#0D1117',
						}}
						size={'small'}
					/>
				</Stack>
			))}
		</Stack>
	)
}
