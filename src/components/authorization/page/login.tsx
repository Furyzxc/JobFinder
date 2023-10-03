import { Container, Stack } from '@mui/material'
import { WithLoading } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { useAuth } from '../model/hooks.ts'
import { Icon } from '../entities/icon'
import { Title } from '../entities/title'
import { Form } from '../features/form'


export const Login = () => {
	const { isLoading } = useAuth()

	const { ref } = useSmoothAppearance()

	return (
		<Container component='main' maxWidth='xs' ref={ref}>
			<WithLoading isLoading={isLoading}>
				<Stack sx={{ mt: 8, alignItems: 'center' }}>
					<Icon />
					<Title />
					<Form />
				</Stack>
			</WithLoading>
		</Container>
	)
}