import { Stack } from '@mui/material'
import { WithLoadingAndError } from '@/shared/hoc'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { SignoutSection } from '../../entities/logoutSection'
import { Title } from '../../entities/title'
import { useLogoutMutation } from '@/components/authorization'

export const Account = () => {
	const [signoutFromAccount, { isLoading, isError }] = useLogoutMutation()

	const { ref } = useSmoothAppearance()
	return (
		<Stack
			direction={'column'}
			spacing={2}
			sx={{ overflowX: 'hidden' }}
			ref={ref}
		>
			<WithLoadingAndError isLoading={isLoading} isError={isError}>
				<Title name={'Account'} />
				<SignoutSection signoutFromAccount={signoutFromAccount} />
			</WithLoadingAndError>
		</Stack>
	)
}
