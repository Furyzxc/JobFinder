import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, Typography } from '@mui/material'
import { WithLoading } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Form } from '../features/form'
import { useAuth } from '../model/hooks.ts'

export const Login = () => {
	const { isLoading } = useAuth()

	const { ref } = useSmoothAppearance()

	return (
		<Container component='main' maxWidth='xs' ref={ref}>
			<WithLoading isLoading={isLoading}>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Form />
				</Box>
			</WithLoading>
		</Container>
	)
}
