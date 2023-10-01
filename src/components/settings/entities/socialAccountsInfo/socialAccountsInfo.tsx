import {
	Facebook,
	GitHub,
	Instagram,
	Language,
	LinkedIn,
	Telegram,
	Twitter,
	YouTube,
} from '@mui/icons-material'
import { Stack } from '@mui/material'
import { memo } from 'react'
import { SocialAccounts } from '@/components/profile'
import { Section } from '../profileSection'
import { SocialAccount } from '../socialAccount'

export const SocialAccountsInfo = memo(
	({
		github,
		instagram,
		linkedin,
		twitter,
		website,
		youtube,
		telegram,
		facebook,
	}: SocialAccounts) => {
		return (
			<Section name={'Social Accounts'}>
				<Stack spacing={1}>
					<SocialAccount
						initialValue={github}
						icon={<GitHub />}
						fieldName={'github'}
					/>
					<SocialAccount
						initialValue={instagram}
						icon={<Instagram />}
						fieldName={'instagram'}
					/>
					<SocialAccount
						initialValue={linkedin}
						icon={<LinkedIn />}
						fieldName={'linkedin'}
					/>
					<SocialAccount
						initialValue={twitter}
						icon={<Twitter />}
						fieldName={'twitter'}
					/>
					<SocialAccount
						initialValue={facebook}
						icon={<Facebook />}
						fieldName={'facebook'}
					/>
					<SocialAccount
						initialValue={telegram}
						icon={<Telegram />}
						fieldName={'telegram'}
					/>
					<SocialAccount
						initialValue={website}
						icon={<Language />}
						fieldName={'website'}
					/>
					<SocialAccount
						initialValue={youtube}
						icon={<YouTube />}
						fieldName={'youtube'}
					/>
				</Stack>
			</Section>
		)
	}
)
