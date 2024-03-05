import { Link, Stack } from '@mui/material'
import { SocialAccounts } from '@/components/profile'
import { accountsNames } from './accountsNames.ts'

interface PropsType extends SocialAccounts {
	[key: string]: string | null
}

export const SocialAccountsLinks = (accounts: PropsType) => {
	return (
		<Stack direction={'row'} flexWrap='wrap' sx={{ justifyContent: 'center' }}>
			{Object.keys(accounts).map((key) => {
				const link = accounts[key]

				if (link) {
					// adding https to link
					const linkToAccount = link.startsWith('https://') ? link : '//' + link

					return (
						<Link
							color={'primary.main'}
							key={key}
							href={linkToAccount}
							sx={{ m: '0 10px 10px 0' }}
						>
							{accountsNames[key]}
						</Link>
					)
				}
			})}
		</Stack>
	)
}
