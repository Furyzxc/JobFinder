import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const Preloader = () => {
	return (
		<Box sx={{ position: 'absolute', top: '50%', left: '50%' }}>
			<CircularProgress />
		</Box>
	)
}
