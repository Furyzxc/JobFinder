import { Box, CircularProgress } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'

export const Preloader = () => {
	const { ref } = useSmoothAppearance()

	return (
		<Box
			ref={ref}
			sx={{
				position: 'absolute',
				top: '50%',
				left: 0,
				width: '100%',
				textAlign: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	)
}
