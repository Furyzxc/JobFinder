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
import { ReactNode } from 'react'
import { useOwnerInfo } from './useOwnerInfo.ts'
import { SocialAccountsType } from '@/components/settings/model/slice.ts'

export interface Link {
	key: number
	name: SocialAccountsType
	defaultValue: string
	icon: ReactNode
}

export const useSocialLinks = (): Link[] => {
	const { info } = useOwnerInfo()
	const socialAccounts = info?.socialAccounts

	if (socialAccounts) {
		return [
			{
				key: Math.random(),
				name: 'github',
				defaultValue: socialAccounts['github'] || '',
				icon: <GitHub />,
			},
			{
				key: Math.random(),
				name: 'linkedin',
				defaultValue: socialAccounts['linkedin'] || '',
				icon: <LinkedIn />,
			},
			{
				key: Math.random(),
				name: 'facebook',
				defaultValue: socialAccounts['facebook'] || '',
				icon: <Facebook />,
			},
			{
				key: Math.random(),
				name: 'instagram',
				defaultValue: socialAccounts['instagram'] || '',
				icon: <Instagram />,
			},
			{
				key: Math.random(),
				name: 'twitter',
				defaultValue: socialAccounts['twitter'] || '',
				icon: <Twitter />,
			},
			{
				key: Math.random(),
				name: 'website',
				defaultValue: socialAccounts['website'] || '',
				icon: <Language />,
			},
			{
				key: Math.random(),
				name: 'youtube',
				defaultValue: socialAccounts['youtube'] || '',
				icon: <YouTube />,
			},
			{
				key: Math.random(),
				name: 'telegram',
				defaultValue: socialAccounts['telegram'] || '',
				icon: <Telegram />,
			},
		]
	}
	return []
}
