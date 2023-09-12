import { Button } from '@mui/material'
import { memo } from 'react'
import { Section } from '../profileSection'

type PropsType = {
	signoutFromAccount: () => void
}

export const SignoutSection = memo(({ signoutFromAccount }: PropsType) => {
	const signout = () => signoutFromAccount()

	return (
		<Section
			name={'Sign out'}
			paragraphFont={'20px'}
			paragraphColor={'#F85149'}
			paragraphPL={'4px'}
		>
			<Button
				id={'signout'}
				onClick={signout}
				sx={{
					width: '175px',
					bgcolor: 'error.dark',
					color: 'error.light',
					borderRadius: '6px',
					textTransform: 'none',
					'&:hover, &:focus': {
						color: 'secondary.light',
						bgcolor: 'error.main',
					},
				}}
			>
				Sign out from account
			</Button>
		</Section>
	)
})
