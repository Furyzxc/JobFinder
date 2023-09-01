import { Stack } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { IEntity } from '@/components/settings/model/hooks'

type PropsType = {
	entities: IEntity[]
}

// displays section of navigation elements
export const NavigationGroup = ({ entities }: PropsType) => {
	const urlParams = useParams()
	const urlPath = urlParams['*']

	const navigate = useNavigate()

	const handleNavElementClick = (path: string) => () => {
		if (urlPath !== path) navigate(path)
	}

	return (
		<Stack sx={{ pr: '10px' }}>
			{entities.map(({ name, icon, path }) => (
				<Button
					startIcon={icon}
					bgColor={urlPath === path}
					onClick={handleNavElementClick(path)}
				>
					{name}
				</Button>
			))}
		</Stack>
	)
}
