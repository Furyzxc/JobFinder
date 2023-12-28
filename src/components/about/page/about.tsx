import { Stack, Typography } from '@mui/material'
import { useSmoothAppearance } from '@/shared/model/hooks'

export const About = () => {
	const { ref } = useSmoothAppearance()
	return (
		<Stack alignItems={'center'} ref={ref}>
			<Stack
				sx={{
					pt: '80px',
					mb: '40px',
					textAlign: 'center',
				}}
			>
				<Typography sx={{ fontSize: '18px', color: '#2F8DEB' }} variant={'h6'}>
					About us
				</Typography>
				<Typography
					sx={{
						fontSize: '29px',
					}}
					variant={'h6'}
				>
					Embarking on a mission to artfully guide you
				</Typography>
				<Typography sx={{ color: '#2F8DEB', fontSize: '29px' }} variant={'h6'}>
					in discovering the path to your ideal career
				</Typography>
			</Stack>
			<Typography
				sx={{
					fontSize: '15px',
					maxWidth: '400px',
					textAlign: 'center',
					color: '#4C555F',
				}}
				variant={'h6'}
			>
				Empowering connections, fostering communication, unlocking job
				opportunities, expanding your network, job hunting and collaborating
				with like-minded professionals...
			</Typography>
		</Stack>
	)
}
