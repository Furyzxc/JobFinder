import { useLocation } from 'react-router-dom'

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const TITLE_LIST = [
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

	if (TITLE_LIST.some(TITLE => TITLE === title)) {
		return capitalizeFirstLetter(segments[1])
	}

	if (title === '') return 'Profile'

	return 'This page is not available'
	// will return 'Settings'
}
