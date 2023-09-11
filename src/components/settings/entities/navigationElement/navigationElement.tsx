import { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FocusedButton } from '@/shared/ui/focusedButton'

type PropsType = {
	icon: ReactNode
	name: string
	path: string
}

export const NavigationElement = ({ name, path, icon }: PropsType) => {
	const navigate = useNavigate()

	const urlParams = useParams()
	const urlPath = urlParams['*']

	const handleClick = () => {
		if (urlPath !== path) navigate(path)
	}

	return (
		<FocusedButton
			startIcon={icon}
			bgColor={urlPath === path}
			onClick={handleClick}
		>
			{name}
		</FocusedButton>
	)
}
