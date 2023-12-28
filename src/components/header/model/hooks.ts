import { useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '@/shared/lib/capitalize-first-letter.ts'

const TITLE_LIST = [
	'about',
	'login',
	'profile',
	'dialogs',
	'users',
	'music',
	'news',
	'settings',
] as const

export const useHeaderPageName = () => {
	const { pathname } = useLocation()
	// pathname example /settings/account

	const segments = pathname.split('/')
	// ['', 'settings', 'account']

	const title = segments[1]

	if (TITLE_LIST.some((TITLE) => TITLE === title)) {
		return capitalizeFirstLetter(segments[1])
		// will return 'Settings'
	}

	if (title === '') return 'Profile'

	return 'Not found'
}

export const useHeaderAvatar = () => {}
