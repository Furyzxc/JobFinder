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

interface Link {
	// ref: any
	icon: ReactNode
}

export const useSocialLinks = (): Link[] => {
	return [
		{ icon: <GitHub /> },
		{ icon: <LinkedIn /> },
		{ icon: <Facebook /> },
		{ icon: <Instagram /> },
		{ icon: <Twitter /> },
		{ icon: <Language /> },
		{ icon: <YouTube /> },
		{ icon: <Telegram /> },
	]
}
