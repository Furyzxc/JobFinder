import { Stack, Typography } from '@mui/material'

export const About = () => {
	return (
		<Stack alignItems={'center'}>
			<Stack
				sx={{
					pt: '80px',
					mb: '40px',
					textAlign: 'center',
					//background:
					//"url('src/assets/images/img_1.jpg') 50% 50%/100% 100% no-repeat",
					//backgroundSize: 'cover',
					//opacity: 0.4,
				}}
			>
				<Typography sx={{ fontSize: '15px', color: '#2F8DEB' }} variant={'h6'}>
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
					width: '400px',
					textAlign: 'center',
					color: '#4C555F',
				}}
				variant={'h6'}
			>
				Empowering connections, fostering communication, unlocking job
				opportunities, expanding your network, job hunting, and collaborating
				with like-minded professionals...
			</Typography>
		</Stack>
	)
}
