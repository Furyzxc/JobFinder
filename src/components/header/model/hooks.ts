import { useLocation } from 'react-router-dom'

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const useHeaderPageName = () => {
	const { pathname } = useLocation()
	// pathname example /settings/account

	const segments = pathname.split('/')
	// ['', 'settings', 'account']

	return capitalizeFirstLetter(segments[1])
	// will return 'Settings'
}
