import { useLocation } from 'react-router-dom'

export const useTab = () => {
	const { pathname } = useLocation()

	return pathname.split('/')[1]
}
