import { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FocusedButton } from '@/shared/ui/focusedButton'

type PropsType = {
	startIcon: ReactNode
	name: string
	path: string
	endIcon?: ReactNode
	onClick?: () => void
	disabled?: boolean
}

export const NavigationElement = ({
	name,
	path,
	startIcon,
	endIcon,
	disabled,
	onClick,
}: PropsType) => {
	const navigate = useNavigate()

	const urlParams = useParams()
	const urlPath = urlParams['*']

	const handleClick = () => {
		if (urlPath !== path) {
			onClick && onClick()
			!disabled && navigate(path)
		}
	}

	return (
		<FocusedButton
			startIcon={startIcon}
			endIcon={endIcon}
			selected={urlPath === path}
			onClick={handleClick}
		>
			{name}
		</FocusedButton>
	)
}
