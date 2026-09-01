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
					About Nexus
				</Typography>
				<Typography
					sx={{
						fontSize: '29px',
					}}
					variant={'h6'}
				>
					Connect with people and stay
				</Typography>
				<Typography sx={{ color: '#2F8DEB', fontSize: '29px' }} variant={'h6'}>
					connected with what matters to you
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
				Discover new people, chat with your friends, and keep up with the latest
				news — all in one place.
			</Typography>
		</Stack>
	)
}
