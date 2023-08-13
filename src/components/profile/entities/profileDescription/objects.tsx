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

export interface DescriptionSectionProps {
	lookingForAJob: boolean
	lookingForAJobDescription: string | null

	socialAccounts: {
		[key: string]: string | null
		github: string | null
		linkedin: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		telegram: string | null
	}
}

export interface ContactNames {
	[key: string]: string

	github: string
	linkedin: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	telegram: string
}

export interface ContactImages {
	[key: string]: ReactNode

	github: ReactNode
	linkedin: ReactNode
	facebook: ReactNode
	instagram: ReactNode
	twitter: ReactNode
	website: ReactNode
	youtube: ReactNode
	telegram: ReactNode
}

export const contactImages: ContactImages = {
	github: <GitHub />,
	linkedin: <LinkedIn />,
	facebook: <Facebook />,
	instagram: <Instagram />,
	twitter: <Twitter />,
	website: <Language />,
	youtube: <YouTube />,
	telegram: <Telegram />,
}

export const contactNames: ContactNames = {
	github: 'GitHub',
	linkedin: 'LinkedIn',
	facebook: 'Facebook',
	instagram: 'Instagram',
	twitter: 'Twitter',
	website: 'Website',
	youtube: 'YouTube',
	telegram: 'Telegram',
}
