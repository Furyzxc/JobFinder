import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAnimation } from '@/shared/model/hooks'
import { Icon, useNavigationIcons } from './useNavigationIcons.tsx'

interface Navigation {
	icons: Icon[]
	animationRef: any
	handleNavElementClick: (pathname: string) => () => void
	closeNavigation: () => void
}

export const useNavigation = (
	setIsShow: (value: boolean) => void
): Navigation => {
	const icons = useNavigationIcons()

	const { ref: animationRef } = useAnimation({ left: 0 }, { left: -300 }, 0.1)

	const navigate = useNavigate()

	const closeNavigation = useCallback(() => setIsShow(false), [setIsShow])

	const handleNavElementClick = (pathname: string) => () => {
		closeNavigation()
		navigate(pathname)
	}

	return {
		icons,
		animationRef,
		handleNavElementClick,
		closeNavigation,
	}
}
