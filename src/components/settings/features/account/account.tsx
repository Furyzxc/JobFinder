import { Stack } from '@mui/material'
import { WithError, WithLoading } from '@/shared/hoc'
import { SignoutSection } from '../../entities/logoutSection'
import { Title } from '../../entities/title'
import { useLogoutMutation } from '@/components/authorization'

export const Account = () => {
	const [signoutFromAccount, { isLoading, isError }] = useLogoutMutation()

	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError}>
				<Stack direction={'column'} spacing={2} sx={{ overflowX: 'hidden' }}>
					<Title name={'Account'} />
					<SignoutSection signoutFromAccount={signoutFromAccount} />
				</Stack>
			</WithError>
		</WithLoading>
	)
}
