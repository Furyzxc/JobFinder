import { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/shared/ui/button'

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
		<Button startIcon={icon} bgColor={urlPath === path} onClick={handleClick}>
			{name}
		</Button>
	)
}
