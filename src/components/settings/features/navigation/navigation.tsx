import { Button, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { IEntity, useSettingsNavigation } from '../../model/hooks'
import s from './style.module.css'

type PropsType = {
	entities: IEntity[]
}

// displays section of elements (entities)
const NavigationGroup = ({ entities }: PropsType) => {
	const urlParams = useParams()

	const urlPath = urlParams['*']

	const navigate = useNavigate()

	const handleNavElementClick = (path: string) => () => navigate(path)

	return (
		<Stack sx={{ pr: '10px' }}>
			{entities.map(({ name, icon, path }) => (
				<Button
					key={name}
					onClick={handleNavElementClick(path)}
					className={s.btn}
					sx={{
						textAlign: 'none',
						minWidth: '100%',
						justifyContent: 'flex-start',
						height: '32px',
						color: '#7D8590',
						backgroundColor: urlPath === path ? '#1A1F24' : 'inherit',
					}}
					startIcon={icon}
				>
					<Typography
						variant={'h1'}
						sx={{ color: '#E6EDF3', fontSize: '13px', pt: '5px' }}
					>
						{name}
					</Typography>
				</Button>
			))}
		</Stack>
	)
}

// settings navigation on left side
export const Navigation = () => {
	const entities = useSettingsNavigation()

	return (
		<Stack direction={'column'}>
			<NavigationGroup entities={entities} />
		</Stack>
	)
}
