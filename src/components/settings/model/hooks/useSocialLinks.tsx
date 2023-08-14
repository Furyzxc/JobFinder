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
import { SocialAccountsType } from '../slice.ts'
import { useOwnerInfo } from './useOwnerInfo.ts'

export interface Link {
	key: number // react key
	name: SocialAccountsType // link name
	defaultValue: string // value from store's state
	icon: ReactNode // link's icon
}

// Common data for social media links
const socialMediaLinks: Omit<Link, 'defaultValue' | 'key'>[] = [
	{
		name: 'github',
		icon: <GitHub />,
	},
	{
		name: 'linkedin',
		icon: <LinkedIn />,
	},
	{
		name: 'facebook',
		icon: <Facebook />,
	},
	{
		name: 'instagram',
		icon: <Instagram />,
	},
	{
		name: 'twitter',
		icon: <Twitter />,
	},
	{
		name: 'website',
		icon: <Language />,
	},
	{
		name: 'youtube',
		icon: <YouTube />,
	},
	{
		name: 'telegram',
		icon: <Telegram />,
	},
]

/**
 * Generates an array of social media links with their associated data.
 * @returns array of social media links.
 */
export const useSocialLinks = (): Link[] => {
	const { info } = useOwnerInfo()
	const socialAccounts = info?.socialAccounts
	// if exists
	if (socialAccounts) {
		// Map social media link data to Link objects, adding key and default value
		return socialMediaLinks.map(link => ({
			key: Math.random(),
			name: link.name,
			defaultValue: socialAccounts[link.name] || '',
			icon: link.icon,
		}))
	}

	return []
}
