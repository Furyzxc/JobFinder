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

	contacts: {
		[key: string]: string | null
		github: string | null
		vk: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink: string | null
	}
}

export interface ContactNames {
	[key: string]: string

	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

export interface ContactImages {
	[key: string]: ReactNode

	github: ReactNode
	vk: ReactNode
	facebook: ReactNode
	instagram: ReactNode
	twitter: ReactNode
	website: ReactNode
	youtube: ReactNode
	mainLink: ReactNode
}

export const contactImages: ContactImages = {
	github: <GitHub />,
	vk: <LinkedIn />,
	facebook: <Facebook />,
	instagram: <Instagram />,
	twitter: <Twitter />,
	website: <Language />,
	youtube: <YouTube />,
	mainLink: <Telegram />,
}

export const contactNames: ContactNames = {
	github: 'GitHub',
	vk: 'LinkedIn',
	facebook: 'Facebook',
	instagram: 'Instagram',
	twitter: 'Twitter',
	website: 'Website',
	youtube: 'YouTube',
	mainLink: 'Telegram',
}
