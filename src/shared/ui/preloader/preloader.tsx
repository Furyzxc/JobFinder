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
			<CircularProgress
				sx={{
					color: 'secondary.main',
					zIndex: 0,
				}}
				variant='determinate'
				value={100}
				thickness={7}
			/>
			<CircularProgress
				sx={{
					color: 'primary.main',
					zIndex: 2,
					ml: '-40px',
				}}
				thickness={7}
			/>
		</Box>
	)
}
